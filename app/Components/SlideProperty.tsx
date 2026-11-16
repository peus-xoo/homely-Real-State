"use client";

import { useEffect, useState } from "react";
import HoverText from "@/app/Components/HoverText";
import { ArrowUpRightIcon } from "lucide-react";

const images = ["/image-22.jpg", "/image-1.jpg", "/image-11.jpg", "/image-4.jpg"];

const features = [
    { icon: "/Fe.jpg", title: "Poolside bliss", text: "One of the few homes in the area with a private pool." },
    { icon: "/SmartHomr.jpg", title: "Smart home access", text: "Easily check yourself in with a modern keypad system." },
    { icon: "/Energy.jpg", title: "Energy efficient", text: "Built in 2025 with sustainable and smart-home features." },
];

export default function SlideProperty() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-advance (timer resets whenever the user changes slide manually)
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    const previousImage = () =>
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);

    return (
        <section
            id="featured"
            className="section-y container-x scroll-mt-20 font-['Bricolage_Grotesque'] text-black"
        >
            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-20">
                {/* Image slider */}
                <div className="relative w-full">
                    <img
                        src={images[currentIndex]}
                        alt="Modern Luxe Villa"
                        className="aspect-[4/3] w-full rounded-2xl object-cover"
                    />

                    <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-black/40 px-3 py-2 md:bottom-5">
                        {images.map((image, index) => (
                            <button
                                key={image}
                                type="button"
                                onClick={() => setCurrentIndex(index)}
                                aria-label={`Show image ${index + 1}`}
                                aria-current={currentIndex === index ? "true" : undefined}
                                className={`h-2.5 cursor-pointer rounded-full transition-all ${
                                    currentIndex === index ? "w-6 bg-white" : "w-2.5 bg-white/50"
                                }`}
                            />
                        ))}
                    </div>

                    <button
                        type="button"
                        onClick={previousImage}
                        aria-label="Previous image"
                        className="absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer md:left-4 [&>img]:h-9 [&>img]:w-9 md:[&>img]:h-11 md:[&>img]:w-11"
                    >
                        <img src="/Frame 412.jpg" alt="" />
                    </button>

                    <button
                        type="button"
                        onClick={nextImage}
                        aria-label="Next image"
                        className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer md:right-4 [&>img]:h-9 [&>img]:w-9 md:[&>img]:h-11 md:[&>img]:w-11"
                    >
                        <img src="/Frame 413.jpg" alt="" />
                    </button>
                </div>

                {/* Details */}
                <div className="flex flex-col gap-4 md:gap-5">
                    <p className="type-eyebrow">
                        <img src="/homeGreen.jpg" alt="" className="h-5 w-5" />
                        Featured property
                    </p>

                    <div>
                        <h2 className="type-h2">Modern Luxe Villa</h2>
                        <p className="type-body mt-2 flex items-center gap-2 text-gray-500">
                            <img src="/Map.jpg" className="h-5 w-5" alt="" />
                            20 S Aurora Ave, Miami
                        </p>
                    </div>

                    <p className="type-body max-w-prose text-gray-500">
                        Experience luxury living at Modern Luxe Villa, located at 20 S Aurora Ave,
                        Miami. Priced at $1,650,500, this 560 ft² smart home offers 4 bedrooms,
                        3 bathrooms, and spacious living areas. Enjoy energy efficiency, natural
                        light, security systems, outdoor spaces, and 2 bar areas—perfect for 8+
                        guests. Built in 2025.
                    </p>

                    <ul className="mt-2 flex flex-col gap-5 md:gap-6">
                        {features.map((f) => (
                            <li key={f.title} className="flex items-start gap-4 md:gap-5">
                                <img src={f.icon} className="h-9 w-9 shrink-0 md:h-10 md:w-10" alt="" />
                                <div>
                                    <h3 className="type-body font-bold">{f.title}</h3>
                                    <p className="type-small text-gray-500">{f.text}</p>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-2 flex flex-wrap items-center gap-x-8 gap-y-4">
                        <button className="cursor-pointer rounded-full bg-[#07BE8A] px-5 py-2.5 text-base text-white md:px-6 md:py-3 md:text-lg">
                            <HoverText text="Get in touch" icon={<ArrowUpRightIcon size={18} />} />
                        </button>

                        <div>
                            <p className="text-xl font-bold md:text-2xl">$1,650,500</p>
                            <p className="type-small text-gray-500">Discounted price</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
