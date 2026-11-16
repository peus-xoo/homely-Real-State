import { Fragment, ReactNode } from "react";
import Link from "next/link";
import { ArrowDownRightIcon, ArrowUpRightIcon } from "lucide-react";
import { motion } from "motion/react";
import HoverText from "@/app/Components/HoverText";

export type SlideStat = {
    icon?: string;   // icon + label stat
    label: string;
    value?: string;  // big value (price) + small label
};

type Props = {
    location: string;
    title: ReactNode;
    bg: string;
    active: number;      // which indicator is active (0-2)
    total?: number;
    stats: SlideStat[];
};

export default function HeroSlide({ location, title, bg, active, total = 3, stats }: Props) {
    return (
        <section className="relative isolate flex h-full w-full flex-col font-['Bricolage_Grotesque'] text-white">
            {/* Background + overlay */}
            <div
                className="absolute inset-0 -z-20 bg-cover bg-center"
                style={{ backgroundImage: `url('${bg}')` }}
            />
            <div className="absolute inset-0 -z-10 bg-black/40" />

            {/* Copy (pt clears the absolute header) */}
            <div className="container-x flex flex-1 flex-col items-start justify-center gap-4 pt-24 sm:gap-5 md:gap-7 md:pt-28">
                <p className="type-lead">{location}</p>

                <h1 className="type-display">{title}</h1>

                <div className="flex flex-wrap gap-3">
                    <Link
                        href="/contact"
                        className="rounded-full bg-amber-50 px-5 py-2.5 text-sm font-semibold text-black md:px-6 md:py-3 md:text-base"
                    >
                        <HoverText text="Get in touch" icon={<ArrowUpRightIcon size={18} />} />
                    </Link>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex cursor-pointer items-center gap-1 rounded-full border border-white px-5 py-2.5 text-sm md:px-6 md:py-3 md:text-base"
                    >
                        View details <ArrowDownRightIcon size={18} />
                    </motion.button>
                </div>
            </div>

            {/* Slide indicators */}
            <div className="container-x pb-4 md:pb-6" aria-hidden="true">
                <div className="flex items-center gap-2">
                    {Array.from({ length: total }).map((_, i) => (
                        <span
                            key={i}
                            className={`h-2.5 rounded-full bg-white transition-all ${
                                i === active ? "w-8" : "w-2.5 opacity-50"
                            }`}
                        />
                    ))}
                </div>
            </div>

            {/* Stats bar: full width on mobile, docked right on xl+ */}
            <div className="w-full rounded-t-2xl bg-white px-4 py-5 text-black sm:px-6 md:px-10 md:py-6 xl:ml-auto xl:w-[min(100%,62rem)] xl:rounded-tl-3xl xl:rounded-tr-none xl:px-16 xl:py-10">
                <div className="grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-4 md:flex md:items-center md:justify-center md:gap-8 xl:justify-start xl:gap-10">
                    {stats.map((stat, i) => (
                        <Fragment key={stat.label}>
                            {i > 0 && (
                                <span className="hidden h-10 w-px bg-black/15 md:block" aria-hidden="true" />
                            )}
                            <div className="flex flex-col items-center gap-1 text-center text-sm md:text-base xl:text-lg">
                                {stat.value ? (
                                    <>
                                        <p className="text-xl font-medium md:text-2xl">{stat.value}</p>
                                        <p className="type-small text-gray-500">{stat.label}</p>
                                    </>
                                ) : (
                                    <>
                                        {stat.icon && (
                                            <img src={stat.icon} alt="" className="h-5 w-5 md:h-6 md:w-6" />
                                        )}
                                        <p>{stat.label}</p>
                                    </>
                                )}
                            </div>
                        </Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
}
