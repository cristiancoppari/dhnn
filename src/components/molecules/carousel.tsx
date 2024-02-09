"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import { NextArrow, PrevArrow } from "@/components/atoms/icon";
import Card from "@/components/molecules/card";

const CARDS_DATA = [
    {
        id: 1,
        img: "/images/plane.webp",
        title: "Lorem ipsum",
        description: "Lorem ipsum dolor sit amet, consectetur",
    },
    {
        id: 2,
        img: "/images/plane.webp",
        title: "Lorem ipsum",
        description: "Lorem ipsum dolor sit amet, consectetur",
    },
    {
        id: 3,
        img: "/images/plane.webp",
        title: "Lorem ipsum",
        description: "Lorem ipsum dolor sit amet, consectetur",
    },
];

const swiperConfigProps = {
    spaceBetween: 8,
    slidesPerView: 1.15,
    modules: [Navigation, Pagination],
    navigation: {
        el: "#navContainer",
        nextEl: ".carousel-next",
        prevEl: ".carousel-prev",
    },
    pagination: {
        type: "fraction",
        el: "#paginationFraction",
        formatFractionCurrent: function (number: string) {
            return ("0" + number).slice(-2);
        },
        formatFractionTotal: function (number: string) {
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
            slidesPerView: 3.2,
        },
    },
};

export default function Carousel() {
    return (
        <div id="cardsCarousel">
            <Swiper {...swiperConfigProps}>
                {CARDS_DATA.map((card, index) => (
                    <SwiperSlide key={card.id} className="w-200">
                        <Card
                            key={index}
                            img={card.img}
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
        <div className="md:mr-30 mt-6 flex items-center gap-[3.75rem] md:mt-8 md:justify-end">
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
