"use client";

import { Swiper, SwiperSlide } from "swiper/react";

export default function Carousel() {
    return (
        <Swiper spaceBetween={50} slidesPerView={3}>
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
    );
}

// const CARDS_DATA = [
//     {
//         img: "/images/plane.webp",
//         title: "Lorem ipsum",
//         description: "Lorem ipsum dolor sit amet, consectetur",
//     },
//     {
//         img: "/images/plane.webp",
//         title: "Lorem ipsum",
//         description: "Lorem ipsum dolor sit amet, consectetur",
//     },
//     {
//         img: "/images/plane.webp",
//         title: "Lorem ipsum",
//         description: "Lorem ipsum dolor sit amet, consectetur",
//     },
// ];

// {CARDS_DATA.map((card, index) => (
//     <Card
//         key={index}
//         img={card.img}
//         title={card.title}
//         description={card.description}
//     />
// ))}
