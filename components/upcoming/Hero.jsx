import React from 'react'
import Image from 'next/image';

const Hero = ({ product }) => {

    return (
        <section className='relative -mt-20 bg-black'>
            <div className='mx-auto max-w-2xl px-4 sm:px-6 py-32 lg:max-w-7xl lg:px-8'>
                <div className='lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-8'>
                    <div className='flex flex-col-reverse col-span-6'>
                        <div className='relative w-full mt-12'>
                            <div className=''>
                                <Image
                                    src={product.imageSrc}
                                    alt='hero1'
                                    loading='eager'
                                    quality={100}
                                    priority={true}
                                    className='w-full h-full object-cover rounded-lg brightness-[1.4]'
                                />
                            </div>
                        </div>
                    </div>

                    <div className='mt-10 px-4 col-span-6 sm:mt-16 ms:px-0 lg:mt-6'>
                        <h2 className='text-4xl font-bold tracking-tight text-white'>{product.name}</h2>
                       
                        <div className='mt-10 grid max-w-xl text-base leading-7 text-gray-300 gap-y-8 lg:max-w-none'>
                                {product.features.map((feature) => (
                                    <div key={feature.name}>
                                        <div className='flex gap-4'>
                                            {feature.svg}
                                            <h2 className='my-auto text-2x font-semibold text-gray-400'>{feature.name}</h2>
                                        </div>
                                        <p className='mt-3'>
                                            {feature.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        <div className='mt-10 flex'>
                            <a href='/booking/ram-mandir'
                                className='flex max-w-[10rem] flex-1 items-center justify-center rounded-lg border border-transparent bg-primary px-6 py-3 text-base text-black font-semibold sm:w-full'>
                                Book Now
                            </a>
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