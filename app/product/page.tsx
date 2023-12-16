"use client"
import React, { useContext } from 'react'
import products from '@/utils/data';
import Navbar from '@/components/Navbar';
import { useCart } from '@/library/CartContext';
import { useRouter } from 'next/navigation';


type Props = {
    searchParams: { [key: string]: string | string[] | undefined }
}


const Product = ({ searchParams }: Props) => { 

    const router = useRouter();

    console.log(searchParams)
    const idString = searchParams?.id;
    const _id = Number(idString);
    const product = products.find((product) => product.id === _id)

    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart(product);
        router.push('/cart');
    }

    if (!product) {
        return <div>Product Not Found</div>
    }

    return (
        <>
            <Navbar />
            <div className='py-40'>
                <h1>
                    {product.id}
                    <button
                    onClick={handleAddToCart}
                        className='border text-xl'
                    >Add</button>
                </h1>
            </div>
        </>
    )
}

export default Product