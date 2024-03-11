import React from "react";

const Newsletter = () => {
    return (
        <section className="relative bg-dusk-200/30 py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="relative isolate overflow-hidden">
                    <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-wide text-dusk-800 sm:text-4xl md:text-center">
                        Subscribe to our newsletter.
                    </h2>
                    <h2 className="mx-auto mt-6 max-w-3xl text-base text-dusk-700 md:text-center">
                        Sign up for our newsletter today and be the first to get updates on
                        our newest products, as well as exclusive offers that are not
                        available anywhere else!
                    </h2>
                    <form
                        action=""
                        className="col-span-5 mt-6 max-w-md md:mx-auto lg:py-2"
                    >
                        <div className="flex gap-x-3">
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="min-w-0 flex-auto rounded-lg border-0 bg-dusk-300/10 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-dusk-700 sm:text-sm sm:leading-6"
                                placeholder="Enter your email"
                            />
                            <button
                                type="submit"
                                className="flex-none rounded-md bg-soil-100 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-soil-200"
                            >
                                Subscribe
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
