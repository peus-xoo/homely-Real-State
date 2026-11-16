"use client";

import { motion } from "motion/react";
import { ArrowUpRightIcon } from "lucide-react";
import HoverText from "@/app/Components/HoverText";

/* On touch / small screens there is no hover, so the overlay is always visible below `md`. */
const REVEAL =
    "opacity-100 md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0";

export default function PropertyShowcase() {
    return (
        <section
            id="categories"
            className="section-y relative isolate scroll-mt-20 overflow-hidden bg-white font-['Bricolage_Grotesque'] text-black"
        >
            {/* Background decoration */}
            <div className="pointer-events-none absolute left-0 top-0 -z-10 hidden sm:block">
                <img src="/vectorhome.jpg" alt="" />
            </div>

            <div className="container-x grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6">
                {/* Intro */}
                <div className="col-span-12 flex flex-col justify-center gap-4 md:col-span-6 md:gap-6">
                    <p className="type-eyebrow">
                        <img src="/homeGreen.jpg" alt="" className="h-5 w-5" />
                        Categories
                    </p>

                    <h2 className="type-h2">
                        Explore best properties with expert services.
                    </h2>

                    <p className="type-body max-w-xl text-gray-500">
                        Discover a diverse range of premium properties, from luxurious
                        apartments to spacious villas, tailored to your needs.
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.96 }}
                        className="flex w-fit cursor-pointer items-center rounded-full bg-[#07BE8A] px-5 py-2.5 text-sm text-white md:px-6 md:py-3 md:text-base"
                    >
                        <HoverText text="View details" icon={<ArrowUpRightIcon size={18} />} />
                    </motion.button>
                </div>

                {/* Top image */}
                <div className="col-span-12 h-56 overflow-hidden rounded-xl sm:h-72 md:col-span-6 md:h-80 lg:h-96 xl:h-[26rem]">
                    <img src="/First.jpg" alt="First property" className="h-full w-full object-cover" />
                </div>

                {/* Large featured */}
                <div className="group relative col-span-12 h-72 overflow-hidden rounded-xl sm:h-80 md:col-span-6 md:h-[26rem] lg:h-[30rem] xl:h-[34rem]">
                    <img
                        src="/Second.jpg"
                        alt="Luxury villa"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <span
                        className={`absolute inset-0 z-10 bg-linear-to-t from-black/70 via-black/10 to-transparent transition-opacity duration-500 md:bg-black/40 md:bg-none md:opacity-0 md:group-hover:opacity-100`}
                    />

                    <button
                        aria-label="View property"
                        className={`absolute right-4 top-4 z-20 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white transition-all duration-500 ease-out md:right-5 md:top-5 md:h-14 md:w-14 ${REVEAL}`}
                    >
                        <img src="/Arrow-Right.jpg" alt="" className="h-5 w-5 md:h-6 md:w-6" />
                    </button>

                    <div
                        className={`absolute inset-x-4 bottom-4 z-20 text-white transition-all duration-700 ease-out md:inset-x-8 md:bottom-8 lg:inset-x-10 lg:bottom-10 ${REVEAL}`}
                    >
                        <h3 className="text-2xl font-medium md:text-3xl">Luxury villas</h3>
                        <p className="type-body mt-1 max-w-md text-gray-200">
                            Experience elegance and comfort with our exclusive luxury villas,
                            designed for sophisticated living.
                        </p>
                    </div>
                </div>

                {/* Two tall images */}
                <div className="col-span-6 h-52 overflow-hidden rounded-xl sm:h-72 md:col-span-3 md:h-[26rem] lg:h-[30rem] xl:h-[34rem]">
                    <img src="/third.jpg" alt="Third property" className="h-full w-full object-cover" />
                </div>

                <div className="col-span-6 h-52 overflow-hidden rounded-xl sm:h-72 md:col-span-3 md:h-[26rem] lg:h-[30rem] xl:h-[34rem]">
                    <img src="/forth.jpg" alt="Fourth property" className="h-full w-full object-cover" />
                </div>
            </div>
        </section>
    );
}
