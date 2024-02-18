"use client";
import React from "react";

import Image from "next/image";
import Hero2 from "@/public/products/p00.jpg";
import Hero1 from "@/public/products/p02.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Autoplay, Navigation, Pagination } from "swiper/modules";

const images = [
    {
        id: 1,
        src: Hero1,
        alt: "slider 1",
    },
    {
        id: 2,
        src: Hero2,
        alt: "slider 2",
    },
];

const Hero = () => {
    return (
        <section className="relative isolate bg-olive-200/60 overflow-hidden">
            <div className="my-10 max-w-7xl px-6 lg:px-8 mx-auto ">
                <div className="relative w-full h-full isolate">
                    <Swiper
                        spaceBetween={30}
                        effect={"coverflow"}
                        speed={1500}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        modules={[Autoplay, EffectFade, Navigation]}
                        className="rounded-2xl"
                    >
                        {images.map((image) => (
                            <SwiperSlide key={image.id}>
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    quality={100}
                                    loading="eager"
                                    fill={true}
                                    sizes="100vw"
                                    className="w-full h-full rounded-2xl object-cover inset-0 z-[-10] brightness-110"
                                />

                                <div className="absolute w-full h-full z-[-9] bg-gradient-to-b from-white/10 via-black/40 to-black rounded-2xl overflow-hidden"></div>

                                <div className="mx-auto px-8 pb-16 pt-[18.5rem] md:pt-48">
                                    <div className="hidden sm:mb-8 sm:flex">
                                        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-200 ring-1 ring-gray-100/10 hover:ring-gray-100">
                                            Announcing our next round of funding.{" "}
                                            <a href="#" className="font-medium text-gray-100">
                                                <span
                                                    className="absolute inset-0"
                                                    aria-hidden="true"
                                                ></span>
                                                Read more <span aria-hidden="true">&rarr;</span>
                                            </a>
                                        </div>
                                    </div>
                                    <h1 className="text-5xl max-w-3xl font-semibold text-white md:text-6xl md:text-left text-center">
                                        Experience the beauty of soil painting with us
                                    </h1>
                                    <p className="mt-6 text-base text-center md:text-right md:ml-auto max-w-3xl text-gray-200 md:font-light md:text-lg">
                                        On an endless journey to create experiences that inspire
                                        others. Always motived by design that&apos;s honest,
                                        aesthetic and natural. Probably the only designer
                                        you&apos;ll ever need.
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Hero;
