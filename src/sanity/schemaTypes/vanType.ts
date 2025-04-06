import { defineField, defineType } from 'sanity';
import { FaVanShuttle } from 'react-icons/fa6';
import { BiDetail } from 'react-icons/bi';
import { MdPermMedia } from 'react-icons/md';

export const vanType = defineType({
  name: 'van',
  title: 'Van',
  icon: FaVanShuttle,
  groups: [
    { name: 'details', title: 'Details', icon: BiDetail },
    { name: 'media', title: 'Media', icon: MdPermMedia },
  ],
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Van Name',
      type: 'string',
      group: 'details',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      validation: (rule) => rule.required(),
      group: 'details',
      hidden: ({ document }) => !document?.name,
    }),
    defineField({
      name: 'type',
      title: 'Van Type',
      type: 'string',
      group: 'details',
      options: {
        list: [
          { title: 'Simple', value: 'simple' },
          { title: 'Rugged', value: 'rugged' },
          { title: 'Luxury', value: 'luxury' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'price',
      title: 'Daily Rental Price',
      type: 'number',
      initialValue: 10,
      group: 'details',
    }),
    defineField({
      name: 'hosted',
      title: 'Is Hosted by user',
      description: 'Is the van hosted by the user',
      type: 'boolean',
      initialValue: false,
      group: 'details',
    }),
    defineField({
      name: 'description',
      title: 'Van Description',
      type: 'text',
      group: 'details',
    }),
    defineField({
      name: 'addedDate',
      title: 'Added On',
      type: 'date',
      group: 'details',
    }),
    defineField({
      name: 'mainImage',
      title: 'Van Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      group: 'media',
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
      ],
    }),
  ],
  preview: {
    select: {
      name: 'name',
      type: 'type',
      price: 'price',
      image: 'mainImage',
    },
    prepare({ name, type, price, image }) {
      const nameFormatted = name || 'Van Name Not Specified';
      return {
        title: name ? `${nameFormatted}[${type}]` : nameFormatted,
        subtitle: `$${price}/day`,
        media: image || FaVanShuttle,
      };
    },
  },
});
