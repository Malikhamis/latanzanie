# Blog Post Template Guide

This guide explains how to use the standardized blog post template and customize it for different content.

## Template Structure

The template follows a consistent structure with the following sections:

1. **Hero Section** - With back navigation to travel blogs
2. **Author Meta** - Displays author information
3. **Table of Contents** - Both mobile and desktop versions
4. **Main Content Sections** - Flexible content areas
5. **Route Cards** - Canonical Kilimanjaro route showcase
6. **Email CTA** - Subscription form

## How to Customize the Template

### 1. Update the Translation Namespace

Replace `'BlogPostNamespace'` with the appropriate namespace for your blog post:

```typescript
const t = useTranslations('YourBlogPostNamespace')
```

### 2. Customize Sections

Modify the `sections` array to match your blog post content:

```typescript
const sections: Section[] = [
  { id: 'introduction', title: t('sections.introduction.title') },
  { id: 'why-important', title: t('sections.why_important.title') },
  { id: 'how-to-prepare', title: t('sections.how_to_prepare.title') },
  { id: 'equipment-needed', title: t('sections.equipment_needed.title') },
  { id: 'conclusion', title: t('sections.conclusion.title') }
]
```

### 3. Add/Remove Content Sections

Add new sections by copying the existing section structure:

```typescript
<section id="your-section-id" className="bg-white rounded-lg shadow-md p-8">
  <h2 className="text-3xl font-bold text-gray-900 mb-6">
    {t('sections.your_section.title')}
  </h2>
  <div className="prose prose-lg max-w-none text-gray-700">
    <p className="mb-4">{t('sections.your_section.content.1')}</p>
    <p className="mb-4">{t('sections.your_section.content.2')}</p>
    <!-- Add more paragraphs as needed -->
  </div>
</section>
```

### 4. Update Translation Files

Ensure your content is properly structured in the translation files (`fr.json`, `en.json`):

```json
{
  "YourBlogPostNamespace": {
    "meta": {
      "author": "Author Name",
      "date": "December 2025",
      "readingTime": "5 min read"
    },
    "sections": {
      "introduction": {
        "title": "Introduction",
        "content": {
          "1": "First paragraph of introduction...",
          "2": "Second paragraph of introduction...",
          "3": "Third paragraph of introduction..."
        }
      },
      "your_section": {
        "title": "Your Section Title",
        "content": {
          "1": "First paragraph...",
          "2": "Second paragraph...",
          "3": "Third paragraph..."
        }
      },
      "conclusion": {
        "title": "Conclusion",
        "content": {
          "1": "First paragraph of conclusion...",
          "2": "Second paragraph of conclusion..."
        }
      }
    }
  }
}
```

## Best Practices

### 1. Consistency
- Maintain the same structure across all blog posts
- Use consistent styling classes
- Follow the same naming conventions for translation keys

### 2. Responsive Design
- Ensure content works on both mobile and desktop
- Test the TOC on different screen sizes
- Check image sizing and layout on various devices

### 3. Performance
- Import only necessary components
- Optimize images for web use
- Minimize JavaScript where possible

### 4. Accessibility
- Use semantic HTML elements
- Ensure proper contrast ratios
- Include alt text for images
- Maintain keyboard navigation

## Common Customizations

### Adding Lists
```typescript
<ul className="list-disc list-inside text-gray-700 leading-relaxed mt-4 space-y-1">
  <li>{t('sections.your_section.list.item1')}</li>
  <li>{t('sections.your_section.list.item2')}</li>
  <li>{t('sections.your_section.list.item3')}</li>
</ul>
```

### Adding Blockquotes
```typescript
<blockquote className="border-l-4 border-[#00A896] pl-4 italic mt-4">
  {t('sections.your_section.quote')}
</blockquote>
```

### Conditional Content
```typescript
{locale === 'fr' && (
  <p className="text-gray-700 mt-4">
    {t('sections.your_section.french_specific_content')}
  </p>
)}
```

## Troubleshooting

### Missing Translations
If content isn't appearing, check:
1. Translation namespace matches component
2. Translation keys match what's used in the component
3. Both `fr.json` and `en.json` have the required entries

### Styling Issues
If elements don't look right:
1. Check that `tailgrid.css` is imported
2. Verify Tailwind classes are correctly applied
3. Ensure no conflicting styles in custom CSS

### TOC Not Working
If the table of contents isn't functioning:
1. Ensure each section has a unique ID that matches the TOC items
2. Check that the `onSelect` function is properly implemented
3. Verify the `TOC` component is correctly imported