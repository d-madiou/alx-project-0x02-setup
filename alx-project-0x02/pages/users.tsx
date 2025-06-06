// pages/users.tsx
import { GetStaticProps } from 'next';
import { UserProps } from '../interfaces';
import UserCard from '@/components/common/UserCard';
import Header from '@/components/layout/Header';

interface UsersPageProps {
  users: UserProps[];
}

export const getStaticProps: GetStaticProps<UsersPageProps> = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: UserProps[] = await res.json();

  return {
    props: {
      users,
    },
  };
};

export default function UsersPage({ users }: UsersPageProps) {
  return (
    <main className="p-8 bg-gray-100 min-h-screen">
      <Header />
      <h1 className="text-3xl font-bold mb-6">Users</h1>
      {users.map((user) => (
        <UserCard key={user.id} {...user} />
      ))}
    </main>
  );
}
