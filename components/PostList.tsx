import { Post } from '@/types/postTypes';
import PostItem from '@/components/Post';

interface Props {
  posts: Post[];
}

const PostList = (props: Props) => {
  const { posts } = props;

  return (
    <ul className='list-none grid grid-cols-3 gap-3'>
      {posts.map((post) => (
        <li key={post.id}>
          <PostItem post={post} />
        </li>
      ))}
    </ul>
  );
};

export default PostList;
