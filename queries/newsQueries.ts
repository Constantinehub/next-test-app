import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useBaseQuery } from '@/utils/useBaseQuery';
import {
  getNews,
  getSpotifyAuthToken,
  getTopNewsByCategory,
  updateNewsItem,
} from '@/services/getData';
import { NewsParams, NewsData, TopNewsParams } from '@/types/newsTypes';

export function useNewsByQuery(params: NewsParams) {
  return useBaseQuery(['news', params.q], () => getNews(params));
}

export function useTopNewsByCategory(params: TopNewsParams) {
  return useBaseQuery(['top-news-category', params.category], () =>
    getTopNewsByCategory(params)
  );
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
          const updatedArticles = articles.map((item) => {
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

export function useAuthToken() {
  return useBaseQuery(['auth-token'], () => getSpotifyAuthToken());
}
