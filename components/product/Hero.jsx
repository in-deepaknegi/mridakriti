"use client"
import React from 'react'
import Image from 'next/image';
import { useCart } from '@/library/CartContext';

const Hero = ({ product }) => {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart(product);
    }

    return (
        <section className='relative -mt-20 bg-black'>
            <div className='mx-auto max-w-2xl px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8'>
                <div className='lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-8'>
                    <div className='flex flex-col-reverse col-span-5'>
                        <div className='mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none'>
                            <div className='grid grid-cols-3 gap-6'>
                                {product.gallery?.map((image, i) => (
                                    <button key={i} className='relative flex h-36 cursor-pointer items-center justify-center rounded-md '>
                                        <span className='absolute inset-0 overflow-hidden rounded-md'>
                                            <Image
                                                src={image.src}
                                                alt='hero2'
                                                loading='eager'
                                                quality={100}
                                                className='h-full w-full object-cover object-bottom'
                                            />
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className='relative w-full pb-[calc(100%)]'>
                            <div className='absolute h-full w-full inset-0'>
                                <Image
                                    src={product.imageSrc}
                                    alt='hero1'
                                    loading='eager'
                                    quality={100}
                                    className='w-full h-full object-contain object-center overflow-clip rounded-lg'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='mt-10 px-4 col-span-7 sm:mt-16 ms:px-0 lg:mt-10'>
                        <h2 className='text-4xl font-bold tracking-tight text-white'>{product.name}</h2>
                        <div className='mt-3'>
                            <h2 className='absolute sr-only'>Product information</h2>
                            <p className='text-3xl tracking-tight text-gray-100'>
                                ₹{product.price}
                            </p>
                        </div>
                        <div className='mt-3'>
                            <h3 className='absolute sr-only'>Reviews</h3>
                            <div className='flex items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className='w-5 h-5 text-blue-600'><path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className='w-5 h-5 text-blue-600'><path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className='w-5 h-5 text-blue-600'><path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className='w-5 h-5 text-blue-600'><path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className='w-5 h-5 text-gray-300'><path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd"></path></svg>
                            </div>
                        </div>
                        <div className='mt-6'>
                            <h3 className='absolute sr-only'>Description</h3>
                            <p className='text-md text-gray-100'>
                                {product.desc}
                            </p>
                        </div>
                        <div className='mt-10 flex'>
                            <button
                                onClick={handleAddToCart}
                                className='flex max-w-[10rem] flex-1 items-center justify-center rounded-lg border border-transparent bg-primary px-6 py-3 text-base text-black sm:w-full'>
                                Add to bag
                            </button>
                            <button className='ml-4 flex items-center justify-center rounded-md px-3 text-gray-400'>
                                <span className='sr-only'>Add to favourites</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className='h-8 w-8 shrink-0'><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero