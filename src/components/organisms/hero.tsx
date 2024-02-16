// import Image from "next/image";

import ExpandableBox from "@/components/molecules/expandable-box";

export default function Hero() {
    return (
        <section className="relative flex flex-col">
            <div className="relative md:h-screen-desktop">
                <picture>
                    <source
                        srcSet="/images/hero.webp"
                        media="(min-width: 768px)"
                    />
                    <img
                        src="/images/hero-mobile.webp"
                        alt="Aeronex"
                        className="w-full object-contain md:h-full md:object-cover"
                    />
                </picture>
            </div>

            <div className="relative md:absolute md:bottom-0 md:left-0">
                <ExpandableBox />
            </div>
        </section>
    );
}
