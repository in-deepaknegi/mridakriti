import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';

import Hero from '@/components/(pages)/home/Hero';

export default function Home() {

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
