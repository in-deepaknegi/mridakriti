"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useCart } from '@/library/CartContext'

const Hero = () => {
    const { cart, removeFromCart, increaseQuantity, decreaseQuantity, itemQuantities } = useCart();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    })

    const handleRemove = (index) => {
        removeFromCart(index);
    }

    const calculateSubtotal = () => {
        return cart.reduce((acc, item, index) => {
            const quantity = itemQuantities[`item_${index}`] || 1;
            return acc + item.price * quantity;
        }, 0);
    };

    return (
        <section className='relative isolate bg-black -mt-20 overflow-hidden'>
            {loading ? (
                <div className="flex justify-center items-center py-56">
                    {/* <p className='text-white text-2xl'>Loading...</p> */}
                    <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                </div>
            ) : (
                <div className='mx-auto px-4 pb-24 pt-36 sm:pt-20 sm:px-6 lg:max-w-7xl lg:px-8'>
                    <div className='mt-12 lg:grid lg:grid-cols-12 lg:self-start lg:gap-x-12 xl:gap-x-16'>
                        {cart.length > 0 ? (
                            <>
                                <div className='col-span-7'>
                                    <h2 className='sr-only'>Items in your shopping cart</h2>
                                    <ul>
                                        {cart.map((item, index) => (
                                            <li key={item.id}
                                                className='flex py-6 sm:py-10 border-b border-gray-600'>
                                                <div className='shrink-0'>
                                                    <Image
                                                        src={item.imageSrc}
                                                        alt={item.imageAlt}
                                                        loading='eager'
                                                        priority={true}
                                                        className='h-24 w-36 rounded-md object-cover object-center sm:h-48 sm:w-48'
                                                    />
                                                </div>
                                                <div className='ml-4 flex flex-1 flex-col justify-between sm:ml-6'>
                                                    <div className='relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0'>
                                                        <div>
                                                            <div className='flex justify-between'>
                                                                <h3 className='text-lg text-white'>
                                                                    {item.name}
                                                                </h3>
                                                            </div>

                                                            <p className='mt-1 text-base font-medium text-gray-400'>
                                                                ₹{item.price}
                                                            </p>
                                                        </div>
                                                        <div className='mt-4 sm:mt-0 sm:pr-9'>
                                                            <div className='flex gap-2 items-center text-gray-100'>
                                                                <button onClick={() => decreaseQuantity(index)}>
                                                                    <span className='sr-only'>Remove Quantity</span>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='text-white'><path d="M5 12h14" /></svg>
                                                                </button>
                                                                <span className='text-gray-200'>
                                                                    {itemQuantities[`item_${index}`] || 1}
                                                                </span>
                                                                <button onClick={() => increaseQuantity(index)}>
                                                                    <span className='sr-only'>Add Quantity</span>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='text-white'><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                                                                </button>

                                                            </div>
                                                            <div className='-mt-3 absolute right-0 top-0'>
                                                                <button
                                                                    onClick={() => handleRemove(index)}
                                                                    className='inline-flex p-2 text-gray-400'>
                                                                    <span className='sr-only'>Remove</span>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className='w-5'><path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path></svg>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}

                                    </ul>
                                </div>
                                <div className="col-span-5 px-4 pt-28 sm:px-6">
                                    <div className="flex justify-between text-base font-medium text-gray-100">
                                        <p>Subtotal</p>
                                        <p>₹{calculateSubtotal()}</p>
                                    </div>
                                    <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                                    <div className="mt-6">
                                        <a
                                            href="#"
                                            className="flex items-center justify-center rounded-md border border-transparent bg-primary px-6 py-3 text-base font-medium text-white shadow-sm"
                                        >
                                            Checkout
                                        </a>
                                    </div>
                                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                        <p>
                                            or &nbsp;
                                            <a href='/#product-list'
                                                className="font-medium text-primary"
                                            >
                                                Continue Shopping
                                                <span aria-hidden="true"> &rarr;</span>
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className='mx-auto col-span-12 items-center justify-center max-w-5xl lg:pt-10 lg:pb-10 text-white'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className='mx-auto w-40 h-40 text-gray-100'><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path></svg>
                                <h2 className='text-4xl text-center'>Your cart seems so light!</h2>
                                <p className='mt-4 text-center text-base text-gray-400'>
                                    Before procedding to chekcout you must add some product to your shopping cart
                                </p>
                                <a href='/#product-list' className='mx-auto flex items-center justify-center mt-4 px-2 py-2 w-40 bg-primary rounded-2xl'>
                                    Return to products
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            )}

        </section>
    )
}

export default Hero