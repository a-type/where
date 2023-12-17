import { hooks } from '@/store.js';
import { CardGrid } from '@a-type/ui/components/card';
import { InfiniteLoadTrigger } from '@a-type/ui/components/infiniteLoadTrigger';
import { RecordDisplay } from './RecordDisplay.jsx';

export interface SearchRecordsProps {
  searchTerm: string;
}

export function SearchRecords({ searchTerm }: SearchRecordsProps) {
  const [records, { hasMore, loadMore }] = hooks.useAllRecordsInfinite({
    index: {
      where: 'nameSearch',
      startsWith: searchTerm,
    },
    key: 'search',
    pageSize: 10,
  });

  return (
    <div className="flex flex-col gap-3 w-full">
      <CardGrid>
        {records.map((record) => (
          <RecordDisplay key={record.get('id')} record={record} />
        ))}
      </CardGrid>
      {hasMore && <InfiniteLoadTrigger onVisible={loadMore} />}
    </div>
  );
}
