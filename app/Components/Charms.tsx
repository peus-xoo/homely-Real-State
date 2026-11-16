import { ArrowUpRightIcon } from "lucide-react";
import HoverText from "@/app/Components/HoverText";

export default function Charms() {
    return (
        <section className="section-y container-x font-['Bricolage_Grotesque']">
            {/* Overlay is always visible below lg (no hover on touch); reveals on hover from lg up */}
            <div className="group relative overflow-hidden rounded-2xl md:rounded-3xl">
                <img
                    src="/why-us.jpg"
                    alt="Why choose us"
                    className="aspect-[4/3] w-full object-cover sm:aspect-[16/9] lg:aspect-[21/9]"
                />

                <span className="absolute inset-0 z-10 bg-black/45 transition-opacity duration-500 lg:opacity-0 lg:group-hover:opacity-100" />

                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-5 px-5 text-center transition-all duration-700 ease-out sm:gap-6 md:gap-8 lg:translate-y-8 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
                    <h2 className="type-h2 max-w-3xl text-white">
                        Enter a realm where exquisite design and timeless luxury come together.
                    </h2>

                    <button className="cursor-pointer rounded-full bg-white px-5 py-2.5 text-sm text-black transition-colors duration-300 hover:bg-neutral-200 md:px-6 md:py-3 md:text-base">
                        <HoverText text="Contact us" icon={<ArrowUpRightIcon size={18} />} />
                    </button>
                </div>
            </div>
        </section>
    );
}
