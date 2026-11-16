"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const faqs = [
    {
        q: "Can I personalize my Homely?",
        a: "Yes! You can personalize your Homely experience according to your preferences and needs.",
    },
    {
        q: "How can I find my dream home?",
        a: "Browse our property listings and use filters to find a home that matches your needs.",
    },
    {
        q: "Can I schedule a property visit?",
        a: "Yes! Contact our team to arrange a convenient time to visit your preferred property.",
    },
];

export default function FAQ() {
    const [open, setOpen] = useState<number[]>([]);

    const toggle = (i: number) =>
        setOpen((prev) => (prev.includes(i) ? prev.filter((n) => n !== i) : [...prev, i]));

    return (
        <section
            id="faq"
            className="section-y container-x grid scroll-mt-20 grid-cols-1 items-center gap-10 font-['Bricolage_Grotesque'] text-black lg:grid-cols-2 lg:gap-16 xl:gap-24"
        >
            {/* Image grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-5">
                <div className="aspect-square overflow-hidden rounded-2xl">
                    <img src="/image62.jpg" alt="" className="h-full w-full object-cover" />
                </div>
                <div className="row-span-2 overflow-hidden rounded-2xl">
                    <img src="/image65.jpg" alt="" className="h-full w-full object-cover" />
                </div>
                <div className="aspect-square overflow-hidden rounded-2xl">
                    <img src="/image63.jpg" alt="" className="h-full w-full object-cover" />
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-4 md:gap-5">
                <p className="type-eyebrow">
                    <img src="/homeGreen.jpg" alt="" className="h-5 w-5" />
                    FAQs
                </p>

                <h2 className="type-h2">Everything about Homely</h2>

                <p className="type-body max-w-xl text-gray-500">
                    We know that buying, selling, or investing in real estate can be
                    overwhelming. Here are some frequently asked questions to help guide you
                    through the process.
                </p>

                <div className="mt-2 flex flex-col gap-3">
                    {faqs.map((item, i) => {
                        const isOpen = open.includes(i);
                        return (
                            <div key={item.q}>
                                <button
                                    onClick={() => toggle(i)}
                                    aria-expanded={isOpen}
                                    aria-controls={`faq-panel-${i}`}
                                    className="type-h3 flex w-full cursor-pointer items-center justify-between gap-4 rounded-2xl bg-[#e6e6e6] px-4 py-3.5 text-left sm:px-5 sm:py-4"
                                >
                                    <span>
                                        {i + 1}. {item.q}
                                    </span>
                                    {isOpen ? (
                                        <ChevronUp className="shrink-0" size={22} />
                                    ) : (
                                        <ChevronDown className="shrink-0" size={22} />
                                    )}
                                </button>

                                {isOpen && (
                                    <div
                                        id={`faq-panel-${i}`}
                                        className="type-body px-4 py-3 text-gray-600 sm:px-5 sm:py-4"
                                    >
                                        {item.a}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
