import React from 'react'

const Newsletter = () => {
    return (
        <section className='relative bg-black py-2 lg:py-4'>
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                <div className='relative isolate overflow-hidden  px-6 py-24 shadow-xl sm:rounded-3xl sm:px-24'>
                    <h2 className='mx-auto max-w-2xl text-center text-2xl font-bold tracking-wide text-gray-100 sm:text-4xl'>
                        Want product news and updated?
                    </h2>
                    <h2 className='mx-auto mt-2 max-w-2xl text-center text-2xl font-bold tracking-wide text-gray-100 sm:text-4xl'>
                        Sing up for out newsletter
                    </h2>
                    {/* <p className='mt-4 mx-auto max-w-xl text-center text-3xl text-gray-200 sm:text-base'>
                        Reprehenderit ad esse et non officia in nulla. Id proident tempor incididunt nostrud nulla et culpa.
                    </p> */}
                    <form action='' className='mt-6 mx-auto max-w-md col-span-5 lg:py-2'>
                        <div className='flex gap-x-3'>
                            <label htmlFor='email-address' className='sr-only'>Email address</label>
                            <input id='email-address' name='email' type='email' autoComplete='email' required className='min-w-0 flex-auto rounded-lg border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/70 sm:text-sm sm:leading-6' placeholder='Enter your email' />
                            <button type='submit' className='flex-none rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm'>Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Newsletter