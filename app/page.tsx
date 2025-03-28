'use client';

import { useEffect } from 'react';
import Search from '@/components/Search';
import PostList from '@/components/PostList';
import { usePosts } from '@/store/usePostStore';
import { useShallow } from 'zustand/shallow';

export default function Home() {
  const [posts, getPosts] = usePosts(
    useShallow((state) => [state.posts, state.getAllPosts])
  );

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <div className='mx-20 py-10 grow flex flex-col'>
      <h1 className='text-center font-bold text-4xl'>Next Test App</h1>
      <div className='mt-6'>
        <Search />
      </div>
      <div className='flex flex-col max-h-[80vh] overflow-auto mt-6 p-3 border border-gray-600 rounded shadow-md bg-white'>
        <PostList posts={posts} />
      </div>
    </div>
  );
}
