import { hooks } from '@/store.js';
import {
  CardImage,
  CardMain,
  CardRoot,
  CardTitle,
} from '@a-type/ui/components/card';
import { Record } from '@where/verdant';

export interface RecordDisplayProps {
  record: Record;
}

export function RecordDisplay({ record }: RecordDisplayProps) {
  const { photos, name, location } = hooks.useWatch(record);
  const [firstPhoto] = hooks.useWatch(photos);
  hooks.useWatch(firstPhoto);

  return (
    <CardRoot className="h-[20vh]">
      <CardMain>
        <CardTitle>{name}</CardTitle>
        <div className="py-1 px-2 rounded-md bg-white">{location}</div>
      </CardMain>
      <CardImage>
        <img
          src={firstPhoto?.url ?? ''}
          alt={name}
          className="object-cover object-c w-full h-full"
        />
      </CardImage>
    </CardRoot>
  );
}
