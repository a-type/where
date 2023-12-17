import { hooks } from '@/store.js';
import { Button } from '@a-type/ui/components/button';
import {
  CameraRoot,
  CameraShutterButton,
  CameraDeviceSelector,
} from '@a-type/ui/components/camera';
import { CollapsibleSimple } from '@a-type/ui/components/collapsible';
import {
  Dialog,
  DialogActions,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from '@a-type/ui/components/dialog';
import { Icon } from '@a-type/ui/components/icon';
import { LiveUpdateTextField } from '@a-type/ui/components/liveUpdateTextField';
import { H3 } from '@a-type/ui/components/typography';
import { EntityFile, Record } from '@where/verdant';
import classNames from 'classnames';
import { useState } from 'react';
import { useEditingRecordId } from './hooks.js';

export interface RecordCreateProps {}

export function RecordCreate({}: RecordCreateProps) {
  const [editingId, setEditingId] = useEditingRecordId();
  const editingRecord = hooks.useRecord(editingId!, { skip: !editingId });
  const client = hooks.useClient();

  const capturePhoto = async (data: File) => {
    if (editingRecord) {
      editingRecord.get('photos').push(data);
    } else {
      const record = await client.records.put({
        photos: [data],
      });
      setEditingId(record.get('id'));
    }
  };

  return (
    <div className="flex flex-col gap-3 w-full">
      <H3>Where?</H3>
      <CameraRoot
        onCapture={capturePhoto}
        className={classNames(
          'w-full transition-all',
          !editingRecord ? 'h-[60vh]' : 'h-[30vh]',
        )}
      >
        <CameraDeviceSelector />
        <CameraShutterButton />
        {editingRecord && <PhotosPreview record={editingRecord} />}
      </CameraRoot>
      <CollapsibleSimple open={!editingRecord}>
        <div className="bg-primary-wash color-primary-dark p-3 rounded-lg">
          Take a picture of something you may want to find later. Search for
          anything by name to remember where you put it.
        </div>
      </CollapsibleSimple>
      <CollapsibleSimple open={!!editingRecord}>
        <div className="flex flex-col gap-4">
          {editingRecord && <RecordCreateDetails record={editingRecord} />}
          <Button
            color="primary"
            onClick={() => setEditingId(null)}
            className="self-center"
          >
            <Icon name="plus" />
            Add another
          </Button>
        </div>
      </CollapsibleSimple>
    </div>
  );
}

function RecordCreateDetails({ record }: { record: Record }) {
  const { name, location } = hooks.useWatch(record);
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-1">
        <label htmlFor="what">What is it?</label>
        <LiveUpdateTextField
          id="what"
          value={name}
          onChange={(v) => record.set('name', v)}
          autoFocus
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="where">Where is it?</label>
        <LiveUpdateTextField
          textArea
          id="where"
          value={location}
          onChange={(v) => record.set('location', v)}
        />
      </div>
    </div>
  );
}

function PhotosPreview({ record }: { record: Record }) {
  const { photos } = hooks.useWatch(record);
  hooks.useWatch(photos);
  return (
    <div className="absolute top-2 left-2 flex max-w-full overflow-x-auto">
      {photos.map((photo) => (
        <PhotoPreview key={photo.id} photo={photo} />
      ))}
    </div>
  );
}

function PhotoPreview({ photo }: { photo: EntityFile }) {
  return (
    <Dialog>
      <DialogTrigger className="rounded-md overflow-hidden w-[25vmin] h-[25vmin] border-none bg-transparent p-0 animate-zoom-in animate-duration-100">
        <img className="object-cover w-full h-full" src={photo.url ?? ''} />
      </DialogTrigger>
      <DialogContent>
        <img src={photo.url ?? ''} />
        <DialogActions>
          <DialogClose asChild>
            <Button>Close</Button>
          </DialogClose>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
}
