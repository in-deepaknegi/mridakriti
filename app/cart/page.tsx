"use client"
import React from 'react'
import Hero from '@/components/cart/Hero';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Cart = () => {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
            </main>
            <Footer />
        </>
    )
}

export default Cart