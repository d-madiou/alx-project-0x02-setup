import React from 'react'
// lket's import the header component
import Header from '../components/layout/Header'
import Button from '@/components/layout/Button'


function about() {
  return (
    <div>
        <Header />
        <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="text-lg text-gray-700">This is the about page.</p>
            <p className="text-md text-gray-600 mt-2">We are a company dedicated to providing the best services.</p>
            <Button label='small button' size='small' shape='rounded-sm'/>
            <Button label='medium button' size='medium' shape='rounded-md'/>
            <Button label='large button' size='large' shape='rounded-full'/>
            
            
        </main>
    </div>
  )
}

export default about
