'use client';

import Link from 'next/link';
import { usePosts } from '@/store/usePostStore';

import { Post } from '@/types/postTypes';

interface Props {
  post: Post;
}

function PostItem({ post }: Props) {
  const { id, title, body } = post;

  const selectPost = usePosts((state) => state.selectPost);

  return (
    <Link href={`/posts/${id}`} onClick={() => selectPost(post)}>
      <div className='p-2 border border-slate-500 transition-all hover:border-gray-400 hover:bg-gray-200'>
        <h3 className='mb-2 h-[48px] font-bold line-clamp-2'>{title}</h3>
        <p className='line-clamp-4'>{body}</p>
      </div>
    </Link>
  );
}

export default PostItem;
