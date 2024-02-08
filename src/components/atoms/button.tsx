import { cn } from "@/lib/utils";

type ButtonProps = {
    children: React.ReactNode;
    classNames?: string;
    variant?: "primary" | "secondary" | "link";
};

const variants = {
    primary: "bg-primary-brand-color text-white px-6 py-3",
    secondary:
        "bg-white px-6 py-3 text-primary-brand-color border border-primary-brand-color",
    link: "text-primary-brand-color text-sm underline text-primary-brand-color py-1",
};

export default function Button({
    classNames,
    variant = "primary",
    children,
}: ButtonProps) {
    return (
        <button
            className={cn(
                `rounded-sm font-bold leading-[24px]`,
                classNames,
                variants[variant],
            )}
        >
            {children}
        </button>
    );
}
