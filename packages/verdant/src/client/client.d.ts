/** Generated types for Verdant client */
import type {
  Client as BaseClient,
  ClientDescriptor as BaseClientDescriptor,
  ClientDescriptorOptions as BaseClientDescriptorOptions,
  CollectionQueries,
  StorageSchema,
  Migration,
} from "@verdant-web/store";
export * from "@verdant-web/store";

export class Client<Presence = any, Profile = any> {
  readonly records: CollectionQueries<Record, RecordInit, RecordFilter>;

  sync: BaseClient<Presence, Profile>["sync"];
  undoHistory: BaseClient<Presence, Profile>["undoHistory"];
  namespace: BaseClient<Presence, Profile>["namespace"];
  entities: BaseClient<Presence, Profile>["entities"];
  // queryStore: BaseClient<Presence, Profile>['queryStore'];
  batch: BaseClient<Presence, Profile>["batch"];
  // files: BaseClient<Presence, Profile>['files'];
  close: BaseClient<Presence, Profile>["close"];
  export: BaseClient<Presence, Profile>["export"];
  import: BaseClient<Presence, Profile>["import"];
  subscribe: BaseClient<Presence, Profile>["subscribe"];
  stats: BaseClient<Presence, Profile>["stats"];
  __dangerous__resetLocal: BaseClient<
    Presence,
    Profile
  >["__dangerous__resetLocal"];
}

export interface ClientDescriptorOptions<Presence = any, Profile = any>
  extends Omit<
    BaseClientDescriptorOptions<Presence, Profile>,
    "schema" | "migrations"
  > {
  /** WARNING: overriding the schema is dangerous and almost definitely not what you want. */
  schema?: StorageSchema;
  /** WARNING: overriding the migrations is dangerous and almost definitely not what you want. */
  migrations?: Migration[];
}

export class ClientDescriptor<Presence = any, Profile = any> {
  constructor(init: ClientDescriptorOptions<Presence, Profile>);
  open: () => Promise<Client<Presence, Profile>>;
  close: () => Promise<void>;
  readonly current: Client<Presence, Profile> | null;
  readonly readyPromise: Promise<Client<Presence, Profile>>;
  readonly schema: StorageSchema;
  readonly namespace: string;
}

import { ObjectEntity, ListEntity, EntityFile } from "@verdant-web/store";

/** Generated types for Record */

export type Record = ObjectEntity<
  RecordInit,
  RecordDestructured,
  RecordSnapshot
>;
export type RecordId = string;
export type RecordCreatedAt = number;
export type RecordUpdatedAt = number;
export type RecordName = string;
export type RecordLocation = string;
export type RecordPhotos = ListEntity<
  RecordPhotosInit,
  RecordPhotosDestructured,
  RecordPhotosSnapshot
>;
export type RecordPhotosItem = string;
export type RecordInit = {
  id?: string;
  createdAt?: number;
  updatedAt?: number;
  name?: string;
  location?: string;
  photos?: RecordPhotosInit;
};

export type RecordPhotosInit = File[];
export type RecordDestructured = {
  id: string;
  createdAt: number;
  updatedAt: number;
  name: string;
  location: string;
  photos: RecordPhotos;
};

export type RecordPhotosDestructured = EntityFile[];
export type RecordSnapshot = {
  id: string;
  createdAt: number;
  updatedAt: number;
  name: string;
  location: string;
  photos: RecordPhotosSnapshot;
};

export type RecordPhotosSnapshot = string[];

/** Index filters for Record **/

export type RecordFilter = never;
