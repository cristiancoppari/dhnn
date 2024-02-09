import { cn } from "@/lib/utils";

type DividerProps = {
    height?: "1" | "2";
    width?: "regular" | "full";
    bg?: "blue" | "black";
    classNames?: string;
};

export default function Divider({
    height = "1",
    width = "regular",
    bg = "blue",
    classNames,
}: DividerProps) {
    const heightMap = {
        "1": "h-[1px]",
        "2": "h-[2px]",
    };

    const bgColors = {
        blue: "bg-primary-brand-color",
        black: "bg-black",
    };

    const widthMap = {
        regular: "w-[120px]",
        full: "w-full",
    };

    return (
        <div
            className={cn(
                heightMap[height],
                widthMap[width],
                bgColors[bg],
                classNames,
            )}
        />
    );
}
