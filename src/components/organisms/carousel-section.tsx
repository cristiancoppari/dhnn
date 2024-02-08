import { Title, Label, Paragraph } from "@/components/atoms/text";
import Divider from "@/components/atoms/divider";
import Button from "@/components/atoms/button";
import Card from "@/components/molecules/card";

const CARDS_DATA = [
    {
        img: "/images/plane.webp",
        title: "Lorem ipsum",
        description: "Lorem ipsum dolor sit amet, consectetur",
    },
    {
        img: "/images/plane.webp",
        title: "Lorem ipsum",
        description: "Lorem ipsum dolor sit amet, consectetur",
    },
    {
        img: "/images/plane.webp",
        title: "Lorem ipsum",
        description: "Lorem ipsum dolor sit amet, consectetur",
    },
];

export default function CarouselSection() {
    return (
        <section className="pt-15 md:py-25 grid grid-cols-6 justify-center gap-2 px-4 md:grid-cols-12 md:gap-6 2xl:px-[7.5rem]">
            <article className="col-span-full md:col-span-4">
                <Label classNames="pb-2">Lorem ipsum</Label>

                <Title as="h2">Lorem ipsum dolor sit amet, consectetur</Title>

                <Divider classNames="bg-primary-brand-color mb-5" />

                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur. Aenean sed metus
                    vel diam consequat mollis. Praesent metus
                </Paragraph>

                <Button variant="secondary" classNames="mt-6 w-full md:w-auto">
                    Call to action
                </Button>
            </article>

            <div className="col-span-full grid grid-cols-3 md:col-span-8">
                {CARDS_DATA.map((card, index) => (
                    <Card
                        key={index}
                        img={card.img}
                        title={card.title}
                        description={card.description}
                    />
                ))}
            </div>
        </section>
    );
}
