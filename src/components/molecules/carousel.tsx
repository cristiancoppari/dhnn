"use client";

import { type SwiperOptions } from "swiper/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import { NextArrow, PrevArrow } from "@/components/atoms/icon";
import Card from "@/components/molecules/card";

const swiperConfigProps: SwiperOptions = {
    spaceBetween: 8,
    slidesPerView: 1.15,
    modules: [Navigation, Pagination],
    navigation: {
        nextEl: ".carousel-next",
        prevEl: ".carousel-prev",
    },
    // lazy: true,
    pagination: {
        type: "fraction",
        el: "#paginationFraction",
        formatFractionCurrent: function (number: number) {
            return ("0" + number).slice(-2);
        },
        formatFractionTotal: function (number: number) {
            return ("0" + number).slice(-2);
        },
        renderFraction: function (currentClass: string, totalClass: string) {
            return (
                `<span class="${currentClass}"></span> ` +
                `<span class="text-primary-brand-color font-semibold">/</span> ` +
                `<span class="text-grey-scale-500 ${totalClass}"></span>`
            );
        },
    },
    breakpoints: {
        420: {
            slidesPerView: 1.2,
        },
        492: {
            slidesPerView: 2.2,
        },
        768: {
            slidesPerView: 2.1,
            spaceBetween: 8,
        },
        1024: {
            slidesPerView: 1.4,
        },
        1100: {
            slidesPerView: 1.6,
        },
        1200: {
            slidesPerView: 2.2,
        },
        1460: {
            slidesPerView: 2.4,
            spaceBetween: 24,
        },
    },
};

type Card = {
    id: number;
    image: string;
    title: string;
    description: string;
};

type CarouselProps = {
    cards: Card[];
};

const images = [
    "/images/image-1.webp",
    "/images/image-2.webp",
    "/images/image-3.webp",
];

export default function Carousel({ cards }: CarouselProps) {
    const cardsWithImage = cards.map((card, index) => {
        const imageIndex = index % images.length;
        // Retornamos el objeto original con la propiedad de imagen agregada
        return { ...card, image: images[imageIndex] };
    });

    return (
        <div id="cardsCarousel">
            <Swiper {...swiperConfigProps}>
                {cardsWithImage.map((card: Card) => (
                    <SwiperSlide key={card.id} className="w-200">
                        <Card
                            key={card.id}
                            img={card.image}
                            title={card.title}
                            description={card.description}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            <CarouselNavigation />
        </div>
    );
}

function CarouselNavigation() {
    return (
        <div className="mt-6 flex items-center gap-[3.75rem] md:mr-30 md:mt-8 md:justify-end">
            <PaginationFraction />
            <NavigationArrows />
        </div>
    );
}

function PaginationFraction() {
    // its empty because the renderFraction prop in swiperConfigProps
    // will render the pagination
    return <div id="paginationFraction" className="text-sm"></div>;
}

function NavigationArrows() {
    return (
        <div id="navContainer" className="flex gap-6">
            <PrevArrow classNames="carousel-prev" />
            <NextArrow classNames="carousel-next" />
        </div>
    );
}
