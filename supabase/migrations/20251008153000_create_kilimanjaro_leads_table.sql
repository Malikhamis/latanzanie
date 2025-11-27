-- Create kilimanjaro_leads table
create table if not exists kilimanjaro_leads (
  id uuid default gen_random_uuid() primary key,
  unit_system text check (unit_system in ('metric', 'imperial')),
  height numeric,
  weight numeric,
  age integer,
  gender text,
  route text,
  stamina text check (stamina in ('poor', 'fair', 'good', 'excellent')),
  altitude_experience text check (altitude_experience in ('yes', 'no')),
  improvements text,
  email text,
  success_rate integer,
  created_at timestamp with time zone default now()
);

-- Add indexes for better query performance
create index if not exists idx_kilimanjaro_leads_email on kilimanjaro_leads(email);
create index if not exists idx_kilimanjaro_leads_route on kilimanjaro_leads(route);
create index if not exists idx_kilimanjaro_leads_created_at on kilimanjaro_leads(created_at);

-- Enable RLS (Row Level Security)
alter table kilimanjaro_leads enable row level security;

-- Create policy to allow inserts from anyone (for lead capture)
create policy "Allow public inserts" on kilimanjaro_leads
  for insert with check (true);

-- Grant necessary permissions
grant usage on schema public to anon, authenticated;
grant insert on table kilimanjaro_leads to anon, authenticated;
grant select on table kilimanjaro_leads to authenticated;