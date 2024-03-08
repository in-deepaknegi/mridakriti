import React from "react";
import Image from "next/image";
import Logo from "@/public/logo.png";

const Footer = () => {
    return (
        <footer className="relative bg-black py-10 border-t border-gray-500">
            <div className="mx-7">
                <div className="mb-6 sm:flex sm:items-center sm:justify-between">
                    <a
                        href="/"
                        className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
                    >
                        <Image src={Logo} alt="Mridakriti-logo" className="w-12 h-12" />
                        <span className="self-center text-2xl text-white whitespace-nowrap">
                            Mridakriti
                        </span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-dusk-400 sm:mb-0 ">
                        <li>
                            <a href="/about" className="hover:text-dusk-200 me-4 md:me-6">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="/privacy" className="hover:text-dusk-200 me-4 md:me-6">
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="/terms" className="hover:text-dusk-200 me-4 md:me-6">
                                Terms and Conditions
                            </a>
                        </li>
                        <li>
                            <a href="/shipping" className="hover:text-dusk-200 me-4 md:me-6">
                                Shipping
                            </a>
                        </li>
                        <li>
                            <a href="/cancellation" className="hover:text-dusk-200 me-4 md:me-6">
                                Cancellation
                            </a>
                        </li>
                    </ul>
                </div>

                <span className="block text-sm text-dusk-400 sm:text-right dark:text-gray-400">
                    © 2024{" "}
                    <a href="/" className="hover:text-dusk-200">
                        Mridakriti™
                    </a>
                    . All Rights Reserved.
                </span>

                <span className="mt-2 block text-xs text-dusk-400 sm:text-right dark:text-gray-400">
                    Designed by:{" "}
                    <a
                        target="_blank"
                        href="https://www.deepaknegi.in/"
                        className="hover:text-dusk-200"
                    >
                        Deepak Negi
                    </a>
                </span>
            </div>
        </footer>
    );
};

export default Footer;
