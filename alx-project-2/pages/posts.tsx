// pages/posts.tsx
import { useEffect, useState } from 'react';
import { PostProps } from '../interfaces';
import PostCard from '@/components/layout/PostCard';

export default function PostsPage() {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <main className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Posts</h1>
      {posts.map((post) => (
        <PostCard key={post.userId} {...post} />
      ))}
    </main>
  );
}
