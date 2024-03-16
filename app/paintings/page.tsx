import { getProducts } from "@/lib/shopify";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const runtime = 'edge';

const page = async () => {
    const products = await getProducts({});

    if (!products?.length) return null;

    const carouselProducts = [...products];
    return (
        <>
            <Navbar />
            <main>
                <section className="relative bg-dusk-100/30 isolate overflow-hidden">
                    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                            {" "}
                            Customers also purchased{" "}
                        </h2>

                        <div className="mt-6 grid grid-cols-1 gap-x-3 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
                            {carouselProducts.map((product, i) => (
                                <div
                                    key={`${product.handle}${i}`}
                                    className="group relative p-2 hover:bg-gray-200/70 rounded-2xl hover:scale-[1.02] transition-all ease-in duration-75"
                                >
                                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 lg:aspect-none lg:h-80 ">
                                        <Image
                                            src={product.featuredImage.url}
                                            alt={'xyz'}
                                            height={680}
                                            width={400}
                                            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                        />
                                    </div>
                                    <div className="mt-4 flex justify-between">
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-800">
                                                <a href={`/painting/${product.handle}`}>
                                                    <span
                                                        aria-hidden="true"
                                                        className="absolute inset-0"
                                                    />
                                                    {product.title}
                                                </a>
                                            </h3>
                                            <p className="mt-3 text-sm line-clamp-2 text-gray-700">
                                                {product.description}
                                            </p>
                                        </div>
                                        <p className="text-base font-medium text-gray-900">
                                            {product.priceRange.maxVariantPrice.amount}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default page