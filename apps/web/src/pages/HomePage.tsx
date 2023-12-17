import { BrowseRecords } from '@/components/records/BrowseRecords.jsx';
import { RecordCreate } from '@/components/records/RecordCreate.jsx';
import { Divider } from '@a-type/ui/components/divider';
import { PageContent, PageRoot } from '@a-type/ui/components/layouts';

export interface HomePageProps {}

export function HomePage({}: HomePageProps) {
  return (
    <PageRoot>
      <PageContent>
        <div className="w-full flex flex-col gap-4">
          <RecordCreate />
          <Divider />
          <BrowseRecords />
        </div>
      </PageContent>
    </PageRoot>
  );
}

export default HomePage;
