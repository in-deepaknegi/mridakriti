import React from "react";

const steps = [
    {
        id: 1,
        title: "Gathering Soil and Materials:",
        description:
            "Collect different types of soil in various colors and textures. You'll also need a canvas or sturdy paper, brushes, adhesive (like glue or Mod Podge), and containers for mixing",
    },
    {
        id: 2,
        title: "Preparing the Soil Palette:",
        description:
            "Break down the soil into fine particles to create a diverse palette. Use separate containers for each color of soil and mix them with water or adhesive to create a paste-like consistency.",
    },
    {
        id: 3,
        title: "Painting Process:",
        description:
            "Begin by sketching your design lightly on the canvas. Then, use brushes to apply the prepared soil paste onto the canvas, layering and blending different colors to create depth and texture. You can use various techniques like stippling, blending, or layering to achieve different effects.",
    },
    {
        id: 4,
        title: "Finishing Touches:",
        description:
            "Let the painting dry completely. Once dry, you might want to add a protective coating or sealant to preserve the artwork and enhance its longevity. Frame the painting if desired to showcase its beauty.",
    },
];

const Hiw = () => {
    return (
        <section className="relative bg-dusk-200/60  py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="relative isolate flex flex-col lg:flex-row">
                    <div className="max-w-xl">
                        <h2 className="text-left text-3xl font-bold tracking-tight text-black sm:text-4xl">
                            The process of creating soil painting
                        </h2>

                        <p className="mt-4 max-w-xl text-base text-gray-800 md:text-lg">
                            Creating soil paintings is an artistic journey rooted in
                            nature&apos;s palette. The result is a stunning portrayal of
                            nature&apos;s essence, where each stroke captures the beauty of
                            the earth in a truly one-of-a-kind creation.
                        </p>
                    </div>

                    <div className="mt-16 max-w-xl text-black lg:mt-0 lg:px-8">
                        <div className="mx-auto flex flex-col gap-y-10">
                            {steps.map((step) => (
                                <div key={step.id} className="flex gap-2 md:gap-6">
                                    <div className="items-center text-soil-100">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="mx-auto"
                                        >
                                            <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z" />
                                            <path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z" />
                                            <path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z" />
                                            <path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z" />
                                        </svg>
                                        <div className="mx-auto mt-2 h-full w-[2px] bg-soil-100/70 lg:static"></div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold leading-8 tracking-tight text-black">
                                            {step.title}
                                        </h3>
                                        <p className="mt-2 text-[0.925rem] leading-6 text-gray-700">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hiw;
