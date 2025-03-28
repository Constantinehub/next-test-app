import { useQuery, UseQueryResult, QueryKey } from '@tanstack/react-query';

export function useBaseQuery<T>(
  queryKey: QueryKey,
  queryFn: () => Promise<T>
): UseQueryResult<T> {
  return useQuery<T>({
    queryKey,
    queryFn,
    ...{ refetchOnWindowFocus: false, retry: 1 },
  });
}
