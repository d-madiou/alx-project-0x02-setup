// components/common/PostCard.tsx
import { PostProps } from '../../interfaces';
import Header from './Header';

const PostCard = ({ title, content, userId }: PostProps) => {
  return (
    < >
      <Header />
    
        <div className="border p-4 rounded shadow-md mb-4 bg-white ">
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="mt-2 text-gray-700">{content}</p>
            <p className="mt-4 text-sm text-gray-500">Posted by User #{userId}</p>
        </div>
    </>
  );
};

export default PostCard;
