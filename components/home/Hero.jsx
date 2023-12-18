"use client"
import React from 'react';
import Image from 'next/image';
import Hero1 from '@/public/mridakriti.jpg';
import { useLanguage } from '@/library/LangChange';

const Hero = () => {

    const { lang } = useLanguage();

    return (
        <section className='relative isolate overflow-hidden'>
            <Image
                src={Hero1}
                alt='hero image 3'
                loading='eager'
                quality={100}
                className='fixed inset-0 z-[-10] h-full w-full object-cover brightness-110'
            />
            <div className='absolute w-full h-full z-[-9] bg-gradient-to-b from-black/10 via-black/60 to-black'></div>
            <div className='mx-auto max-w-7xl px-6 lg:px-8 py-32 lg:py-28'>
                <div className="hidden max-w-4xl sm:mb-8 sm:flex">
                    <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-200 ring-1 ring-gray-100 hover:ring-gray-100">
                        Announcing our next round of funding... <a href="#" className="font-semibold text-primary"><span className="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></a>
                    </div>
                </div>

                {lang === 'en' ? (
                    <h1 className='max-w-4xl text-left text-5xl font-semibold text-white md:text-7xl'>
                        Experience the beauty of soil painting with us
                    </h1>
                ) : (
                    <h1 className='max-w-4xl text-left text-5xl font-semibold text-white md:text-7xl'>
                        हमारे साथ मृदा चित्रकला की सुंदरता का अनुभव करें
                    </h1>
                )}

                <div className='mx-auto max-w-xl mt-12 lg:ml-auto lg:mx-0'>
                    {lang === 'en' ? (
                        <p className='text-left text-lg text-white font-light md:text-xl'>
                            On an endless journey to create experiences that inspire others. Always motived by design that&apos;s honest, aesthetic and natural. Probably the only designer you&apos;ll ever need.
                        </p>
                    ) : (
                        <p className='text-left tracking-widest text-lg text-white font-light md:text-xl'>
                            दूसरों को प्रेरित करने वाले अनुभव बनाने की अंतहीन यात्रा पर। हमेशा ऐसे डिज़ाइन से प्रेरित होता है जो ईमानदार, सौंदर्यपूर्ण और प्राकृतिक हो। संभवतः एकमात्र डिज़ाइनर जिसकी आपको कभी आवश्यकता होगी।
                        </p>
                    )}

                    <div className="mt-10 flex gap-x-6">
                        <a href="#" className="rounded-2xl bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            See our work
                        </a>
                        <a href="#" className="text-sm font-semibold leading-6 text-gray-200 my-auto">
                            Connect with us <span aria-hidden="true">→</span></a>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Hero