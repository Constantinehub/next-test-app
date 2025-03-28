'use client';

import { use } from 'react';
import { usePosts } from '@/store/usePostStore';
import { useShallow } from 'zustand/shallow';

import CommentItem from '@/components/Comment';

interface Props {
  params: Promise<{ id: string }>;
}

function PostPage(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id } = use(props.params);

  const [{ title, body, rating, comments }] = usePosts(
    useShallow((state) => [state.currentPost])
  );

  return (
    <div className='py-10 px-16'>
      <h3 className='text-4xl font-bold'>{title}</h3>
      <div className='my-3 text-green-600 text-2xl font-bold'>{rating}</div>
      <p className='text-lg'>{body}</p>
      <div className='flex flex-col gap-3 mt-4'>
        <h3 className='text-xl font-semibold'>Comments:</h3>
        <ul className='list-none'>
          {comments.map((item) => (
            <li key={item.id} className='mb-3 last:mb-0'>
              <CommentItem comment={item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PostPage;
