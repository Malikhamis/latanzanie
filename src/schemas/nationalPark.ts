import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'nationalPark',
  title: 'National Park',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'region',
      title: 'Region',
      type: 'string',
    }),
    defineField({
      name: 'overview',
      title: 'Overview',
      type: 'text',
    }),
    defineField({
      name: 'isTanzanian',
      title: 'Is Tanzanian',
      type: 'boolean',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'entranceFees',
      title: 'Entrance Fees',
      type: 'object',
      fields: [
        {
          name: 'conservationFee',
          title: 'Conservation Fee',
          type: 'object',
          fields: [
            {
              name: 'citizen',
              title: 'Citizen',
              type: 'number',
            },
            {
              name: 'nonCitizen',
              title: 'Non-Citizen',
              type: 'number',
            },
          ],
        },
        {
          name: 'campingFee',
          title: 'Camping Fee',
          type: 'object',
          fields: [
            {
              name: 'citizen',
              title: 'Citizen',
              type: 'number',
            },
            {
              name: 'nonCitizen',
              title: 'Non-Citizen',
              type: 'number',
            },
          ],
        },
        {
          name: 'vehicleFee',
          title: 'Vehicle Fee',
          type: 'object',
          fields: [
            {
              name: 'citizen',
              title: 'Citizen',
              type: 'number',
            },
            {
              name: 'nonCitizen',
              title: 'Non-Citizen',
              type: 'number',
            },
          ],
        },
      ],
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
  preview: {
    select: {
      title: 'title',
      region: 'region',
    },
    prepare(selection) {
      const { title, region } = selection
      return {
        title: title,
        subtitle: region ? `Region: ${region}` : 'No region',
      }
    },
  },
})