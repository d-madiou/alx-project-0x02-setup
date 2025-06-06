// pages/posts.tsx
import { GetStaticProps } from 'next';
import { PostProps } from '../interfaces';
import PostCard from '@/components/common/PostCard';
import Header from '@/components/layout/Header';

interface PostsPageProps {
  posts: PostProps[];
}

export const getStaticProps: GetStaticProps<PostsPageProps> = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: PostProps[] = await res.json();
  return {
    props: {
      posts,
    },
  };
};

const PostsPage = ({ posts }: PostsPageProps) => (
  <main className="p-8 bg-gray-100 min-h-screen">
    <Header />
    <h1 className="text-3xl font-bold mb-6">Posts</h1>
    {posts.map((post) => (
      <PostCard key={post.userId} {...post} />
    ))}
  </main>
);

export default PostsPage;
