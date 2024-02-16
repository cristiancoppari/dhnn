import Image from "next/image";

import ExpandableBox from "@/components/molecules/expandable-box";

export default function Hero() {
    return (
        <section className="relative flex flex-col">
            <div className="relative h-screen-mobile md:h-screen-desktop">
                <Image
                    src="/images/plane.webp"
                    alt="Hero"
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw"
                />
            </div>

            <div className="relative md:absolute md:bottom-0 md:left-0">
                <ExpandableBox />
            </div>
        </section>
    );
}
