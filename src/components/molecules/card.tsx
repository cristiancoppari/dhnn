import Image from "next/image";

import Divider from "@/components/atoms/divider";
import { Title, SmallText } from "@/components/atoms/text";
import Button from "@/components/atoms/button";
import { cn } from "@/lib/utils";

type CardProps = {
    classNames?: string;
    img: string;
    title: string;
    description: string;
};

export default function Card({
    classNames,
    img,
    title,
    description,
}: CardProps) {
    return (
        <article className={cn("max-w-[24rem]", classNames)}>
            <Image
                src={img}
                alt="Lorem Ipsum"
                width={400}
                height={200}
                className="aspect-[300/282] rounded-lg"
            />

            <Divider classNames="my-4" bg="black" width="full" height={2} />

            <Title as="h4" variant="card" classNames="mb-2">
                {title}
            </Title>

            <SmallText classNames="mb-2">{description}</SmallText>

            <Button variant="link">Call to action</Button>
        </article>
    );
}
