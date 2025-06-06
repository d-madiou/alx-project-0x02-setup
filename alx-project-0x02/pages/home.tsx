import React, { useState } from 'react'
//let's import the header component
import Header from '../components/layout/Header'
import Card from '@/components/layout/Card'

import PostModal from '@/components/layout/PostModal';

function home() {
    const[modalOpen, setModalOpen] = useState(false);
  return (
    <div>
        <Header />
        <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Welcome to My Website</h1>
            <p className="text-lg text-gray-700">This is the home page.</p>

        
             <Card
          title="Reusable Components"
          content="Click below to learn how we build dynamic components."
        />
        <button
          onClick={() => setModalOpen(true)}
          className="block mx-auto mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Open Post Modal
        </button>

        <PostModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          title="Post Modal"
          content="This modal shows the details of a post. It's reusable and can be triggered dynamically."
        />
        </main>
    </div>
  )
}

export default home
