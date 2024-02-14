import React from 'react'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
    title: 'About | Mridakriti',
    description: 'About page',
}

const page = () => {
    return (
        <>
            <Navbar/>
            <Footer/>
        </>
    )
}

export default page