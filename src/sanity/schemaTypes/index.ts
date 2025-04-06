import { type SchemaTypeDefinition } from 'sanity';
import { vanType } from './vanType';
import { blockContentType } from './block/blockContentType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [vanType, blockContentType],
};
