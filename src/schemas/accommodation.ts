import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'accommodation',
  title: 'Accommodation',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'park',
      title: 'National Park',
      type: 'reference',
      to: [{ type: 'nationalPark' }],
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Lodge', value: 'lodge' },
          { title: 'Campsite', value: 'campsite' },
          { title: 'Hotel', value: 'hotel' },
          { title: 'Tented Camp', value: 'tented-camp' },
        ],
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'amenities',
      title: 'Amenities',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'asset',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'alt',
              title: 'Alternative Text',
              type: 'string',
            },
            {
              name: 'width',
              title: 'Width',
              type: 'number',
            },
            {
              name: 'height',
              title: 'Height',
              type: 'number',
            },
          ],
        },
      ],
    }),
  ],
})