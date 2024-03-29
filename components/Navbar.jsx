import Image from "next/image";
import { Suspense } from "react";
import React from "react";
import Logo from "@/public/logo.png";
import Cart from "./cart";
import OpenCart from "./cart/open-cart";

const links = [
    {
        id: 1,
        title: "Paintings",
        url: "/paintings",
    },
    {
        id: 2,
        title: "About",
        url: "/about",
    },
    {
        id: 3,
        title: "Contacts",
        url: "/contacts",
    },
];

const Navbar = () => {
    // const [mobilemenu, setMobileMenu] = useState(false);

    // const toggleMobileMenu = () => {
    //     setMobileMenu(!mobilemenu);
    // };

    return (
        <header className="relative isolate z-10">
            <nav>
                <div className="flex items-center justify-between border-b border-dusk-300/50 bg-dusk-100/30 px-6 py-3 md:py-4 lg:px-8">
                    <div className="flex lg:flex-none">
                        <a
                            href="/"
                            className="font-mediumn -m-1.5 flex gap-2 p-1.5 text-2xl text-dusk-900"
                        >
                            <Image
                                src={Logo}
                                alt="site-logo"
                                className="h-10 w-10 md:h-12 md:w-12"
                            />
                            <span className="my-auto hidden md:block">Mridakriti</span>
                        </a>
                    </div>

                    <div className="hidden lg:ml-8 lg:flex lg:flex-auto lg:justify-end lg:gap-4 lg:pl-8">
                        <a href="#">
                            <span className="sr-only">Search</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                                className="h-6 w-6 text-dusk-700"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                ></path>
                            </svg>
                        </a>
                        <a href="#">
                            <span className="sr-only">Profile</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                                className="h-6 w-6 text-dusk-700"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                                ></path>
                            </svg>
                        </a>
                        <span className="h-5 w-[1px] bg-dusk-900"></span>
                        <div className="flex justify-end">
                            <Suspense fallback={<OpenCart />}>
                                <Cart />
                            </Suspense>
                        </div>
                       
                    </div>
                    <div className="ml-10 flex">
                        <button
                            // onClick={toggleMobileMenu}
                            type="button"
                            className="-m-2.5 rounded-md p-4 text-gray-900"
                        >
                            {/* <span className="sr-only">Close menu</span>
                            {mobilemenu ? (
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1="21" x2="3" y1="6" y2="6" />
                                    <line x1="15" x2="3" y1="12" y2="12" />
                                    <line x1="17" x2="3" y1="18" y2="18" />
                                </svg>
                            )} */}
                        </button>
                    </div>
                </div>
            </nav>

        </header>
    );
};

export default Navbar;
