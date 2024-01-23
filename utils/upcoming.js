import Ram from '@/public/rammandir.jpg'

const products = [
    {
        id: 220124,
        slug: 'Ram mandir',
        name: 'Ram mandir',
        desc: "The Ram Mandir in Ayodhya, India, is a Hindu temple dedicated to Lord Rama, marking a significant cultural and religious milestone with its construction at the revered birthplace of Lord Rama.",
        href: '#',
        features : [
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
        ],
        imageSrc: Ram,
        imageAlt: "Front of men's Basic Tee in black.",
        price: 1200,
        countInStock: 10,
    },
]


export default products;
