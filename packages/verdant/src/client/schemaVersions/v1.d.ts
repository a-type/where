import { StorageSchema } from "@verdant-web/common";
declare const schema: StorageSchema;
export default schema;

export type RecordSnapshot = {
  id: string;
  createdAt: number;
  updatedAt: number;
  name: string;
  location: string;
  photos: RecordPhotosSnapshot;
};

export type RecordPhotosSnapshot = string[];
export type RecordInit = {
  id?: string;
  createdAt?: number;
  updatedAt?: number;
  name?: string;
  location?: string;
  photos?: RecordPhotosInit;
};

export type RecordPhotosInit = File[];

export type MigrationTypes = {
  records: { init: RecordInit; snapshot: RecordSnapshot };
};
