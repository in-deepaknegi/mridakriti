'use client'

import Image from 'next/image';
import React, { useState } from 'react'
import Logo from '@/public/logo.png'

const Navbar = () => {
    const [mobilemenu, setMobileMenu] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenu(!mobilemenu);
    }

    return (
        <header className='relative overflow-hidden'>
            <nav>
                <div className='bg-black'>
                    <div className='mx-auto flex h-10 items-center justify-between px-4 sm:px-6 lg:px-8'>
                        <div className='hidden text-white text-sm lg:block lg:flex-1'>
                            English
                        </div>
                        <div className='flex-1 items-center lg:flex-none'>
                            <a href="#" className='text-olive-300 text-sm'>
                                Get free delivery on orders over $100
                            </a>
                        </div>
                        <div className='hidden lg:flex lg:flex-1 lg:gap-2 lg:items-center lg:justify-end'>
                            <a href="#" className='text-olive-200 hover:text-olive-100 text-sm'>Sign In</a>
                            <span className='h-4 w-[1px] bg-gray-200 mx-2'></span>
                            <a href="#" className='text-olive-200 hover:text-olive-100 text-sm'>Create an account</a>
                        </div>
                    </div>
                </div>
                <div className='bg-white border-b border-gray-300 flex items-center justify-between px-6 py-2 lg:px-8'>
                    <div className="flex lg:flex-none">
                        <a href="/" className="-m-1.5 p-1.5 flex gap-2 text-2xl font-mediumn text-black">
                            <Image
                                src={Logo}
                                alt='site-logo'
                                className='w-12 h-12'
                            />
                            <span className='hidden my-auto md:block'>
                                Mridakriti
                            </span>
                        </a>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12 ml-10">
                        <a href="/products" className="text-sm font-semibold leading-6 text-olive-600">Products</a>
                        <a href="/pricing" className="text-sm font-semibold leading-6 text-olive-600">Pricing</a>
                        <a href="/contacts" className="text-sm font-semibold leading-6 text-olive-600">Contacts</a>
                        <a href="/about" className="text-sm font-semibold leading-6 text-olive-600">About</a>
                    </div>
                    <div className="hidden lg:ml-8 lg:flex lg:flex-none lg:gap-4 lg:items-center lg:pl-8">
                        <a href="/search">
                            <span className='sr-only'>Search</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className='w-6 h-6 text-olive-600'><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path></svg>
                        </a>
                        <a href="">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className='w-6 h-6 text-olive-600'><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path></svg>
                        </a>
                        <span className='h-5 w-[1px] bg-gray-100'></span>
                        <a href="/cart" className='flex gap-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className='w-6 h-6 text-olive-600'><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path></svg>
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar