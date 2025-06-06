// pages/index.tsx
import Head from 'next/head'
import Header from '@/components/layout/Header';

const Home = () => {
  return (
    <>
      <Head>
        <title>ALX Project Home</title>
        <meta name="description" content="Welcome to the ALX Project Home Page" />
      </Head>

      <Header />
      <main className="p-4">
        <h1 className="text-3xl font-bold text-center">Welcome to the ALX Project</h1>
        <p className="mt-4 text-center text-gray-600">Explore posts, users, and more.</p>
      </main>
    </>
  )
}

export default Home