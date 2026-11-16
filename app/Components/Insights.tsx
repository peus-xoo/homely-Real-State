import { ArrowUpRightIcon } from "lucide-react";
import HoverText from "@/app/Components/HoverText";

const posts = [
    { img: "/Tips.jpg", title: "Home buying tips", date: "Nov 14, 2026", tag: "Tips" },
    { img: "/Guides.jpg", title: "Boost home value", date: "Oct 4, 2023", tag: "Guides" },
    { img: "/Updates.jpg", title: "Mortgage rates update", date: "Sep 21, 2026", tag: "Updates" },
];

export default function Insights() {
    return (
        <section
            id="blog"
            className="section-y container-x scroll-mt-20 font-['Bricolage_Grotesque'] text-black"
        >
            {/* Heading */}
            <div className="flex flex-col gap-4 md:gap-5">
                <p className="type-eyebrow">
                    <img src="/homeGreen.jpg" alt="" className="h-5 w-5" />
                    Blog
                </p>

                <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
                    <div className="flex flex-col gap-2">
                        <h2 className="type-h2">Real estate insights</h2>
                        <p className="type-lead max-w-xl text-gray-500">
                            Stay ahead in the property market with expert advice and updates
                        </p>
                    </div>

                    <button className="flex w-fit shrink-0 cursor-pointer items-center rounded-full bg-black px-5 py-2.5 text-sm text-white md:px-6 md:py-3 md:text-base">
                        <HoverText text="View all articles" icon={<ArrowUpRightIcon size={18} />} />
                    </button>
                </div>
            </div>

            {/* Posts */}
            <div className="mt-8 grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 md:mt-12 lg:grid-cols-3 lg:gap-x-6 2xl:gap-x-8">
                {posts.map((post) => (
                    <article key={post.title}>
                        <img
                            src={post.img}
                            alt={post.title}
                            className="aspect-[4/3] w-full rounded-2xl object-cover"
                        />
                        <div className="flex items-center justify-between gap-3 pt-4">
                            <div>
                                <h3 className="type-h3 font-medium">{post.title}</h3>
                                <p className="type-small mt-1 text-gray-500">{post.date}</p>
                            </div>
                            <button className="flex shrink-0 cursor-pointer items-center rounded-full bg-black px-3.5 py-1.5 text-sm text-white">
                                <HoverText text={post.tag} icon={<ArrowUpRightIcon size={16} />} />
                            </button>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
