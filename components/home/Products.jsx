import React from 'react';
import Image from 'next/image';
import P2102 from '@/public/P2102.jpg';
import S2103 from '@/public/S2203.jpg';
import products from '@/utils/data';
import ProductList from '@/components/home/ProductList';

// const product = [
//     {
//         id: 1,
//         name: 'Shri Badrinath Ji',
//         desc: 'Idol made from holy soil of Baikund Dham Shri Badrinath and divine water of Satopanth.',
//         href: '#',
//         imageSrc: P2102,
//         imageAlt: "Front of men's Basic Tee in black.",
//         price: '$35',
//         color: 'Black',
//     },
//     {
//         id: 2,
//         name: 'Shri Kedarnath Ji',
//         desc: 'Idol made of holy soil of Baba Shri Kedarnath ji and divine water of Ganga Maiya.',
//         href: '#',
//         imageSrc: S2103,
//         imageAlt: "Front of men's Basic Tee in black.",
//         price: '$35',
//         color: 'Black',
//     },
// ]

const Products = () => {
    return (
        <div className="relative bg-black">
            <div className="mx-auto max-w-2xl py-16 px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-6xl font-semibold  tracking-tight text-gray-100">Our Works</h2>

                <p className='mt-5 text-gray-200 max-w-2xl'>
                    Enhance your space with the beauty of nature captured in vibrant colors and textures. Transform your walls into living artworks that breathe life into any room. Discover the artistry of soil paintings that bring the essence of the outdoors indoors.
                </p>

                <div className="mt-12 max-w-6xl grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                    {products.map((product) => (
                        // <ProductList key={product.id} product={product} >
                        // </ProductList>
                        <div key={product.id} className="relative">
                            <div className="aspect-[3/2] w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none hover:opacity-75 lg:h-96">
                                <Image
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-bottom lg:h-full lg:w-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-xl text-gray-100">
                                        <a href={`/product?id=${product.id}`}>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {product.name}
                                        </a>
                                    </h3>
                                    <p className="mt-4 text-sm text-gray-400">{product.desc}</p>
                                </div>
                                <p className="text-sm font-medium text-gray-100">{product.price}</p>
                            </div>
                            <div className=''>
                                <button className='mt-4 px-8 py-1.5 text-white rounded-xl bg-primary'>
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Products