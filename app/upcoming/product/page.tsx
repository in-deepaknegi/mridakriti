import React from 'react'
import products from '@/utils/upcoming';
import Navbar from '@/components/Navbar';
import Hero from '@/components/upcoming/Hero';
import Footer from '@/components/Footer';

type Props = {
    searchParams: { [key: string]: string | string[] | undefined }
}

const Product = ({ searchParams }: Props) => {

    console.log(searchParams)
    const idString = searchParams?.id;
    const _id = Number(idString);
    const product = products.find((product) => product.id === _id)

    if (!product) {
        return <div>Product Not Found</div>
    }

    return (
        <>
            <Navbar />
            <main>
                <Hero product={product} />
            </main>
            <Footer />
        </>
    )
}

export default Product