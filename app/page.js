import Head from 'next/head';
import Navbar from '@/components/navbar';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <>
      <Head>
        <title>Space Travel</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Hero />
    </>
  );
}