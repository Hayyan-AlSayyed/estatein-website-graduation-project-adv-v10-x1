import Form from "../components/Form/Form"
import PageHero from "../components/Hero/PageHero"
import ExploreEstatein from "../components/sections/ExploreEstatein"
import Location from "../components/Location/Location"
import CardAdvantages, { type CardAdvatagesProps } from "../components/CardAdvantages"
const cardAdvantagesData: CardAdvatagesProps[] = [
    {
        Arrow: "/assets/icons/ArrowIcone.png",
        Icone: "/assets/icons/ContactIcon1.svg",
        advantage: "info@estatein.com",
    },
    {
        Arrow: "/assets/icons/ArrowIcone.png",
        Icone: "/assets/icons/ContactIcon2.svg",
        advantage: "+1 (123) 456-7890",
    },
    {
        Arrow: "/assets/icons/ArrowIcone.png",
        Icone: "/assets/icons/ContactIcon3.svg",
        advantage: "Main Headquarters",
    },
    {
        Arrow: "/assets/icons/ArrowIcone.png",
        Icone: "/assets/icons/ContactIcon4.svg",
        advantage: "Instagram",
    },
];

const Contact = () => {
    return (
        <div>
            <PageHero
                title={"Get in Touch with Estatein"}
                description={"Welcome to Estatein's Contact Us page. We're here to assist you with any inquiries, requests, or feedback you may have. Whether you're looking to buy or sell a property, explore investment opportunities, or simply want to connect, we're just a message away. Reach out to us, and let's start a conversation."}
                className="2xl:h-450 xl:h-345 h-257" />
            <div className="Site-Advatages-Container mt-40 mb-60] mx-13 md:mx-0 md:mt-20 flex flex-wrap gap-10 md:gap-20p items-center justify-start w-[calc(100%-26px)] md:w-full bg-grey-08 light:bg-white-99 p-4 md:p-20 rounded-xl md:rounded-none shadow-[0px_0px_0px_4px_rgba(25,25,25,1)] md:shadow-[0px_0px_0px_10px_rgba(25,25,25,1)] light:shadow-[0px_0px_0px_4px_#F2F2F2] md:light:shadow-[0px_0px_0px_10px_#F2F2F2]">
                {cardAdvantagesData.map((item, index) => (
                    <div
                        key={index}
                        className="w-[calc(50%-5px)] md:w-[calc(25%-15px)] h-188 bg-grey-10 light:bg-white-95 rounded-xl"
                    >
                        <CardAdvantages
                            Arrow={item.Arrow}
                            Icone={item.Icone}
                            advantage={item.advantage}
                        />
                    </div>
                ))}
            </div>
            <Form />
            <Location />
            <ExploreEstatein />
        </div>
    )
}

export default Contact