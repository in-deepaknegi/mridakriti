import React from 'react';
import Image from 'next/image';


const ProductList = ({ product }) => {
    return (
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
                <button className='mt-4 px-8 py-1.5 text-white rounded-xl bg-orange-500 hover:bg-orange-600'>
                    Add to cart
                </button>
            </div>
        </div>
    )
}

export default ProductList