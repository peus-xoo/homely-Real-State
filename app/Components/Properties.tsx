"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const properties = [
    { name: "Serenity Height Villas", address: "15 S Aurora Ave, Miami", price: "$570,000", img: "/Serenity.jpg", beds: 4, baths: 3, area: 120 },
    { name: "Mountain Retreat Villa", address: "Mysculin, Faroe, IS", price: "$630,000", img: "/Mountain1.jpg", beds: 2, baths: 2, area: 150 },
    { name: "Modern Luxe Villa", address: "20 S Aurora Ave, Miami", price: "$1,200,000", img: "/ModernLuxury.jpg", beds: 1, baths: 2, area: 240 },
    { name: "Royal Orchid Villas", address: "12 Emerald Heights, LA", price: "$780,000", img: "/RoyalOrchid.jpg", beds: 3, baths: 4, area: 180 },
    { name: "Grand Vista Villas", address: "25 Skyline Boulevard, SD", price: "$710,000", img: "/GrandVista.jpg", beds: 3, baths: 3, area: 170 },
    { name: "Imperial Pearl Villas", address: "18 Sapphire Bay Road, NS", price: "$630,000", img: "/Imperial pear.jpg", beds: 4, baths: 2, area: 134 },
];

const plural = (n: number, word: string) => `${n} ${word}${n === 1 ? "" : "s"}`;

export default function Properties() {
    return (
        <section
            id="properties"
            className="section-y scroll-mt-20 bg-white font-['Bricolage_Grotesque'] text-black"
        >
            <div className="container-x flex flex-col gap-8 md:gap-12">
                {/* Heading */}
                <div className="mx-auto flex max-w-2xl flex-col items-center gap-3 text-center md:gap-4">
                    <p className="type-eyebrow">
                        <img src="/homeGreen.jpg" alt="" className="h-5 w-5" />
                        Properties
                    </p>
                    <h2 className="type-h2">Discover inspiring designed homes.</h2>
                    <p className="type-lead text-gray-500">
                        Curated homes where elegance, style, and comfort unite.
                    </p>
                </div>

                {/* Cards: 1 → 2 → 3 columns */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6 xl:grid-cols-3 2xl:gap-8">
                    {properties.map((p) => (
                        <article
                            key={p.name}
                            className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg"
                        >
                            <img
                                src={`/${p.img.replace(/^\//, "")}`}
                                alt={p.name}
                                className="aspect-[4/3] w-full object-cover"
                            />

                            <div className="flex flex-1 flex-col gap-4 p-4 sm:p-5">
                                <div className="flex items-start justify-between gap-3">
                                    <div className="min-w-0">
                                        <h3 className="type-h3 font-medium">{p.name}</h3>
                                        <p className="type-small mt-1 text-gray-500">{p.address}</p>
                                    </div>
                                    <span className="shrink-0 rounded-full bg-green-200 px-3 py-1 text-sm font-bold text-green-800">
                                        {p.price}
                                    </span>
                                </div>

                                {/* Specs */}
                                <ul className="flex items-center justify-between gap-2 border-y border-gray-200 py-4 text-xs sm:text-sm">
                                    {[
                                        { icon: "/Simplification.jpg", label: plural(p.beds, "Bedroom") },
                                        { icon: "/Bathroom.jpg", label: plural(p.baths, "Bathroom") },
                                        { icon: "/Direction.jpg", label: `${p.area} m²` },
                                    ].map((spec) => (
                                        <li key={spec.label} className="flex flex-1 flex-col items-center gap-1 text-center">
                                            <img src={spec.icon} alt="" className="h-5 w-5" />
                                            {spec.label}
                                        </li>
                                    ))}
                                </ul>

                                <motion.button
                                    whileTap={{ scale: 0.96 }}
                                    whileHover={{ scale: 1.02 }}
                                    className="mt-auto flex cursor-pointer items-center justify-center gap-1 rounded-full bg-black px-4 py-2.5 text-sm text-white md:text-base"
                                >
                                    View details <ArrowUpRight size={18} />
                                </motion.button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
