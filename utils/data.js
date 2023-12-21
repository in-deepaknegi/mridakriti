import P2101 from '@/public/P2101.jpg';
import P2102 from '@/public/P2102.jpg';
import S2102 from '@/public/S2202.jpg';
import S2103 from '@/public/S2203.jpg';
import Gangotri from '@/public/gangotri.webp';
import Yamnotri from '@/public/yamnotri.webp'

const products = [
    {
        id: 1,
        slug: 'shri-badrinath',
        name: 'Shri Badrinath Ji',
        desc: "Crafting an idol from the revered elements of Baikund Dham Shri Badrinath's holy soil and the divine waters of Satopanth involves a deeply sacred process. Gathering the sanctified soil and water with utmost reverence precedes the careful preparation of these materials. Blending the soil with a binding agent forms a clay-like substance, which, when sculpted and detailed, embodies spiritual significance. Rituals, prayers, and a consecration ceremony infuse the idol with divine energy, transforming it into a revered symbol for worship and spiritual connection.",
        href: '#',
        imageSrc: P2101,
        imageAlt: "Front of men's Basic Tee in black.",
        gallery: [
            {
                src: P2102,
                alt: 'product-1',
            },
            {
                src: P2102,
                alt: 'product-1',
            },
            {
                src: P2102,
                alt: 'product-1',
            },
        ],
        price: 1200,
        countInStock: 10,
    },
    {
        id: 2,
        slug: 'shri-kedarnath',
        name: 'Shri Kedarnath Ji',
        desc: "Crafting an idol from the sacred soil of Baba Shri Kedarnath Ji and the divine waters of Ganga Maiya involves a deeply reverential process. The collection of the sanctified soil from the revered land of Kedarnath and the pure waters of the Ganges, performed with utmost respect, marks the initial step. The blending of the soil with a binding agent creates a pliable substance, allowing for the meticulous sculpting and detailing of the idol. Rituals and prayers, accompanied by a consecration ceremony, infuse the idol with divine essence, rendering it a revered symbol for worship and spiritual devotion.",
        href: '#',
        imageSrc: S2102,
        imageAlt: "Front of men's Basic Tee in black.",
        gallery: [
            {
                src: S2103,
                alt: 'product-1',
            },
            {
                src: S2103,
                alt: 'product-1',
            },
            {
                src: S2103,
                alt: 'product-1',
            },
        ],
        price: 1200,
        countInStock: 10,
    },
    {
        id: 3,
        slug: 'shri-kedarnath',
        name: 'Gangotri Dham',
        desc: "The shape of Gangotri Dham, crafted from the sacred soil of its very land and infused with the divine waters of Mother Ganga, holds a profound significance. This symbol not only embodies the physical representation of the revered pilgrimage site but encapsulates the spiritual essence of devotion and sanctity.",
        href: '#',
        imageSrc: Gangotri,
        imageAlt: "Front of men's Basic Tee in black.",
        gallery: [
            {
                src: Gangotri,
                alt: 'product-1',
            },
            {
                src: Gangotri,
                alt: 'product-1',
            },
            {
                src: Gangotri,
                alt: 'product-1',
            },
        ],
        price: 1200,
        countInStock: 10,
    },
    {
        id: 4,
        slug: 'shri-kedarnath',
        name: 'Yamnotri Dham',
        desc: "The form of Yamunotri Dham, meticulously shaped from the consecrated soil of its own revered grounds and infused with the divine waters of Mother Ganga, embodies a profound spiritual significance. It encapsulates not just a physical representation of the sacred pilgrimage site but also the essence of devotion, sanctity, and the interconnectedness of revered natural elements.",
        href: '#',
        imageSrc: Yamnotri,
        imageAlt: "Front of men's Basic Tee in black.",
        gallery: [
            {
                src: Yamnotri,
                alt: 'product-1',
            },
            {
                src: Yamnotri,
                alt: 'product-1',
            },
            {
                src: Yamnotri,
                alt: 'product-1',
            },
        ],
        price: 1200,
        countInStock: 10,
    },
]


export default products;
