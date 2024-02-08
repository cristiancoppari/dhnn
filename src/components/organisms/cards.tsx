import { Title, Label, Paragraph } from "@/components/atoms/text";
import Divider from "@/components/atoms/divider";
import Button from "@/components/atoms/button";
import Carousel from "@/components/molecules/carousel";

type CardsProps = {
    title: string;
    label: string;
    paragraph: string;
    button: string;
};

export default function Cards({ title, label, paragraph, button }: CardsProps) {
    return (
        <section className="flex w-full flex-col flex-wrap gap-2 pt-15 md:flex-row md:gap-6 md:py-25">
            <article className="mb-5 px-4 md:w-[384px] md:pl-[7.5rem]">
                <Label classNames="pb-2">{label}</Label>
                <Title as="h2">{title}</Title>
                <Divider classNames="mb-5 bg-primary-brand-color" />
                <Paragraph>{paragraph}</Paragraph>
                <Button variant="secondary" classNames="mt-6 w-full md:w-auto">
                    {button}
                </Button>
            </article>

            <div className="w-full pl-4">
                <Carousel />
            </div>
        </section>
    );
}
