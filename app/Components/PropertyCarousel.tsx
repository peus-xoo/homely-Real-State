"use client";

import {useEffect, useRef, useState} from "react";
import {gsap} from "gsap";

import PropertySlider from "./PropertySlider";
import SecondSlide from "./SecondSlide";
import ThirdSlide from "./ThirdSlide";

const slides = [PropertySlider, SecondSlide, ThirdSlide];

const HIDDEN = "polygon(0% 100%, 0% 100%, 0% 100%, 0% 100%)";
const VISIBLE = "polygon(0% -100%, 200% 100%, 100% 100%, 0% 100%)";

export default function PropertyCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [nextSlide, setNextSlide] = useState<number | null>(null);
    const [transitioning, setTransitioning] = useState(false);

    const incomingRef = useRef<HTMLDivElement>(null);

    // Start the next transition after 5 seconds
    useEffect(() => {
        if (transitioning) return;

        const timer = setTimeout(() => {
            setNextSlide((currentSlide + 1) % slides.length);
            setTransitioning(true);
        }, 5000);

        return () => clearTimeout(timer);
    }, [currentSlide, transitioning]);

    // Animate the incoming slide
    useEffect(() => {
        if (!transitioning || nextSlide === null || !incomingRef.current) return;

        const animation = gsap.fromTo(
            incomingRef.current,
            {clipPath: HIDDEN},
            {
                clipPath: VISIBLE,
                duration: 1.5,
                ease: "power3.inOut",
                onComplete: () => {
                    setCurrentSlide(nextSlide);
                    setNextSlide(null);
                    setTransitioning(false);
                },
            }
        );

        return () => {
            animation.kill();
        };
    }, [transitioning, nextSlide]);

    const CurrentSlide = slides[currentSlide];
    const IncomingSlide = nextSlide !== null ? slides[nextSlide] : null;

    return (
        // svh = stable height on mobile browsers with collapsing URL bars
        <div className="relative h-svh min-h-[640px] w-full overflow-hidden">
            <div className="absolute inset-0 z-10">
                <CurrentSlide/>
            </div>

            {IncomingSlide && (
                <div
                    ref={incomingRef}
                    className="absolute inset-0 z-20"
                    style={{clipPath: HIDDEN}}
                >
                    <IncomingSlide/>
                </div>
            )}
        </div>
    );
}