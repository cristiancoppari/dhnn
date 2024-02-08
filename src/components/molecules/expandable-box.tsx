import { Title, Label, Paragraph } from "@/components/atoms/text";
import Divider from "@/components/atoms/divider";
import Button from "@/components/atoms/button";
import { Arrow } from "@/components/atoms/icon";

export default function ExpandableBox() {
    return (
        <div className="md:pr-18 max-w-[606px] bg-white px-4 py-8 md:grid md:grid-cols-[1fr_auto] md:gap-2 md:py-10 md:pl-[7.5rem]">
            <div>
                <Label classNames="pb-2">Lorem ipsum</Label>

                <Title as="h2" classNames="pb-5">
                    Lorem ipsum dolor sit amet, consectetur
                </Title>

                <Divider classNames="mb-5" />

                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur. Aenean sed metus
                    vel diam consequat mollis. Praesent metus
                </Paragraph>

                <Button classNames="mt-6 w-full md:w-auto">
                    Call to action
                </Button>
            </div>

            <Arrow />
        </div>
    );
}
