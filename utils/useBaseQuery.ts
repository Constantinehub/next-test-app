import { useQuery, UseQueryResult, QueryKey } from '@tanstack/react-query';

export function useBaseQuery<T>(
  queryKey: QueryKey,
  queryFn: () => Promise<T>
): UseQueryResult<T> {
  return useQuery<T>({
    queryKey,
    queryFn,
    ...{
      retry: 1,
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
    },
  });
}
