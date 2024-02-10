import Link from "next/link";

import { cn } from "@/lib/utils";
import { Logo, Nav as NavIcon, Asterisc } from "@/components/atoms/icon";

const PRIMARY_NAV_ITEMS = [
    { label: "Nosotros", href: "#" },
    { label: "Novedades", href: "#" },
    { label: "Inversores", href: "#" },
    { label: "Sumate al equipo", href: "#" },
    { label: "Productos y Servicios", href: "#" },
    { label: "Proveedores", href: "#" },
];

const SECONDARY_NAV_ITEMS = [
    { label: "Asterisco", href: "#", hasBorder: true, abbr: <Asterisc /> },
    { label: "Español", href: "#", hasBorder: true, abbr: "ES" },
    { label: "Sitios", href: "#", hasBorder: true, abbr: null },
];

export default function Navbar() {
    return (
        <header className="relative mb-0 flex h-[3.75rem] w-full justify-between border-b border-[var(--gray-light)] xl:px-[3rem] 2xl:h-[5.5rem] 2xl:px-[7.5rem]">
            <Link href="/" className="self-center pl-4 xl:px-0 2xl:py-5">
                <Logo classNames="w-[8.5rem] 2xl:w-[11.125rem] 2xl:w-[8rem]" />
            </Link>

            <button className="lg-2:hidden block border-l border-[var(--gray-light)] p-[1.125rem]">
                <NavIcon />
            </button>

            <nav className="lg-2:top-0 lg-2:relative absolute top-full z-10 flex w-full flex-col gap-2 overflow-hidden bg-red-500 md:flex-row lg:justify-end">
                <ul className="flex h-full flex-col gap-2 lg:flex-row">
                    {PRIMARY_NAV_ITEMS.map((item, index) => (
                        <li
                            key={index}
                            className={
                                "grid place-content-center px-[0.625rem]"
                            }
                        >
                            <Link href={item.href}>{item.label}</Link>
                        </li>
                    ))}
                </ul>

                <ul className="lg-2:flex-row lg-2:gap-0 flex h-full flex-col gap-2">
                    {SECONDARY_NAV_ITEMS.map((item, index) => (
                        <li
                            key={index}
                            className={cn(
                                "grid place-content-center px-6",
                                item.hasBorder
                                    ? "border-[var(--gray-light) border-l border-[var(--gray-light)] last-of-type:border-r"
                                    : "",
                            )}
                        >
                            <Link href={item.href}>
                                {item.abbr || item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
