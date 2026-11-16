"use client";

import { ReactNode } from "react";

export default function HoverText({
    text,
    icon,
}: {
    text: string;
    icon?: ReactNode;
}) {
    return (
        <div className="group relative inline-flex overflow-hidden align-middle">
            <span className="flex shrink-0 items-center gap-1 whitespace-nowrap transition-transform duration-300 group-hover:-translate-y-full">
                {text}
                {icon}
            </span>
            <span
                aria-hidden="true"
                className="absolute inset-x-0 top-full flex items-center gap-1 whitespace-nowrap transition-transform duration-300 group-hover:-translate-y-full"
            >
                {text}
                {icon}
            </span>
        </div>
    );
}
