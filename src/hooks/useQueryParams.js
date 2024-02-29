import { useSearchParams } from 'react-router-dom';

export const useQueryParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  return {
    topic: searchParams.get('topic') ?? '',
    level: searchParams.get('level') ?? 'all',
  };
};
