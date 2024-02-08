import { Title, Label, Paragraph } from "@/components/atoms/text";
import Divider from "@/components/atoms/divider";
import Button from "@/components/atoms/button";

export default function ExpandableBox() {
    return (
        <div className="bg-white px-4 py-8">
            <Label classNames="pb-2">Lorem ipsum</Label>

            <Title as="h2" classNames="pb-5">
                Lorem ipsum dolor sit amet, consectetur
            </Title>

            <Divider classNames="mb-5" />

            <Paragraph>
                Lorem ipsum dolor sit amet, consectetur. Aenean sed metus vel
                diam consequat mollis. Praesent metus
            </Paragraph>

            <Button classNames="mt-6 w-full">Call to action</Button>
        </div>
    );
}
