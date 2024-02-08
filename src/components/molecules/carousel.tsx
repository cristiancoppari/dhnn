"use client";

import { Swiper, SwiperSlide } from "swiper/react";

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
    slidesPerView: 1.1,
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
            slidesPerView: 3.1,
        },
    },
};

export default function Carousel() {
    return (
        <Swiper {...swiperConfigProps}>
            {CARDS_DATA.map((card, index) => (
                <SwiperSlide key={card.id}>
                    <Card
                        key={index}
                        img={card.img}
                        title={card.title}
                        description={card.description}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
