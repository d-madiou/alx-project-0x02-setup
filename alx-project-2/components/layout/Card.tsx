// let's implement the Card component
import React from 'react';
import { CardProps } from '../../interfaces';
import Link from 'next/link';


function Card({ title, content }: CardProps) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{content}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <Link href="/home" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Read More
        </Link>
      </div>
    </div>
  )
}

export default Card
