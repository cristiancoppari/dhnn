"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { Title, Label, Paragraph } from "@/components/atoms/text";
import Divider from "@/components/atoms/divider";
import Button from "@/components/atoms/button";
import { Arrow } from "@/components/atoms/icon";

export default function ExpandableBox() {
    const containerRef = useRef<HTMLDivElement>(null);
    const menuTimeline = useRef<gsap.core.Timeline>();
    const mmRef = useRef<gsap.MatchMedia>(gsap.matchMedia());

    const [isExpanded, setIsExpanded] = useState(false);

    useGSAP(
        () => {
            mmRef.current.add("(max-width: 767px)", () => {
                gsap.set(".animated-el", { opacity: 1, y: 0 });
            });

            mmRef.current.add("(min-width: 768px)", () => {
                gsap.set(".animated-el", { opacity: 1, y: 0 });

                menuTimeline.current = gsap.timeline({
                    paused: true,
                    defaults: { duration: 0.5 },
                });

                menuTimeline.current
                    .to("#expandableContent", {
                        maxHeight: "300px",
                    })
                    .from(
                        ".animated-el",
                        {
                            opacity: 0,
                            y: 20,
                            stagger: 0.15,
                        },
                        "-=0.5",
                    )
                    .to(
                        "#toggleBtn",
                        {
                            rotate: "180deg",
                        },
                        0,
                    );
            });
        },
        { scope: containerRef },
    );

    useGSAP(
        () => {
            mmRef.current.add("(min-width: 768px)", () => {
                if (!menuTimeline.current) {
                    console.error("menuTimeline.current is not defined");
                    return;
                }

                isExpanded
                    ? menuTimeline.current.play()
                    : menuTimeline.current.reverse();
            });
        },
        { dependencies: [isExpanded] },
    );

    return (
        <div
            ref={containerRef}
            className="max-w-[606px] bg-white px-4 py-8 md:grid md:grid-cols-[1fr_auto] md:items-start md:gap-2 md:rounded-tr-md md:py-10 md:pl-[7.5rem] md:pr-18"
        >
            <div>
                <Label classNames="inline-block pb-2">Lorem ipsum</Label>

                <Title as="h2">Lorem ipsum dolor sit amet, consectetur</Title>

                <div
                    className="md:max-h-0 md:overflow-hidden"
                    id="expandableContent"
                >
                    <Divider classNames="animated-el my-5 bg-primary-brand-color" />

                    <Paragraph classNames="animated-el">
                        Lorem ipsum dolor sit amet, consectetur. Aenean sed
                        metus vel diam consequat mollis. Praesent metus
                    </Paragraph>

                    <Button classNames="animated-el mt-6 w-full md:w-auto">
                        Call to action
                    </Button>
                </div>
            </div>

            <button
                id="toggleBtn"
                aria-label="Open box button"
                onClick={() => setIsExpanded((prev) => !prev)}
            >
                <Arrow classNames="hidden md:block" />
            </button>
        </div>
    );
}
