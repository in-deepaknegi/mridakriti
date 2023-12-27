import Navbar from '@/components/Navbar';
import Hero from '@/components/home/Hero';
import Footer from '@/components/Footer';
import Products from '@/components/home/Products';
import Hiw from '@/components/home/Hiw';
import Testimonial from '@/components/Testimonial';
import Newsletter from '@/components/Newsletter';
import StructuredData from '@/components/StructuredData';

export default function Home() {

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'name': 'Mridakriti'
  };

  return (
    <>
      <StructuredData data={structuredData} />
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
