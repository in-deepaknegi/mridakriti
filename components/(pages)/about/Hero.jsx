"use client";
import React from "react";

import Image from "next/image";
import Hero1 from "@/public/products/p02.jpg";

const features = [
    {
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
            <h1 className="text-6xl text-center font-semibold">
                About Us
            </h1>
            <div className="mt-16 mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto flex flex-col lg:gap-y-0 gap-x-0 gap-y-10 lg:gap-x-8 lg:flex-row h-full">
                    <div className="w-full lg:order-first order-last">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Crafting Divine Soil Paintings
                        </h2>
                        <p className="mt-5 text-base text-gray-800 md:text-lg">
                            Embarking on a journey to redefine the essence of sacred artistry, Mridakriti is committed to offering an unparalleled experience in the realm of soil paintings inspired by revered temples such as Kedarnath, Badrinath, and beyond.
                        </p>
                        <ul className="mt-5 flex flex-col max-w-xl text-base list-disc ml-6 lg:max-w-none">
                            {features.map((feature) => (
                                <li key={feature.name}>
                                    <p className="mt-3 text-gray-700">
                                        <span className=" font-semibold text-black">{feature.name}</span>:{" "}{feature.description}</p>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-6 flex gap-x-6">
                            <a
                                href="#"
                                className="rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm text-white bg-soil-100 hover:bg-soil-200"
                            >
                                Explore paintings
                            </a>
                            <a
                                href="#"
                                className="text-sm font-semibold leading-6 text-gray-900 my-auto"
                            >
                                Join with us<span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                    <div
                        className="relative lg:order-last order-first w-full h-auto"
                        data-aos="zoom-out"
                        data-aos-duration="700"
                    >
                        <Image
                            src={Hero1}
                            alt="Product screenshot"
                            quality={100}
                            loading="eager"
                            className="w-full h-full aspect-video object-cover rounded-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feature;
