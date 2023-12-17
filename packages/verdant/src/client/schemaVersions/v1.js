/** @generated - do not modify this file. */

// src/schema.ts
import { collection, schema } from "@verdant-web/store";
import cuid from "cuid";

// src/fullTextIndex.ts
function fullTextIndex(str) {
  return str.split(/\s+/).map((s) => s.toLowerCase());
}

// src/schema.ts
var records = collection({
  name: "record",
  primaryKey: "id",
  fields: {
    id: {
      type: "string",
      default: cuid
    },
    createdAt: {
      type: "number",
      default: () => Date.now()
    },
    updatedAt: {
      type: "number",
      default: () => Date.now()
    },
    name: {
      type: "string",
      default: ""
    },
    location: {
      type: "string",
      default: ""
    },
    photos: {
      type: "array",
      items: {
        type: "file"
      }
    }
  },
  indexes: {
    createdAt: {
      field: "createdAt"
    },
    nameSearch: {
      type: "string[]",
      compute: (r) => fullTextIndex(r.name)
    }
  }
});
var schema_default = schema({
  version: 1,
  collections: {
    records
  }
});
export {
  schema_default as default
};
