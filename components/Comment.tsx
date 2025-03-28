import { Comment } from '@/types/postTypes';

interface Props {
  comment: Comment;
}

const CommentItem = ({ comment }: Props) => {
  const { date, body, userId } = comment;

  return (
    <section className='flex flex-col border border-gray-500 p-3 mb-4 bg-amber-100 last:mb-0'>
      <div className='font-bold'>{`User id - ${userId}`}</div>
      <span className='text-gray-700'>{`${date}`}</span>
      <p className='mt-3'>{body}</p>
    </section>
  );
};

export default CommentItem;
