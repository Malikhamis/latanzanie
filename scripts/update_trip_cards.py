#!/usr/bin/env python3
"""
Update TripsPage cards in locale JSON files by copying title/description/duration/price
from their dedicated page namespaces when a likely match is found.

Usage:
  python scripts/update_trip_cards.py [--locales PATH] [--dry-run]

By default it edits all JSON files under `locales/` and updates `TripsPage.trips` entries.
It creates a `.bak` file for each locale before modifying it.
"""
from __future__ import annotations
import argparse
import json
from pathlib import Path
import shutil
import re
from typing import Any, Dict, List, Optional, Tuple


def load_json(path: Path) -> Dict[str, Any]:
    with path.open("r", encoding="utf-8") as f:
        return json.load(f)


def dump_json(path: Path, data: Dict[str, Any]) -> None:
    with path.open("w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)


def get_by_path(d: Dict[str, Any], path: List[str]) -> Optional[Any]:
    cur = d
    for p in path:
        if not isinstance(cur, dict):
            return None
        cur = cur.get(p)
        if cur is None:
            return None
    return cur


def tokenize(s: str) -> List[str]:
    if not s:
        return []
    # split on non-word, remove short tokens
    parts = re.split(r"\W+", s.lower())
    return [p for p in parts if len(p) > 2]


def score_candidate(tokens: List[str], namespace_key: str, namespace_obj: Dict[str, Any]) -> int:
    hay = namespace_key.lower()
    # look at hero.title and hero.description if present
    hero_title = get_by_path(namespace_obj, ["hero", "title"]) or ""
    hero_desc = get_by_path(namespace_obj, ["hero", "description"]) or ""
    hay += " " + str(hero_title).lower() + " " + str(hero_desc).lower()
    score = 0
    for t in tokens:
        if t in hay:
            score += 1
    return score


def choose_best_namespace(tokens: List[str], data: Dict[str, Any]) -> Optional[Tuple[str, Dict[str, Any]]]:
    best = (None, None, 0)
    for k, v in data.items():
        if k == "TripsPage":
            continue
        if not isinstance(v, dict):
            continue
        sc = score_candidate(tokens, k, v)
        if sc > best[2]:
            best = (k, v, sc)
    if best[0] is None or best[2] == 0:
        return None
    return (best[0], best[1])


def extract_fields(ns_obj: Dict[str, Any]) -> Dict[str, Optional[str]]:
    # Try common locations for title/description/duration/price
    title = get_by_path(ns_obj, ["hero", "title"]) or get_by_path(ns_obj, ["title"]) or None
    description = get_by_path(ns_obj, ["hero", "description"]) or get_by_path(ns_obj, ["overview", "intro"]) or None
    duration = get_by_path(ns_obj, ["hero", "duration"]) or get_by_path(ns_obj, ["duration"]) or None
    # price can be in hero.price or pricing.price
    price = get_by_path(ns_obj, ["hero", "price"]) or get_by_path(ns_obj, ["pricing", "price"]) or None
    # fallback more deeply
    if price is None:
        price = get_by_path(ns_obj, ["pricing", "price"]) or get_by_path(ns_obj, ["price"]) or None
    return {
        "title": title,
        "description": description,
        "duration": duration,
        "price": price,
    }


def update_trips_for_locale(path: Path, dry_run: bool = True, preserve_price: bool = True) -> List[str]:
    data = load_json(path)
    tripspage = data.get("TripsPage")
    if not tripspage:
        return [f"No TripsPage found in {path.name}, skipping."]
    trips = tripspage.get("trips")
    if not trips or not isinstance(trips, dict):
        return [f"No TripsPage.trips object in {path.name}, skipping."]

    changes = []
    top_level = data

    for trip_key, card in trips.items():
        # the card likely has a 'name' or 'title' to derive tokens from
        current_name = card.get("name") or card.get("title") or ""
        tokens = tokenize(current_name)
        if not tokens:
            # try using the key itself
            tokens = tokenize(trip_key)

        match = choose_best_namespace(tokens, top_level)
        if not match:
            changes.append(f"{trip_key}: no matching namespace found (tokens={tokens})")
            continue

        ns_key, ns_obj = match
        fields = extract_fields(ns_obj)
        if not any(fields.values()):
            changes.append(f"{trip_key}: found namespace {ns_key} but could not extract fields")
            continue

        # prepare update summary
        updated = []
        # update common fields in the TripsPage.trips card
        if fields.get("title"):
            # update 'name' or 'title'
            if card.get("name") != fields["title"]:
                updated.append(f"name: '{card.get('name')}' -> '{fields['title']}'")
                if not dry_run:
                    card['name'] = fields['title']
        if fields.get("description"):
            # some cards use 'description' or 'shortDescription'
            if card.get("description") != fields["description"]:
                updated.append("description")
                if not dry_run:
                    card['description'] = fields['description']
        if fields.get("duration"):
            if card.get("duration") != fields["duration"]:
                updated.append(f"duration: '{card.get('duration')}' -> '{fields['duration']}'")
                if not dry_run:
                    card['duration'] = fields['duration']
        if fields.get("price") and not preserve_price:
            # only update price when preserve_price is False
            if card.get("price") != fields["price"]:
                updated.append(f"price: '{card.get('price')}' -> '{fields['price']}'")
                if not dry_run:
                    card['price'] = fields['price']

        if updated:
            changes.append(f"{trip_key}: matched {ns_key}; updated: {', '.join(updated)}")
        else:
            changes.append(f"{trip_key}: matched {ns_key}; no changes needed")

    if not dry_run:
        # backup
        bak = path.with_suffix(path.suffix + ".bak")
        shutil.copy2(path, bak)
        dump_json(path, data)

    return changes


def main() -> None:
    p = argparse.ArgumentParser(description="Update TripsPage cards from dedicated page namespaces")
    p.add_argument("--locales", type=str, default="locales", help="path to locales folder")
    p.add_argument("--dry-run", action="store_true", help="print changes without writing files")
    args = p.parse_args()

    locales_dir = Path(args.locales)
    if not locales_dir.exists():
        print(f"Locales dir {locales_dir} not found")
        raise SystemExit(1)

    json_files = list(locales_dir.glob("*.json"))
    if not json_files:
        print(f"No JSON locale files found in {locales_dir}")
        raise SystemExit(1)

    overall = []
    for jf in json_files:
        print(f"Processing {jf} (dry-run={args.dry_run})")
        try:
            changes = update_trips_for_locale(jf, dry_run=args.dry_run)
            for c in changes:
                print("  -", c)
            overall.append((jf.name, changes))
        except Exception as e:
            print(f"  ERROR processing {jf}: {e}")

    print("Done. Summary:")
    for name, changes in overall:
        print(f"{name}: {len(changes)} item(s)")


if __name__ == "__main__":
    main()
