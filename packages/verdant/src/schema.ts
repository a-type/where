import { collection, schema } from '@verdant-web/store';
import cuid from 'cuid';

/**
 * Welcome to your Verdant schema!
 *
 * The schema is where you define your data model.
 *
 * Read more at https://verdant.dev/docs/local-storage/schema
 *
 * The code below is provided as an example, but you'll
 * probably want to delete it and replace it with your
 * own schema.
 *
 * The schema is used to generate the client code for Verdant.
 * After you've replaced this example schema, run `pnpm generate -f`
 * in the root directory to bootstrap your client.
 *
 * For subsequent changes to your schema, use just `pnpm generate`.
 */

const records = collection({
  name: 'record',
  primaryKey: 'id',
  fields: {
    id: {
      type: 'string',
      default: cuid,
    },
    createdAt: {
      type: 'number',
      default: () => Date.now(),
    },
    updatedAt: {
      type: 'number',
      default: () => Date.now(),
    },
    name: {
      type: 'string',
      default: '',
    },
    location: {
      type: 'string',
      default: '',
    },
    photos: {
      type: 'array',
      items: {
        type: 'file',
      },
    },
  },
});

export default schema({
  version: 1,
  collections: {
    records,
  },
});
