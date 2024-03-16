"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Product } from "@/lib/shopify/types";
import { VariantSelector } from "./variant-selector";

export const runtime = "edge";

const Overview = ({ product }: { product: Product }) => {
    // console.log(product)

    const [selectedImage, setSelectedImage] = useState(product.featuredImage.url);

    const handleImageClick = (image: any) => {
        setSelectedImage(image);
    };

    return (
        <section className="relative isolate bg-dusk-100/30 py-8 md:py-16">
            <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-8">
                    <div className="flex space-x-6 lg:col-span-7">
                        <div className="mx-auto hidden w-full max-w-[8rem] lg:block">
                            <div className="grid grid-rows-4 gap-6">
                                {product.images.map((image, i) => (
                                    <button
                                        key={i}
                                        onClick={() => handleImageClick(image.url)}
                                        className="relative flex h-32 cursor-pointer items-center justify-center rounded-md "
                                    >
                                        <span className="absolute inset-0 overflow-hidden rounded-md">
                                            <Image
                                                src={image.url}
                                                width={1080}
                                                height={680}
                                                alt="Product1"
                                                className="h-full w-full object-cover object-center"
                                            />
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="relative w-full">
                            <div className="absolute inset-0 h-full w-full">
                                <Image
                                    src={selectedImage}
                                    width={1080}
                                    height={680}
                                    alt="hero1"
                                    className="h-full w-full overflow-clip rounded-lg object-cover object-center"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="ms:px-0 col-span-5 mt-6 px-4 sm:mt-16 lg:mt-0">
                        <Image
                            src={selectedImage}
                            width={1080}
                            height={680}
                            alt="hero1"
                            className="mb-10 block h-full w-full overflow-clip rounded-lg object-cover object-center lg:mb-0 lg:hidden"
                        />
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                            {product.title}
                        </h2>
                        <div className="mt-3">
                            <h2 className="sr-only absolute">Product information</h2>
                            <p className="text-3xl tracking-tight text-gray-700">
                                {product.priceRange.maxVariantPrice.amount}
                            </p>
                        </div>

                        <div className="mt-3">
                            <h3 className="sr-only absolute">Reviews</h3>
                            <div className="flex items-center">
                                {[...Array(4)].map((_, index) => (
                                    <svg
                                        key={index}
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                        className="h-5 w-5 text-blue-600"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                ))}
                                {[...Array(1)].map((_, index) => (
                                    <svg
                                        key={index}
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                        className="h-5 w-5 text-gray-300"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                ))}
                            </div>
                        </div>

                        <div className="mt-6">
                            <h3 className="sr-only absolute">Description</h3>
                            <p className="text-md text-gray-700">{product.description}</p>
                        </div>
                       
                        <VariantSelector options={product.options} variants={product.variants} />


                        <div className="mt-10 flex">
                            <button className="flex max-w-[10rem] flex-1 items-center justify-center rounded-lg border border-transparent bg-soil-300 px-6 py-3 text-base text-white hover:bg-soil-400 sm:w-full">
                                Add to bag
                            </button>
                            <button className="ml-4 flex items-center justify-center rounded-md px-3 text-gray-400">
                                <span className="sr-only">Add to favourites</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="h-8 w-8 shrink-0"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                        <div className="container mt-12">
                            {/* {items.map((item, index) => (
                                <div key={index} className="border-t">
                                    <button
                                        onClick={() => toggleActive(index)}
                                        className="my-4 flex w-full items-start justify-between text-left"
                                    >
                                        <span className="text-sm font-semibold leading-7 text-blue-800">
                                            {item.title}
                                        </span>
                                        <span>
                                            {active === index ? (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="14"
                                                    height="14"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path d="M5 12h14" />
                                                </svg>
                                            ) : (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="14"
                                                    height="14"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path d="M5 12h14" />
                                                    <path d="M12 5v14" />
                                                </svg>
                                            )}
                                        </span>
                                    </button>

                                    {active === index && (
                                        <div className="pb-6">
                                            <ul
                                                role="list"
                                                className="ml-6 list-disc text-sm text-gray-700"
                                            >
                                                {item.features.map((feature, i) => (
                                                    <li key={i} className="my-1">
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            ))} */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Overview;
