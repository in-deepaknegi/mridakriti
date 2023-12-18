"use client"
import React from 'react'
import { useCart } from '@/library/CartContext';
import { useRouter } from 'next/navigation';

const Hero = ({ product }) => {
    const router = useRouter();
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart(product);
        router.push('/cart');
    }

    return (
        <div className='py-40'>
            <h1>
                {product.id}
                <button
                    onClick={handleAddToCart}
                    className='border text-xl'
                >Add</button>
            </h1>
        </div>
    )
}

export default Hero