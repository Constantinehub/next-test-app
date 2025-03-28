import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Post } from '@/types/postTypes';
import { getMockedPosts } from '@/services/getData';

interface PostStore {
  currentPost: Post;
  originalPosts: Post[];
  posts: Post[];
  loading: boolean;
  selectPost: (post: Post) => void;
  getAllPosts: () => Promise<void>;
  getAllPostsBySearch: (value: string) => void;
}

export const usePosts = create<PostStore>()(
  persist(
    (set, get) => ({
      posts: [],
      originalPosts: [],
      currentPost: {} as Post,
      loading: false,
      selectPost: (post) =>
        set(() => ({
          currentPost: post,
        })),
      getAllPosts: async () => {
        set({ loading: true });
        const posts = await getMockedPosts();
        set({ posts, originalPosts: posts, loading: false });
      },
      getAllPostsBySearch: (query) => {
        const filteredPosts = get().originalPosts.filter((post) =>
          post.title.toLowerCase().includes(query.toLowerCase())
        );

        set({ posts: filteredPosts });
      },
    }),
    {
      name: 'posts-storage',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
