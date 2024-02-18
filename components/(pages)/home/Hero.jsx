"use client"
import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Autoplay, Pagination } from 'swiper/modules';

import Image from 'next/image';
import Hero1 from '@/public/mridakriti.jpg'
import Hero2 from '@/public/rammandir.jpg'
import Hero3 from '@/public/P2102.jpg'

const images = [
    {
        id: 1,
        src: Hero1,
        alt: 'mridakriti',
    },
    {
        id: 2,
        src: Hero2,
        alt: 'ram-mandir',
    },
    {
        id: 3,
        src: Hero3,
        alt: 'badrinath',
    },
]

const Hero = () => {
    return (
        <section className="overflow-hidden bg-black py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid grid-cols-12 gap-x-2 gap-y-16 sm:gap-y-10 lg:mx-0 lg:max-w-none">
                    <div className="col-span-12 lg:col-span-7 lg:pr-10 lg:py-16">
                        <h2 className="text-4xl font-semibold tracking-tight text-olive-100 sm:text-6xl">
                        Explore the art of soil painting with us.
                        </h2>
                        <p className="mt-6 text-base text-olive-300 md:text-lg">
                            On an endless journey to create experiences that inspire others. Always motived by design that&apos;s honest, aesthetic and natural. Probably the only designer you&apos;ll ever need.
                        </p>

                        <div className="mt-10 flex gap-x-6">
                            <a href="#" className="rounded-2xl bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                                See our work
                            </a>
                            <a href="#" className="text-sm font-semibold leading-6 text-olive-400 hover:text-olive-200 my-auto">
                                Connect with us <span aria-hidden="true">→</span></a>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-5 h-full py-10">
                        <>
                            <Swiper
                                effect={'coverflow'}
                                grabCursor={true}
                                centeredSlides={true}
                                slidesPerView={'auto'}
                                coverflowEffect={{
                                    rotate: 100,
                                    stretch: 0,
                                    depth: 200,
                                    modifier: 1,
                                    slideShadows: true,
                                }}
                                speed={1000}
                                loop={true}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
                                pagination={false}
                                modules={[EffectCoverflow, Autoplay, Pagination]}
                                className="mySwiper h-full w-full"
                            >
                                {images.map((image) => (
                                    <SwiperSlide key={image.id}>
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            loading="eager"
                                            className="h-full rounded-md object-cover object-center"
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero