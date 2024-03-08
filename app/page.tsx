import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';

import Hero from '@/components/(pages)/home/Hero';
import Feature from '@/components/(pages)/home/Feature'
import Products from '@/components/(pages)/home/Products'

export const runtime = 'edge';

export default function Home() {

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Feature />
        <Products />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
