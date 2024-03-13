import React from "react";

const Form = () => {
    return (
        <section className="relative isolate overflow-hidden bg-dusk-200/30 py-8">
            <h1 className="text-center text-5xl font-semibold">Contact Us</h1>
            <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 lg:grid-cols-2">
                <div className="relative px-6 lg:px-8">
                    <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                        <h2 className="text-4xl font-medium uppercase">Get in touch</h2>
                        <p className="mt-4 text-gray-700">
                            We&apos;d love to hear from you! Whether you have questions,
                            suggestions, or just want to say hello, feel free to reach out.
                        </p>
                        <dl className="mt-10 space-y-8 text-base text-gray-900">
                            <div className="flex gap-6">
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
                                    className="my-auto text-black"
                                >
                                    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                                    <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                                    <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
                                    <path d="M10 6h4" />
                                    <path d="M10 10h4" />
                                    <path d="M10 14h4" />
                                    <path d="M10 18h4" />
                                </svg>
                                <dd>
                                    2nd Floor, Building no. 72, Tapping<br />
                                    Araghar, Dharampur, Dehradun <br />
                                    Uttarakhand 244712
                                </dd>
                            </div>
                            <div className="flex gap-6">
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
                                    className="my-auto text-black"
                                >
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                                <dd>
                                    <a href="tel:+91 95572 2064">+91 95572 20641</a>
                                    <span className=" mx-3 border-l border-gray-800"></span>
                                    <a href="tel:+91 95572 2064">+91 82733 81711</a>
                                </dd>
                            </div>
                            <div className="flex gap-6">
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
                                    className="my-auto text-black"
                                >
                                    <rect width="20" height="16" x="2" y="4" rx="2" />
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                </svg>
                                <dd>
                                    <a href="mailto: office@mridakriti.com">
                                        office@mridakriti.com
                                    </a>
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
                <form className="form mx-auto max-w-xl space-y-5 px-4">
                    <div>
                        <label htmlFor="name">Your name</label>
                        <input type="name" id="name" placeholder="name" required />
                    </div>
                    <div>
                        <label htmlFor="email">Your email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="name@gmail.com"
                            required
                        />
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="message">Your message</label>
                        <textarea
                            id="message"
                            rows={5}
                            placeholder="Leave a comment..."
                        ></textarea>
                    </div>

                    <p className="text-sm text-gray-900">
                        By submitting this form you agree to our
                        <span className="font-semibold text-soil-200">
                            <a href="/terms"> terms and conditions </a>
                        </span>
                        and our
                        <span className="font-semibold text-soil-200">
                            <a href="/privacy"> privacy policy</a>
                        </span>
                        .
                    </p>

                    <button
                        type="submit"
                        className="rounded-lg bg-soil-200 px-5 py-3 text-center text-sm font-medium text-white hover:bg-soil-300 sm:w-fit"
                    >
                        Send message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Form;
