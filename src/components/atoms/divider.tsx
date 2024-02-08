import { cn } from "@/lib/utils";

type DividerProps = {
    height?: number;
    width?: "regular" | "full";
    classNames?: string;
    bg?: "blue" | "black";
};

export default function Divider({
    height = 1,
    width = "regular",
    classNames,
    bg = "blue",
}: DividerProps) {
    const bgColors = {
        blue: "bg-primary-brand-color",
        black: "bg-black",
    };

    return (
        <div
            className={cn(
                `h-[${height.toString()}px]`,
                width === "regular" ? "w-[120px]" : "w-full",
                bgColors[bg],
                classNames,
            )}
        />
    );
}
