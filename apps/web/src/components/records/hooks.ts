import { useSearchParams } from '@verdant-web/react-router';

export function useEditingRecordId() {
  const [params, setParams] = useSearchParams();

  const setId = (id: string | null) => {
    if (id) {
      setParams((p) => {
        p.set('editing', id);
        return p;
      });
    } else {
      setParams((p) => {
        p.delete('editing');
        return p;
      });
    }
  };

  return [params.get('editing'), setId] as const;
}
