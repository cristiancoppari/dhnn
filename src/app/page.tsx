import Hero from "@/components/organisms/hero";
import Cards from "@/components/organisms/cards";

const CardsProps = {
    label: "Lorem ipsum",
    title: "Lorem ipsum dolor sit amet",
    paragraph:
        "Lorem ipsum dolor sit amet, consectetur. Aenean sed metus vel diam consequat mollis. Praesent metus",
    button: "Call to action",
};

export default function Home() {
    return (
        <main>
            <Hero />
            <Cards {...CardsProps} />
        </main>
    );
}
