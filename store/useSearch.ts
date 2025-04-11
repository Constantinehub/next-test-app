import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface SearchStore {
  query: string;
  setQuery: (value: string) => void;
}

const useSearch = create<SearchStore>()(
  persist(
    (set) => ({
      query: 'everything',
      setQuery: (value) => {
        set({ query: value });
      },
    }),
    {
      name: 'search-store',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useSearch;
