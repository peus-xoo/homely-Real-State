"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, House } from "lucide-react";

const testimonials = [
    {
        text: "We found my ideal home in no time! The listings were detailed, the photos were accurate, and the whole process felt seamless. Customer service was top-notch, answering all my questions. I will definitely use this platform again in the future!",
        name: "Emily & John Smith",
        status: "Buyer",
        image: "/Cuple1.jpg",
    },
    {
        text: "The entire experience was wonderful. We found our dream home, and the process was simple, smooth, and completely stress-free. I would absolutely recommend this platform!",
        name: "Michael Anderson",
        status: "Homeowner",
        image: "/couple2.jpg",
    },
    {
        text: "Finding the perfect property has never been easier. The team was helpful, professional, and made every step of the journey feel effortless.",
        name: "Sarah Williams",
        status: "Buyer",
        image: "/Cuple3.jpg",
    },
];

export default function Testimonials() {
    const [current, setCurrent] = useState(0);
    const testimonial = testimonials[current];

    const previous = () =>
        setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);

    const navBtn =
        "flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-[#293235] transition-colors duration-300 hover:bg-[#00B88A] sm:h-12 sm:w-12 lg:h-14 lg:w-14";

    return (
        <section
            id="testimonials"
            className="section-y scroll-mt-20 bg-[#172023] font-['Bricolage_Grotesque'] text-white"
        >
            <div className="container-x">
                {/* Heading + nav */}
                <div className="flex items-end justify-between gap-6">
                    <div className="flex flex-col gap-4">
                        <p className="type-eyebrow">
                            <House size={17} fill="#00B88A" stroke="#00B88A" />
                            Testimonials
                        </p>
                        <h2 className="type-h2">What our clients say</h2>
                    </div>

                    <div className="flex shrink-0 items-center gap-2 sm:gap-3">
                        <button onClick={previous} aria-label="Previous testimonial" className={navBtn}>
                            <ArrowLeft size={20} strokeWidth={1.6} />
                        </button>
                        <button onClick={next} aria-label="Next testimonial" className={navBtn}>
                            <ArrowRight size={20} strokeWidth={1.6} />
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div
                    key={current}
                    className="mt-10 grid grid-cols-1 gap-8 md:mt-14 md:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] md:gap-12 lg:grid-cols-[minmax(0,1fr)_28rem] lg:gap-16 xl:gap-20"
                >
                    <div className="order-2 flex min-w-0 gap-4 sm:gap-6 md:order-1 md:min-h-[22rem] lg:gap-10">
                        <House
                            strokeWidth={1.2}
                            className="mt-1 h-7 w-7 shrink-0 text-[#00B88A] md:h-9 md:w-9"
                        />
                        <div className="flex min-w-0 flex-1 flex-col justify-between gap-8">
                            <p className="text-[clamp(1.125rem,0.9rem+1.1vw,1.875rem)] font-medium leading-[1.5] tracking-[-0.01em]">
                                {testimonial.text}
                            </p>

                            <div>
                                <h3 className="text-base font-medium md:text-lg">{testimonial.name}</h3>
                                <p className="type-small mt-1 text-[#9aa2a3]">{testimonial.status}</p>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 aspect-[4/3] w-full overflow-hidden rounded-2xl md:order-2 md:aspect-auto md:h-[26rem] lg:h-[30rem]">
                        <img
                            src={testimonial.image}
                            alt={`${testimonial.name}, ${testimonial.status.toLowerCase()}`}
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
