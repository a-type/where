import { ChangeEvent, useState, useTransition } from 'react';
import { RecentRecords } from './RecentRecords.jsx';
import { Input } from '@a-type/ui/components/input';
import { SearchRecords } from './SearchRecords.jsx';

export interface BrowseRecordsProps {}

export function BrowseRecords({}: BrowseRecordsProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [transitioning, startTransition] = useTransition();
  const onSearchChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const value = ev.target.value;
    startTransition(() => {
      setSearchTerm(value);
    });
  };

  return (
    <div className="flex flex-col gap-3 w-full">
      <Input
        value={searchTerm}
        onChange={onSearchChange}
        placeholder="Search"
      />
      {searchTerm ? (
        <SearchRecords searchTerm={searchTerm} />
      ) : (
        <RecentRecords />
      )}
    </div>
  );
}
