import { Title, Label, Paragraph } from "@/components/atoms/text";
import Divider from "@/components/atoms/divider";
import Button from "@/components/atoms/button";
import Carousel from "@/components/molecules/carousel";
import { fetchData } from "@/lib/fetchData";

type CardsProps = {
    title: string;
    label: string;
    paragraph: string;
    button: string;
};

export default async function Cards({
    title,
    label,
    paragraph,
    button,
}: CardsProps) {
    const cards = await fetchData();

    return (
        // <section className="flex w-full flex-col flex-wrap pt-15 md:flex-row md:gap-6 md:py-25 md:pl-[7.5rem]">
        <section className="relative grid w-full grid-cols-1 pt-15 md:gap-6 md:py-25 md:pl-[7.5rem] lg:grid-cols-[repeat(2,minmax(0,auto))]">
            <article className="px-4 pb-4 md:w-[384px] md:self-center md:px-0 md:pb-0">
                <Label classNames="pb-2">{label}</Label>
                <Title as="h2">{title}</Title>
                <Divider classNames="my-5" bg="blue" />
                <Paragraph>{paragraph}</Paragraph>
                <Button variant="secondary" classNames="mt-6 w-full md:w-auto">
                    {button}
                </Button>
            </article>

            <div className="mt-5 inline w-full pl-4 md:p-0">
                <Carousel cards={cards} />
            </div>

            <div className="absolute left-0 top-0 -z-10 hidden h-full bg-grey-scale-100 md:block md:w-[75%] lg:w-[56.25%]" />
        </section>
    );
}
