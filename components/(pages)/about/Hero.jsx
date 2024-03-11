"use client";
import React from "react";

import Image from "next/image";
import Hero1 from "@/public/products/p02.jpg";

const features = [{
        name: "Unique Origins",
        description:
            "Our soil paintings are crafted with love and devotion, capturing the spiritual energy of sacred places.",
    },
    {
        name: "Exquisite Artwork",
        description:
            "Each painting tells a story, blending artistry and spirituality in a truly captivating way.",
    },
];

const Feature = () => {
    return (
        <section className="relative bg-dusk-200/30 py-7 sm:py-8">
            <h1 className="text-center text-5xl font-semibold">About Us</h1>
            <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
                <div className="mx-auto flex h-full flex-col gap-x-0 gap-y-10 lg:flex-row lg:gap-x-8 lg:gap-y-0">
                    <div className="order-last w-full lg:order-first">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                            Crafting Divine Soil Paintings
                        </h2>
                        <p className="mt-5 text-base text-gray-800 md:text-lg">
                            Embarking on a journey to redefine the essence of sacred artistry,
                            Mridakriti is committed to offering an unparalleled experience in
                            the realm of soil paintings inspired by revered temples such as
                            Kedarnath, Badrinath, and beyond.
                        </p>
                        <ul className="ml-6 mt-5 flex max-w-xl list-disc flex-col text-base lg:max-w-none">
                            {features.map((feature) => (
                                <li key={feature.name}>
                                    <p className="mt-3 text-gray-700">
                                        <span className=" font-semibold text-black">
                                            {feature.name}
                                        </span>
                                        : {feature.description}
                                    </p>
                                </li>
                            ))}
                        </ul>
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
                    <div className="relative order-first h-auto w-full lg:order-last">
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
