import { Article } from '@/types/newsTypes';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface NewsStore {
  article: Article;
  setArticle: (value: Article) => void;
}

const useNews = create<NewsStore>()(
  persist(
    (set) => ({
      article: {} as Article,
      setArticle: (article) => {
        set({ article });
      },
    }),
    {
      name: 'news-store',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useNews;
