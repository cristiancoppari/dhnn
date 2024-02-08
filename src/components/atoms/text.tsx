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
                "text-grey-scale-500 text-2xs font-bold uppercase leading-5 tracking-[3px]",
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
};

export function Title({
    children,
    classNames,
    as: Component = "h1",
}: TitleProps & WithClassNames) {
    return (
        <Component
            className={cn(
                "text-grey-scale-900 text-[2rem] font-bold leading-[2rem] md:text-4xl md:leading-[2.75rem]",
                classNames,
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
        <p className={cn("text-grey-scale-700 leading-[22px]", classNames)}>
            {children}
        </p>
    );
}
