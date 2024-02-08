import { cn } from "@/lib/utils";

type DividerProps = {
    width?: number;
    classNames?: string;
};

export default function Divider({ width = 120, classNames }: DividerProps) {
    return (
        <div
            className={cn(
                `w-[${width.toString()}px] bg-primary-brand-color h-[1px]`,
                classNames,
            )}
        />
    );
}
