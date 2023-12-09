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
        <header className='absolute inset-x-0 top-0 z-50'>
            <nav className='flex items-center justify-between p-7 lg:px-8' aria-label='Global'>
                <div className='flex lg:flex-auto'>
                    <a href='/' className='flex text-2xl font-medium text-white'>
                        <Image
                            src={Logo}
                            alt='site-logo'
                            className='w-12 h-12 mr-4'
                        />
                        Mridakriti

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
                <div className='hidden lg:flex lg:gap-x-12'>
                    <a href='/products' className='text-sm font-semibold leading-6 text-white'>Products</a>
                    <a href='/contact' className='text-sm font-semibold leading-6 text-white'>Contacts</a>
                    <a href='/about' className='text-sm font-semibold leading-6 text-white'>About</a>
                </div>
                <div className='hidden lg:ml-8 lg:flex lg:items-center lg:border-l lg:border-white lg:pl-8'>
                    <a href='/login' className='text-white'>
                        Sign in
                    </a>
                    <a className='inline-flex justify-center rounded-full text-sm font-semibold py-2 px-4 bg-orange-500 text-white -my-2.5 ml-8' href='/get-pro'>
                        Sign up
                    </a>
                </div>

                <div>
                    <a href='/cart' className="relative">
                        <svg viewBox="0 0 24 24" className='w-8 ml-4' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M1.28869 2.76279C1.41968 2.36983 1.84442 2.15746 2.23737 2.28845L2.50229 2.37675C2.51549 2.38115 2.52864 2.38554 2.54176 2.38991C3.16813 2.59867 3.69746 2.7751 4.11369 2.96873C4.55613 3.17456 4.94002 3.42965 5.23112 3.83352C5.52221 4.2374 5.64282 4.68226 5.69817 5.16708C5.75025 5.62318 5.75023 6.18114 5.7502 6.84139L5.7502 9.49996C5.7502 10.9354 5.7518 11.9365 5.85335 12.6918C5.952 13.4256 6.13245 13.8142 6.40921 14.091C6.68598 14.3677 7.07455 14.5482 7.80832 14.6468C8.56367 14.7484 9.56479 14.75 11.0002 14.75H18.0002C18.4144 14.75 18.7502 15.0857 18.7502 15.5C18.7502 15.9142 18.4144 16.25 18.0002 16.25H10.9453C9.57774 16.25 8.47542 16.25 7.60845 16.1334C6.70834 16.0124 5.95047 15.7535 5.34855 15.1516C4.74664 14.5497 4.48774 13.7918 4.36673 12.8917C4.25017 12.0247 4.25018 10.9224 4.2502 9.55484L4.2502 6.883C4.2502 6.17 4.24907 5.69823 4.20785 5.33722C4.16883 4.99538 4.10068 4.83049 4.01426 4.71059C3.92784 4.59069 3.79296 4.47389 3.481 4.32877C3.15155 4.17551 2.70435 4.02524 2.02794 3.79978L1.76303 3.71147C1.37008 3.58049 1.15771 3.15575 1.28869 2.76279Z" fill="#bdb7b7"></path> <path opacity="0.5" d="M5.74512 6C5.75008 6.25912 5.75008 6.53957 5.75007 6.8414L5.75006 9.5C5.75006 10.9354 5.75166 11.9365 5.85321 12.6919C5.86803 12.8021 5.8847 12.9046 5.90326 13H16.0221C16.9815 13 17.4612 13 17.8369 12.7523C18.2126 12.5045 18.4016 12.0636 18.7795 11.1818L19.2081 10.1818C20.0176 8.29294 20.4223 7.34853 19.9777 6.67426C19.5331 6 18.5056 6 16.4507 6H5.74512Z" fill="#bdb7b7"></path> <path d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z" fill="#bdb7b7"></path> <path d="M18 19.5001C18 18.6716 17.3284 18.0001 16.5 18.0001C15.6716 18.0001 15 18.6716 15 19.5001C15 20.3285 15.6716 21.0001 16.5 21.0001C17.3284 21.0001 18 20.3285 18 19.5001Z" fill="#bdb7b7"></path> </g></svg>
                        {cart.length > 0 && (
                            <span className="absolute -top-1 -right-1 rounded-full bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center">
                                {cart.length}
                            </span>
                        )}
                    </a>
                </div>

                <div className='hidden lg:ml-4 lg:flex'>
                    <svg fill="#e5e7eb" width="42" height="42" viewBox="-6.24 -6.24 36.48 36.48" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" stroke="#9ca3af" strokeWidth="0.00024000000000000003"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#9ca3af" strokeWidth="0.048"></g><g id="SVGRepo_iconCarrier"><path d="M21.05566,12h-2a1,1,0,0,0,0,2v2H17.8714a2.96481,2.96481,0,0,0,.18426-1A2.99955,2.99955,0,0,0,12.458,13.50049a.99992.99992,0,1,0,1.73242.999A1.0009,1.0009,0,0,1,15.05566,14a1,1,0,0,1,0,2,1,1,0,0,0,0,2,1,1,0,1,1,0,2,1.0009,1.0009,0,0,1-.86523-.49951.99992.99992,0,1,0-1.73242.999A2.99955,2.99955,0,0,0,18.05566,19a2.96481,2.96481,0,0,0-.18426-1h1.18426v3a1,1,0,0,0,2,0V14a1,1,0,1,0,0-2ZM9.08594,11.24268a.99963.99963,0,1,0,1.93945-.48536L9.26855,3.72754a2.28044,2.28044,0,0,0-4.4248,0L3.08594,10.75732a.99963.99963,0,1,0,1.93945.48536L5.58618,9H8.52545ZM6.0863,7l.6969-2.78711a.29222.29222,0,0,1,.5459,0L8.02563,7Zm7.96936,0h1a1.001,1.001,0,0,1,1,1V9a1,1,0,0,0,2,0V8a3.00328,3.00328,0,0,0-3-3h-1a1,1,0,0,0,0,2Zm-4,9h-1a1.001,1.001,0,0,1-1-1V14a1,1,0,0,0-2,0v1a3.00328,3.00328,0,0,0,3,3h1a1,1,0,0,0,0-2Z"></path></g></svg>

                    <button onClick={handleExpand}
                        className='my-auto text-white flex pl-1 gap-2'>
                        {lang === 'en' ? (
                            <div className='mx-1'>English</div>
                        ) : (
                            <div className='mx-2'>हिंदी</div>
                        )
                        }
                        <svg className={`my-auto 
                            ${isExpanded ? 'transform rotate-180' : ''}`}
                            xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m6 9 6 6 6-6" />
                        </svg>
                    </button>
                    {isExpanded && (
                        <div className='absolute w-[6rem] right-8 mt-12 text-white border bg-gray-100 border-gray-200 rounded-lg shadow-lg'>
                            {lang === 'en' ? (
                                <button
                                    onClick={() => {
                                        changeLang('hn');
                                        handleExpand();
                                    }}
                                    className='text-black text-center w-full'>
                                    हिंदी
                                </button>
                            ) : (
                                <button
                                    onClick={() => {
                                        changeLang('en');
                                        handleExpand();
                                    }}
                                    className='text-black mx-auto flex justify-center'>
                                    English
                                </button>
                            )

                            }

                        </div>
                    )}
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

        </header>
    )
}

export default Navbar