import { hooks } from '@/store.js';
import { CardGrid } from '@a-type/ui/components/card';
import { InfiniteLoadTrigger } from '@a-type/ui/components/infiniteLoadTrigger';
import { RecordDisplay } from './RecordDisplay.jsx';
import { useEditingRecordId } from './hooks.js';

export interface RecentRecordsProps {}

export function RecentRecords({}: RecentRecordsProps) {
  const [records, { hasMore, loadMore }] = hooks.useAllRecordsInfinite({
    index: {
      where: 'createdAt',
      order: 'desc',
    },
    pageSize: 10,
    key: 'recent',
  });
  const [editingId] = useEditingRecordId();

  return (
    <div className="flex flex-col gap-3 w-full">
      <CardGrid>
        {records
          .filter((record) => record.get('id') !== editingId)
          .map((record) => (
            <RecordDisplay key={record.get('id')} record={record} />
          ))}
      </CardGrid>
      {hasMore && <InfiniteLoadTrigger onVisible={loadMore} />}
    </div>
  );
}
