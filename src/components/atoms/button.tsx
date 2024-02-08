import { cn } from "@/lib/utils";

type ButtonProps = {
    children: React.ReactNode;
    classNames?: string;
    variant?: "primary" | "secondary";
};

const variants = {
    primary: "bg-primary-brand-color text-white",
    secondary: "bg-white text-primary-brand-color",
};

export default function Button({
    classNames,
    variant = "primary",
    children,
}: ButtonProps) {
    return (
        <button
            className={cn(
                `rounded-sm px-6 py-3 font-bold leading-[24px]`,
                classNames,
                variants[variant],
            )}
        >
            {children}
        </button>
    );
}
