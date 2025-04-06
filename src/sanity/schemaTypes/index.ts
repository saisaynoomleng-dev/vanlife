import { type SchemaTypeDefinition } from 'sanity';
import { vanType } from './vanType';
import { blockContentType } from './block/blockContentType';
import { navMenuType } from './navMenu/navMenuType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [vanType, blockContentType, navMenuType],
};
