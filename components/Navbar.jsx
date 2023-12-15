'use client'

import Image from 'next/image';
import React, { useState } from 'react'
import Logo from '@/public/logo.png'
import { useLanguage } from '@/library/LangChange';
import { useCart } from '@/library/CartContext';

const Navbar = () => {

    const { lang, changeLang } = useLanguage();

    const [mobilemenu, setMobileMenu] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenu(!mobilemenu);
    }
    const handleExpand = () => {
        setIsExpanded(!isExpanded);
    }

    const { cart } = useCart();

    return (
        <>
            <header className='relative z-10'>
                <nav>
                    <div className='bg-black hidden lg:block'>
                        <div className='mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-0'>
                            <button
                                onClick={handleExpand}
                                className='hidden text-white text-sm text-left lg:flex lg:flex-1'>
                                {lang === 'en' ? <>English</> : <>हिंदी</>}
                                <svg className={`ml-1 my-auto 
                            ${isExpanded ? 'transform rotate-180' : ''}`}
                                    xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="m6 9 6 6 6-6" />
                                </svg>
                            </button>
                            {isExpanded && (
                                <div className='absolute w-[4.5rem] left-8 mt-16 text-white text-sm bg-black border border-gray-600 rounded-lg'>
                                    <button
                                        onClick={() => {
                                            changeLang('en');
                                            handleExpand();
                                        }}
                                        className='px-2 mt-[0.15rem]'>English</button>
                                    <button
                                        onClick={() => {
                                            changeLang('hn');
                                            handleExpand();
                                        }}
                                        className='px-2 mt-[0.15rem]'>हिंदी</button>
                                </div>
                            )}
                            <div className='flex-1 items-center lg:flex-none'>
                                <a href="/" className='text-gray-200 text-sm'>
                                    Get 20% off on your first order
                                </a>
                            </div>
                            <div className='hidden lg:flex lg:flex-1 lg:gap-2 lg:items-center lg:justify-end'>
                                <a href="/" className='text-gray-100 text-sm'>Sign In</a>
                                <span className='h-4 w-[1px] bg-gray-200 mx-2'></span>
                                <a href="/" className='text-gray-100 text-sm'>Create an account</a>
                            </div>
                        </div>
                    </div>
                    <div className=' bg-black/40 flex items-center justify-between px-6 py-3 lg:px-8'>
                        <div className=''>
                            <a href="/" className="-m-1.5 p-1.5 flex gap-2 text-2xl font-mediumn text-white">
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
                        <div className='flex lg:hidden'>
                            <button
                                onClick={toggleMobileMenu}
                                type='button' className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-100'>
                                <span className='sr-only'>Open main menu</span>
                                <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' aria-hidden='true'>
                                    <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
                                </svg>
                            </button>
                        </div>
                        <div className="hidden lg:flex lg:gap-x-12 ml-10">
                            <a href="/components" className="text-sm font-semibold leading-6 text-gray-100">Products</a>
                            <a href="/features" className="text-sm font-semibold leading-6 text-gray-100">Contacts</a>
                            <a href="/contact" className="text-sm font-semibold leading-6 text-gray-100">About</a>
                        </div>
                        <div className="hidden lg:ml-8 lg:flex lg:flex-none lg:gap-6 lg:items-center lg:pl-8">
                            <a href="/search">
                                <span className='sr-only'>Search</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className='w-6 h-6 text-gray-100'><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path></svg>
                            </a>
                            <a href="">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className='w-6 h-6 text-gray-100'><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path></svg>
                            </a>
                            <span className='h-5 w-[1px] bg-gray-100'></span>
                            <a href="/cart" className='flex gap-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className='w-6 h-6 text-gray-100'><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path></svg>
                                {cart.length > 0 && (
                                    <span className='my-auto text-sm font-semibold text-primary'>
                                        {cart.length}
                                    </span>
                                )}
                            </a>
                        </div>
                    </div>
                </nav>

                {mobilemenu && (
                    <div className='lg:hidden' role='dialog' aria-modal='true'>
                        <div className='fixed inset-0 z-50'></div>
                        <div className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
                            <div className='flex items-center justify-between'>
                                <a href='#' className='-m-1.5 p-1.5'>
                                    <span className='sr-only'>Your Company</span>
                                </a>
                                <button
                                    onClick={toggleMobileMenu}
                                    type='button' className='-m-2.5 rounded-md p-4 text-gray-700'>
                                    <span className='sr-only'>Close menu</span>
                                    <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' aria-hidden='true'>
                                        <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
                                    </svg>
                                </button>
                            </div>
                            <div className='mt-6 flow-root'>
                                <div className='-my-6 divide-y divide-gray-500/10'>
                                    <div className='space-y-2 py-6'>
                                        <a href='#' className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-800 hover:bg-gray-50'>Product</a>
                                        <a href='#' className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-800 hover:bg-gray-50'>Features</a>
                                        <a href='#' className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-800 hover:bg-gray-50'>Marketplace</a>
                                        <a href='#' className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-800 hover:bg-gray-50'>Company</a>
                                    </div>
                                    <div className='py-6'>
                                        <a href='#' className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-800 hover:bg-gray-50'>Log in</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </header >
        </>
    )
}

export default Navbar