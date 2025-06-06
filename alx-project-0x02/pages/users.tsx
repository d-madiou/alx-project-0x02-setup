// pages/users.tsx
import { useEffect, useState } from 'react';
import { UserProps } from '../interfaces';
import UserCard from '@/components/layout/UserCard';


export default function UsersPage() {
  const [users, setUsers] = useState<UserProps[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <main className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Users</h1>
      {users.map((user) => (
        <UserCard key={user.id} {...user} />
      ))}
    </main>
  );
}
