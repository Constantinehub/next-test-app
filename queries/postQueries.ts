// import { useQuery, useMutation } from '@tanstack/react-query';
import { useBaseQuery } from '@/utils/useBaseQuery';
import { getPosts } from '@/services/getData';

// export function usePosts() {
//   return useQuery({
//     queryKey: ['posts'],
//     queryFn: getPosts,
//   });
// }

export function usePostList() {
  return useBaseQuery(['posts'], getPosts);
}
