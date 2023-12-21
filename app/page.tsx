import Navbar from '@/components/Navbar';
import Hero from '@/components/home/Hero';
import Footer from '@/components/Footer';
import Products from '@/components/home/Products';
import Hiw from '@/components/home/Hiw';
import Testimonial from '@/components/Testimonial';
import Newsletter from '@/components/Newsletter';
import Head from 'next/head';

export default function Home() {
  return (
    <>
    <Head>
      <title>SDJfksdfkdfj</title>
    </Head>
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Hiw />
        <Testimonial />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
