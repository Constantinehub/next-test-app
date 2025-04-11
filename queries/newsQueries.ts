import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useBaseQuery } from '@/utils/useBaseQuery';
import { getNewsByCategory, updateNewsItem } from '@/services/getData';
import { NewsParams, NewsData } from '@/types/newsTypes';

export function useNewsByQuery(params: NewsParams) {
  return useBaseQuery(['news', params.q], () => getNewsByCategory(params));
}

export function useAddNewsQuery(query?: string) {
  const queryClient = useQueryClient();
  const queryKey = ['news', query];

  return useMutation({
    mutationFn: updateNewsItem,
    onMutate: async (formData) => {
      await queryClient.cancelQueries({ queryKey });

      queryClient.setQueryData(
        queryKey,
        ({ articles = [], ...rest }: NewsData) => {
          const updatedArticles = articles?.map((item) => {
            return item.id === formData.id ? { ...item, ...formData } : item;
          });

          return {
            articles: updatedArticles,
            ...rest,
          };
        }
      );

      const previousNews = queryClient.getQueryData(queryKey);

      return { previousNews };
    },
  });
}
