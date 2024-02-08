import { type PropsWithChildren, type ReactNode } from "react";

import { cn } from "@/lib/utils";

type WithClassNames = {
    classNames?: string;
};

export function Label({
    children,
    classNames,
}: PropsWithChildren & WithClassNames) {
    return (
        <label
            className={cn(
                "text-2xs font-bold uppercase leading-5 tracking-[3px] text-grey-scale-500",
                classNames,
            )}
        >
            {children}
        </label>
    );
}

type TitleProps = {
    children: ReactNode;
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    variant?: "big" | "regular" | "card";
};

export function Title({
    children,
    classNames,
    variant = "regular",
    as: Component = "h1",
}: TitleProps & WithClassNames) {
    const variants = {
        big: "text-4xl leading-11",
        regular: "text-2xl leading-[2rem] md:text-4xl md:leading-[2.75rem]",
        card: "text-xl leading-6",
    };

    return (
        <Component
            className={cn(
                "font-bold text-grey-scale-900",
                classNames,
                variants[variant],
            )}
        >
            {children}
        </Component>
    );
}

export function Paragraph({
    children,
    classNames,
}: PropsWithChildren & WithClassNames) {
    return (
        <p className={cn("leading-[22px] text-grey-scale-700", classNames)}>
            {children}
        </p>
    );
}

export function SmallText({
    children,
    classNames,
}: PropsWithChildren & WithClassNames) {
    return (
        <p
            className={cn(
                "text-xs leading-[1.125rem] text-grey-scale-500",
                classNames,
            )}
        >
            {children}
        </p>
    );
}
