import Navbar from '@/components/Navbar';
import Hero from '@/components/home/Hero';
import Footer from '@/components/Footer';
import Products from '@/components/home/Products';
import Hiw from '@/components/home/Hiw';
import Newsletter from '@/components/Newsletter';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Hiw />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
