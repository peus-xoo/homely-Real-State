"use client";

import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import HoverText from "./HoverText";
import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";
import {Menu, X} from "lucide-react";
import {useRef, useState} from "react";

gsap.registerPlugin(useGSAP);

const NAV = [
    ["Home", "/"],
    ["Properties", "/properties"],
    ["Testimonials", "/testimonials"],
    ["Blog", "/blog"],
    ["Contact", "/contact"],
] as const;

const SOCIALS = [
    {label: "X/Twitter", href: "https://x.com", Icon: FaTwitter},
    {label: "Facebook", href: "https://facebook.com", Icon: FaFacebook},
    {label: "Instagram", href: "https://instagram.com", Icon: FaInstagram},
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const sidebarRef = useRef(null);
    const container = useRef(null);

    useGSAP(
        () => {
            if (!isOpen || !sidebarRef.current) return;
            gsap.fromTo(
                sidebarRef.current,
                {x: "100%", opacity: 0},
                {x: "0%", opacity: 1, duration: 0.8, ease: "power3.out"}
            );
        },
        {dependencies: [isOpen], revertOnUpdate: true}
    );

    useGSAP(
        () => {
            gsap.from(".box", {y: -360, duration: 1});
        },
        {scope: container}
    );

    return (
        <header
            ref={container}
            className="container-x absolute inset-x-0 top-0 z-50 flex items-center justify-between py-4 font-['Bricolage_Grotesque'] text-white md:py-6"
        >
            {/* Logo */}
            <a href="/" className="box flex shrink-0 items-center gap-2">
                <span className="text-lg font-semibold tracking-tight md:text-xl">Homely</span>
                <img src="/homeLogo.png" alt="" className="h-7 w-7 md:h-8 md:w-8"/>

            </a>

            {/* Right side */}
            <div className="box flex items-center gap-3 md:gap-4">
                <a
                    href="tel:+12124567890"
                    className="hidden items-center gap-3 whitespace-nowrap text-sm md:flex lg:text-base"
                >
                    <img src="/Telephone1.png" alt="" className="h-4 w-4"/>
                    +1-212-456-7890
                </a>

                <img src="/Line 15.jpg" alt="" className="hidden md:block"/>

                <button
                    onClick={() => setIsOpen(true)}
                    aria-expanded={isOpen}
                    aria-label="Open menu"
                    className="flex shrink-0 cursor-pointer items-center gap-2 rounded-full bg-amber-50 px-4 py-2 text-sm text-black transition-colors hover:bg-amber-100 md:px-5 md:py-2.5 md:text-base"
                >
                    <HoverText text="Menu" icon={<Menu size={18}/>}/>
                </button>
            </div>

            {/* Fullscreen menu */}
            {isOpen && (
                <div className="fixed inset-0 z-[100] text-black">
                    <div
                        onClick={() => setIsOpen(false)}
                        className="absolute inset-0 bg-black/40"
                    />

                    <div
                        ref={sidebarRef}
                        className="absolute right-0 top-0 flex h-dvh w-full flex-col overflow-y-auto bg-white px-5 pb-8 pt-4 shadow-xl sm:px-8 md:px-12 md:pt-6 lg:px-16 2xl:px-24"
                    >
                        {/* Close */}
                        <div className="flex justify-end">
                            <button
                                onClick={() => setIsOpen(false)}
                                aria-label="Close menu"
                                className="flex cursor-pointer items-center gap-2 rounded-full bg-black px-4 py-2 text-sm text-white transition-colors hover:bg-gray-800 md:px-5 md:py-2.5 md:text-base"
                            >
                                <HoverText text="Close" icon={<X size={18}/>}/>
                            </button>
                        </div>

                        {/* Navigation */}
                        <nav className="mt-10 flex flex-col gap-3 sm:gap-4 md:mt-16 md:gap-5">
                            {NAV.map(([label, href]) => (
                                <a
                                    key={href}
                                    href={href}
                                    onClick={() => setIsOpen(false)}
                                    className="w-fit text-[clamp(2rem,1.2rem+3.6vw,4rem)] font-medium leading-tight tracking-tight transition-colors hover:text-green-600"
                                >
                                    {label}
                                </a>
                            ))}
                        </nav>

                        {/* Contact + socials */}
                        <div className="mt-auto grid gap-8 border-t border-gray-200 pt-6 sm:grid-cols-2 md:pt-8">
                            <div className="flex flex-col gap-2">
                                <h2 className="type-h3 font-semibold">Contact</h2>
                                <a href="mailto:hello@example.com"
                                   className="type-body text-gray-500 transition-colors hover:text-black">
                                    hello@example.com
                                </a>
                                <a href="tel:+12124567890"
                                   className="type-body text-gray-500 transition-colors hover:text-black">
                                    +1-212-456-7890
                                </a>
                            </div>

                            <div className="flex flex-col gap-3 sm:items-end">
                                {SOCIALS.map(({label, href, Icon}) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-2 text-sm text-gray-500 hover:text-black md:text-base"
                                    >
                                        <Icon size={20} className="text-black"/>
                                        {label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
