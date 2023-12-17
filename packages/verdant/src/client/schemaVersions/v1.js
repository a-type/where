/** @generated - do not modify this file. */

// src/schema.ts
import { collection, schema } from "@verdant-web/store";
import cuid from "cuid";
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
