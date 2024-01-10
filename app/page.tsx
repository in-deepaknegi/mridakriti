import Navbar from '@/components/Navbar';
import Hero from '@/components/home/Hero';
import Footer from '@/components/Footer';
import Products from '@/components/home/Products';
import Hiw from '@/components/home/Hiw';
import Testimonial from '@/components/Testimonial';
import Newsletter from '@/components/Newsletter';


export default function Home() {

  return (
    <>
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
