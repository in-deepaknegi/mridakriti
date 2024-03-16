"use client";
import React from "react";

import Image from "next/image";
import Hero1 from "@/public/products/p02.jpg";

const features = [
    {
        name: "Unique Origins",
        description:
            "Our soil paintings are crafted with love and devotion, capturing the spiritual energy of sacred places.",
        svg: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
                <path d="M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19" />
            </svg>
        ),
    },
    {
        name: "Exquisite Artwork",
        description:
            "Each painting tells a story, blending artistry and spirituality in a truly captivating way.",
        svg: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                <path d="M5 3v4" />
                <path d="M19 17v4" />
                <path d="M3 5h4" />
                <path d="M17 19h4" />
            </svg>
        ),
    },
];

const Feature = () => {
    return (
        <section className="relative bg-dusk-200/30  py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto flex h-full flex-col gap-x-0 gap-y-10 lg:flex-row lg:gap-x-8 lg:gap-y-0">
                    <div className="order-last w-full lg:order-first">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Discover the Sacred Origins of Soil Paintings
                        </h2>
                        <p className="mt-5 text-base text-gray-800 md:text-lg">
                            Our soil paintings transcend the realm of art to become a profound
                            spiritual journey.
                        </p>
                        <div className="mt-5 grid max-w-xl gap-y-10 text-base leading-7 text-gray-600 md:grid-cols-2 md:gap-x-4 md:gap-y-0 lg:max-w-none">
                            {features.map((feature) => (
                                <div key={feature.name}>
                                    <div className="flex gap-4 text-dusk-900">
                                        {feature.svg}
                                        <h2 className="text-2x my-auto font-semibold">
                                            {feature.name}
                                        </h2>
                                    </div>
                                    <p className="mt-3 text-gray-700">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 flex gap-x-6">
                            <a
                                href="/paintings"
                                className="rounded-md bg-soil-100 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-soil-200"
                            >
                                Explore paintings
                            </a>
                            <a
                                href="/about"
                                className="my-auto text-sm font-semibold leading-6 text-gray-900"
                            >
                                Know about us<span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                    <div
                        className="relative order-first h-auto w-full lg:order-last"
                        data-aos="zoom-out"
                        data-aos-duration="700"
                    >
                        <Image
                            src={Hero1}
                            alt="Product screenshot"
                            quality={100}
                            loading="eager"
                            className="aspect-video h-full w-full rounded-2xl object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feature;