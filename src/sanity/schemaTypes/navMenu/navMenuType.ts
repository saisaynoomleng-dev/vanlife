import { BiLink } from 'react-icons/bi';
import { FaLink } from 'react-icons/fa6';
import { defineArrayMember, defineField, defineType } from 'sanity';

export const navMenuType = defineType({
  name: 'navMenu',
  icon: FaLink,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nav Menu Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'links',
      title: 'Nav Links',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          icon: BiLink,
          fields: [
            defineField({
              name: 'name',
              title: 'Nav Links',
              type: 'string',
            }),
            defineField({
              name: 'url',
              title: 'Pathname',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
  ],
});
