"use client"
import React, { useState } from 'react'
import list from '../utils/faq'

const Faq = () => {

    const [active, setActive] = useState(null);

    const toggleActive = (index) => {
        setActive(active === index ? null : index)
    }


    return (
        <section className='relative bg-black'>
            <div className='mx-auto max-w-7xl px-6 py-16 sm:pt-24 lg:px-8 lg:py-20'>
                <div className='lg:grid lg:grid-cols-12 lg:gap-8'>
                    <div className='col-span-5'>
                        <h2 className='text-3xl font-bold leading-10 text-white'>Frequently asked questions</h2>
                        <p className='mt-4 leading-7 text-gray-400'>
                            Can&apos;t find the answer you&apos;re looking for? Reach out to our
                            <a href="/contacts" className='text-primary'> customer support </a>
                            team.
                        </p>
                    </div>
                    <div className='col-span-7 mt-8 lg:mt-0'>
                        <dl className='space-y-9'>
                            {list.map((item, i) => (
                                <div key={i}>
                                    <dt>
                                        <button
                                            onClick={() => toggleActive(i)}
                                            className='flex w-full items-start justify-between text-left'>
                                            <span className='text-base font-semibold leading-7 text-gray-100'>
                                                {item.question}
                                            </span>
                                            <span>
                                                {active === i ? (
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='text-gray-200'><path d="M5 12h14" /></svg>
                                                ) : (
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='text-gray-200'><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                                                )}
                                            </span>
                                        </button>
                                    </dt>
                                    {active === i && (
                                        <>
                                            <dd className='mt-2 text-base leading-7 text-gray-300'>
                                                {item.answer}
                                            </dd>
                                            {item.anslist && (
                                                <ul className='ml-5 mt-3'>
                                                    {item.anslist.map((ans, i) => (
                                                        <li key={i} className='text-base text-gray-300 list-disc'>
                                                            {ans}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}

                                        </>
                                    )}
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faq