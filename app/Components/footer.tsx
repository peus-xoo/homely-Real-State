"use client";

import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { ArrowUpRightIcon } from "lucide-react";
import HoverText from "@/app/Components/HoverText";

const socials = [
    { label: "X", href: "https://x.com", Icon: FaXTwitter },
    { label: "Facebook", href: "https://facebook.com", Icon: FaFacebook },
    { label: "Instagram", href: "https://instagram.com", Icon: FaInstagram },
];

const columns = [
    [
        ["Home", "#home"],
        ["Categories", "#categories"],
        ["Properties", "#properties"],
        ["Featured property", "#featured"],
    ],
    [
        ["Testimonials", "#testimonials"],
        ["Blog", "#blog"],
        ["FAQs", "#faq"],
        ["404 page", "#404page"],
    ],
];

const link = "transition-colors hover:text-white";

export default function Footer() {
    return (
        <footer className="bg-[#172023] pb-6 pt-12 font-['Bricolage_Grotesque'] text-gray-400 md:pt-16 lg:pt-20">
            <div className="container-x">
                {/* Newsletter + socials */}
                <div className="flex flex-col justify-between gap-8 border-b border-white/10 pb-8 lg:flex-row lg:items-center">
                    <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center lg:flex-nowrap lg:gap-6">
                        <p className="type-small max-w-[18rem] text-white">
                            Stay updated with the latest news, promotions, and exclusive offers.
                        </p>

                        <form
                            className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
                            onSubmit={(e) => e.preventDefault()}
                        >
                            <input
                                type="email"
                                aria-label="Email address"
                                placeholder="Enter your email"
                                className="h-11 w-full rounded-full border border-gray-600 bg-gray-800 px-4 text-sm text-white outline-none placeholder:text-gray-400 focus:border-white sm:w-56"
                            />
                            <button
                                type="submit"
                                className="h-11 w-full cursor-pointer rounded-full bg-white px-6 text-sm text-black transition-colors hover:bg-gray-200 sm:w-auto"
                            >
                                <HoverText text="Subscribe" />
                            </button>
                        </form>

                        <p className="max-w-[16rem] text-xs leading-relaxed">
                            By subscribing, you agree to receive our promotional emails. You can
                            unsubscribe at any time.
                        </p>
                    </div>

                    <div className="flex items-center gap-5 text-white sm:gap-6">
                        {socials.map(({ label, href, Icon }) => (
                            <a
                                key={label}
                                href={href}
                                aria-label={label}
                                className="transition-colors hover:text-[#00B88A]"
                            >
                                <Icon size={22} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* CTA + nav */}
                <div className="flex flex-col justify-between gap-10 py-10 md:py-14 lg:flex-row lg:items-end lg:py-20">
                    <div className="max-w-2xl text-white">
                        <h2 className="type-h2 font-medium">Begin your path to success—contact us today.</h2>

                        <button className="mt-6 flex cursor-pointer items-center gap-2 rounded-full border border-white/40 px-5 py-2.5 text-sm text-white transition-colors hover:bg-white hover:text-black md:px-6 md:py-3 md:text-base">
                            <HoverText text="Get in touch" icon={<ArrowUpRightIcon size={18} />} />
                        </button>
                    </div>

                    <nav className="grid grid-cols-2 gap-x-10 text-sm sm:gap-x-16 md:text-base lg:mr-6 xl:gap-x-20">
                        {columns.map((col, i) => (
                            <div key={i} className="flex flex-col gap-3">
                                {col.map(([label, href]) => (
                                    <a key={href} href={href} className={link}>
                                        {label}
                                    </a>
                                ))}
                            </div>
                        ))}
                    </nav>
                </div>

                {/* Bottom bar */}
                <div className="flex flex-col gap-3 border-t border-white/10 pt-5 text-sm sm:flex-row sm:items-center sm:justify-between">
                    <p>© 2026 Homely</p>
                    <div className="flex flex-wrap gap-x-6 gap-y-2">
                        <a href="/terms&condition" className={link}>Terms &amp; Conditions</a>
                        <a href="/privacypolicy" className={link}>Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
