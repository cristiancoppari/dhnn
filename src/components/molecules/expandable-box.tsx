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

    const [isExpanded, setIsExpanded] = useState(false);

    useGSAP(
        () => {
            console.log("useGSAP :: run");

            menuTimeline.current = gsap.timeline({
                paused: true,
                defaults: { duration: 0.5 },
            });

            menuTimeline.current.to("#expandableContent", {
                maxHeight: "300px",
            });
        },
        { scope: containerRef },
    );

    useGSAP(
        () => {
            if (!menuTimeline.current) {
                console.error("menuTimeline.current is not defined");
                return;
            }

            isExpanded
                ? menuTimeline.current.play()
                : menuTimeline.current.reverse();
        },
        { dependencies: [isExpanded] },
    );

    return (
        <div className="max-w-[606px] bg-white px-4 py-8 md:grid md:grid-cols-[1fr_auto] md:gap-2 md:py-10 md:pl-[7.5rem] md:pr-18">
            <div ref={containerRef}>
                <Label classNames="inline-block pb-2">Lorem ipsum</Label>

                <Title as="h2">Lorem ipsum dolor sit amet, consectetur</Title>

                <div className="max-h-0 overflow-hidden" id="expandableContent">
                    <Divider classNames="my-5 bg-primary-brand-color" />

                    <Paragraph classNames="animated-p">
                        Lorem ipsum dolor sit amet, consectetur. Aenean sed
                        metus vel diam consequat mollis. Praesent metus
                    </Paragraph>

                    <Button classNames="mt-6 w-full md:w-auto">
                        Call to action
                    </Button>
                </div>
            </div>

            <Arrow onClick={() => setIsExpanded((prev) => !prev)} />
        </div>
    );
}
