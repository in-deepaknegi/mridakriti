import React from "react";
import Image from "next/image";
import Logo from "@/public/logo.png";

const Footer = () => {
    return (
        <footer className="relative border-t border-gray-500 bg-black py-10">
            <div className="mx-7">
                <div className="mb-6 sm:flex sm:items-center sm:justify-between">
                    <a
                        href="/"
                        className="mb-4 flex items-center space-x-3 rtl:space-x-reverse sm:mb-0"
                    >
                        <Image src={Logo} alt="Mridakriti-logo" className="h-12 w-12" />
                        <span className="self-center whitespace-nowrap text-2xl text-white">
                            Mridakriti
                        </span>
                    </a>
                    <ul className="mb-6 flex flex-wrap items-center text-sm font-medium text-dusk-400 sm:mb-0 ">
                        <li>
                            <a href="/about" className="me-4 hover:text-dusk-200 md:me-6">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="/privacy" className="me-4 hover:text-dusk-200 md:me-6">
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="/terms" className="me-4 hover:text-dusk-200 md:me-6">
                                Terms and Conditions
                            </a>
                        </li>
                        <li>
                            <a href="/shipping" className="me-4 hover:text-dusk-200 md:me-6">
                                Shipping
                            </a>
                        </li>
                        <li>
                            <a
                                href="/cancellation"
                                className="me-4 hover:text-dusk-200 md:me-6"
                            >
                                Cancellation
                            </a>
                        </li>
                    </ul>
                </div>

                <span className="block text-sm text-dusk-400 dark:text-gray-400 sm:text-right">
                    © 2024{" "}
                    <a href="/" className="hover:text-dusk-200">
                        Mridakriti™
                    </a>
                    . All Rights Reserved.
                </span>

                <span className="mt-2 block text-xs text-dusk-400 dark:text-gray-400 sm:text-right">
                    Designed by:{" "}
                    <a
                        target="_blank"
                        href="https://www.cnippet.in/"
                        className="hover:text-dusk-200"
                    >
                        Cnippet
                    </a>
                </span>
            </div>
        </footer>
    );
};

export default Footer;
