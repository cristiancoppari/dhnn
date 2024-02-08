import { Title, Label, Paragraph } from "@/components/atoms/text";
import Divider from "@/components/atoms/divider";
import Button from "@/components/atoms/button";
// import Card from "@/components/molecules/card";
import Carousel from "@/components/molecules/carousel";

export default function CarouselSection() {
    return (
        <section className="grid grid-cols-6 justify-center gap-2 px-4 pt-15 md:grid-cols-12 md:gap-6 md:py-25 2xl:px-[7.5rem]">
            <article className="col-span-full md:col-span-4">
                <Label classNames="pb-2">Lorem ipsum</Label>

                <Title as="h2">Lorem ipsum dolor sit amet, consectetur</Title>

                <Divider classNames="mb-5 bg-primary-brand-color" />

                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur. Aenean sed metus
                    vel diam consequat mollis. Praesent metus
                </Paragraph>

                <Button variant="secondary" classNames="mt-6 w-full md:w-auto">
                    Call to action
                </Button>
            </article>

            <div className="col-span-full grid grid-cols-3 md:col-span-8">
                <Carousel />
            </div>
        </section>
    );
}
