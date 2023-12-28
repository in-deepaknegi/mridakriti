import Navbar from '@/components/Navbar';
import Hero from '@/components/home/Hero';
import Footer from '@/components/Footer';
import Products from '@/components/home/Products';
import Hiw from '@/components/home/Hiw';
import Testimonial from '@/components/Testimonial';
import Newsletter from '@/components/Newsletter';

import Script from 'next/script';

export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Mridakriti'
  };

  return (
    <>
      <Script
        id='json-ld'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
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
