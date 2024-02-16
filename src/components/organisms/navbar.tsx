"use client";

import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import gsap from "gsap";

import { cn } from "@/lib/utils";
import {
    Logo,
    Nav as NavIcon,
    Asterisc,
    ArrowRight,
} from "@/components/atoms/icon";
import { useMediaQuery } from "@/lib/useMediaQuery";

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

const ALL_NAV_ITEMS = [...PRIMARY_NAV_ITEMS, ...SECONDARY_NAV_ITEMS];

export default function Navbar() {
    const matches = useMediaQuery("(min-width: 1131px)");
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="relative mb-0 flex h-[3.75rem] w-full justify-between border-b border-[var(--gray-light)] xl:px-[3rem] 2xl:h-[5.5rem] 2xl:px-[7.5rem]">
            <Link
                href="/"
                className="self-center pl-4 xl:px-0 2xl:py-5"
                aria-label="Aeronex Logo"
            >
                <Logo classNames="w-[8.5rem] 2xl:w-[11.125rem] 2xl:w-[8rem]" />
            </Link>

            <button
                id="openMenuBtn"
                className="block border-l border-[var(--gray-light)] p-[1.125rem] lg-2:hidden"
                onClick={() => setIsOpen((prev) => !prev)}
            >
                <NavIcon />
            </button>

            {matches ? <NavDesktop /> : <NavMobile isOpen={isOpen} />}
        </header>
    );
}

function NavDesktop() {
    return (
        <nav className="absolute top-full z-10 flex w-full flex-col gap-2 overflow-hidden bg-white md:flex-row lg:justify-end lg-2:relative lg-2:top-0">
            <ul className="flex h-full flex-col gap-2 lg:flex-row">
                {PRIMARY_NAV_ITEMS.map((item, index) => (
                    <li
                        key={index}
                        className={
                            "grid place-content-center px-[0.625rem] duration-200 hover:border-b-2 hover:border-b-primary-brand-color active:text-primary-brand-color"
                        }
                    >
                        <Link href={item.href}>{item.label}</Link>
                    </li>
                ))}
            </ul>

            <ul className="flex h-full flex-col gap-2 lg-2:flex-row lg-2:gap-0">
                {SECONDARY_NAV_ITEMS.map((item, index) => (
                    <li
                        key={index}
                        className={cn(
                            "grid place-content-center px-6 duration-200 hover:border-b-2 hover:border-b-primary-brand-color active:text-primary-brand-color",
                            item.hasBorder
                                ? "border-[var(--gray-light) border-l border-[var(--gray-light)] last-of-type:border-r"
                                : "",
                        )}
                    >
                        <Link href={item.href}>{item.abbr || item.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

const NavMobile = ({ isOpen }: { isOpen: boolean }) => {
    const containerRef = useRef<HTMLElement | null>(null);
    const tlRef = useRef<GSAPTimeline | null>(null);

    useGSAP(() => {
        gsap.set(containerRef.current, {
            autoAlpha: 0,
        });

        tlRef.current = gsap.timeline({ paused: true });
        tlRef.current
            .to(containerRef.current, {
                autoAlpha: 1,
                duration: 1,
                ease: "power2.inOut",
            })
            .from(
                "li",
                {
                    y: -20,
                    autoAlpha: 0,
                    duration: 0.3,
                    stagger: 0.1,
                },
                "-=0.5",
            );
    });

    useGSAP(
        () => {
            isOpen ? tlRef.current?.play() : tlRef.current?.reverse();
        },
        {
            dependencies: [isOpen],
        },
    );

    return (
        <nav
            ref={containerRef}
            className="absolute top-[3.75rem] z-10 w-full flex-col gap-2 overflow-hidden bg-white opacity-0"
        >
            <ul className="mt-4 flex h-screen-mobile flex-col">
                {ALL_NAV_ITEMS.map((item, index) => (
                    <li
                        key={index}
                        className={"border-b-grey-scale-50 px-[0.625rem]"}
                    >
                        <Link
                            href={item.href}
                            className="flex justify-between border-b py-6"
                        >
                            <span>{item.label}</span>

                            <ArrowRight />
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

NavMobile.displayName = "NavMobile";
