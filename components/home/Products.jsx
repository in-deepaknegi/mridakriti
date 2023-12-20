import React from 'react';
import Image from 'next/image';
import products from '@/utils/data';
import ProductList from '@/components/home/ProductList';


const Products = () => {
    return (
        <div  className="relative bg-black">
            <div className="mx-auto max-w-2xl py-16 px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-6xl font-semibold  tracking-tight text-gray-100">Our Works</h2>

                <p className='mt-5 text-gray-200 max-w-2xl'>
                    Enhance your space with the beauty of nature captured in vibrant colors and textures. Transform your walls into living artworks that breathe life into any room. Discover the artistry of soil paintings that bring the essence of the outdoors indoors.
                </p>

                <div id='product-list' className="mt-12 max-w-5xl grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                    {products.map((product) => (
                        // <ProductList key={product.id} product={product} >
                        // </ProductList>
                        <div key={product.id} className="relative">
                            <div className="aspect-[3/2] w-full overflow-hidden rounded-md bg-black lg:aspect-none hover:opacity-75 lg:h-96">
                                <Image
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    loading='eager'
                                    quality={100}
                                    className="h-full w-full object-contain object-center lg:h-full lg:w-full"
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
                                    <p className="mt-4 text-sm text-gray-400 line-clamp-3">{product.desc}</p>
                                </div>
                                <p className="text-sm font-medium text-gray-100">₹{product.price}</p>
                            </div>
                            <div className='mt-4'>
                                <a href={`/product?id=${product.id}`} className='relative flex items-center justify-center bg-primary py-2 rounded-lg pointer-events-auto text-sm font-medium'>
                                    View product
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Products