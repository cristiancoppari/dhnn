import Link from "next/link";

import { Logo, Nav as NavIcon } from "@/components/atoms/icon";

const NAVBAR_ITEMS = [
    { label: "Nosotros", href: "#" },
    { label: "Novedades", href: "#" },
    { label: "Inversores", href: "#" },
    { label: "Sumate al equipo", href: "#" },
    { label: "Productos y Servicios", href: "#" },
    { label: "Proveedores", href: "#" },
    { label: "Asterisco", href: "#" },
    { label: "Español", href: "#" },
    { label: "Sitios", href: "#" },
];

export default function Navbar() {
    return (
        <header className="mb-0 flex h-[3.75rem] w-full justify-between border-b border-[var(--gray-light)]">
            <Link href="/" className="self-center pl-4">
                <Logo classNames="w-[8.5rem] md:w-[11.125rem]" />
            </Link>

            <button className="border-l border-[var(--gray-light)] p-[1.125rem]">
                <NavIcon />
            </button>

            <nav className="hidden md:block">
                <ul>
                    {NAVBAR_ITEMS.map((item, index) => (
                        <li key={index}>
                            <Link href={item.href}>
                                <span>{item.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
