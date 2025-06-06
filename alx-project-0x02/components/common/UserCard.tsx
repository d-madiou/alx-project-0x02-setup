// components/common/UserCard.tsx
import React from 'react';
import { UserProps } from '../../interfaces';

const UserCard = ({ name, email, address }: UserProps) => {
  return (
    <div className="bg-white shadow-md rounded p-4 mb-4">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-gray-600">{email}</p>
      <p className="text-gray-700 mt-2">
        {address.street}, {address.suite}, {address.city}, {address.zipcode}
      </p>
    </div>
  );
};

export default UserCard;
