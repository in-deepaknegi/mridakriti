import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';

import Hero from '@/components/(pages)/home/Hero';
import Feature from '@/components/(pages)/home/Feature'
export default function Home() {

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Feature />
        {/* <Newsletter /> */}
      </main>
      <Footer />
    </>
  )
}
