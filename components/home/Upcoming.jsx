import React from 'react'
import Image from 'next/image'
import Hero1 from '@/public/rammandir.jpg'

const features = [
    {
        name: 'Sacred Soil of Ayodhya',
        description: 'The Shri Ram Mandir is constructed on the sacred soil of Ayodhya, the birthplace of Lord Rama. This adds a profound spiritual significance to the temple, as it is believed to be built on the very land where the divine incarnation of Lord Rama took place.',
        svg: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m8 3 4 8 5-5 5 15H2L8 3z" /><path d="M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19" /></svg>),
        delay: 700,
    },
    {
        name: 'Holy Waters from the Ganges',
        description: "The temple is constructed using the divine waters of the Ganges (Gange Maa). The use of Ganga Jal in the construction process symbolizes purity and sanctity, connecting the temple to the holiness of the Ganges River, considered one of the most sacred rivers in Hinduism. This infusion of Ganga Jal further enhances the religious and spiritual importance of the Shri Ram Mandir.",
        svg: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /><path d="M5 3v4" /><path d="M19 17v4" /><path d="M3 5h4" /><path d="M17 19h4" /></svg>),
        delay: 500,
    },
]

const Upcoming = () => {
    return (
        <section className='overflow-hidden bg-black py-16 sm:py-20'>
            <div className='mx-auto px-6 lg:px-8'>
                <h2 className='my-10 text-4xl font-bold tracking-tight text-gray-100 sm:text-5xl'>Our Upcoming Work</h2>
                
                <div className='mx-auto mt-20 grid gap-x-8 gap-y-8 sm:gap-y-20 lg:mx-0 lg:max-w-none grid-cols-12'>
                    <div className='col-span-12 order-last lg:order-first lg:pr-8 lg:col-span-6'>
                        <div className=''>
                            <h2 className='text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl'>
                                Ram Mandir
                            </h2>
                            <p className='mt-6 text-base text-gray-300 md:text-lg'>
                                The Ram Mandir in Ayodhya, India, is a Hindu temple dedicated to Lord Rama, marking a significant cultural and religious milestone with its construction at the revered birthplace of Lord Rama.
                            </p>
                            <div className='mt-10 grid gap-y-10 max-w-xl text-base leading-7 text-gray-300 md:gap-y-0 md:gap-x-4 md:grid-cols-2 lg:max-w-none'>
                                {features.map((feature) => (
                                    <div key={feature.name}>
                                        <div className='flex gap-4'>
                                            {feature.svg}
                                            <h2 className='my-auto text-2x font-semibold text-gray-400'>{feature.name}</h2>
                                        </div>
                                        <p className='mt-3 line-clamp-2'>
                                            {feature.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-10 flex gap-x-6">
                                <a href="/booking/ram-mandir" className="rounded-md px-3.5 py-2.5 text-sm font-semibold bg-primary">
                                    Book now
                                </a>
                                <a href="/upcoming/product?id=220124" className="text-sm font-semibold leading-6 text-gray-200 my-auto">
                                    Explore painting <span aria-hidden="true">→</span></a>
                            </div>
                        </div>
                    </div>
                    <div className='my-auto col-span-12 order-first lg:order-last lg:col-span-6'>
                        {/* <video width="540" height="250" autoPlay controls loop className='aspect-square'>
                            <source src="/ram-mandir.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video> */}
                        <Image
                                src={Hero1}
                                alt='Product screenshot'
                                quality={100}
                                loading='eager'
                                className='md:h-[25rem] object-cover object-bottom brightness-[1.4] rounded-md'
                            />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Upcoming