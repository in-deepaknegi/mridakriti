import React from 'react'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/(pages)/about/Hero'
import Hiw from '@/components/(pages)/home/Hiw'
import Newsletter from '@/components/Newsletter'

export const metadata: Metadata = {
    title: 'About | Mridakriti',
    description: 'About page',
}

const page = () => {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Hiw />
                <Newsletter />
            </main>
            <Footer />
        </>
    )
}

export default page