import { defineArrayMember, defineType } from 'sanity';

export const blockContentType = defineType({
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
    }),
  ],
});
