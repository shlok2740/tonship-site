import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import {Separator} from "@/components/ui/separator";


const FAQ = [
    {
        question: "What blockchain does it run on?",
        answer:
            "We uses TON blockchain as our frontier for our game. This blockchain is designed to be fast, secure, and energy-efficient, making it the perfect choice for our game.",
    },
    {
        question: "How much does it cost?",
        answer:
            "Its free forever, but you can get our $SHIP coins to access additional features.",
    },
];

export function FAQsSection() {
    return (
        <>
            <div className={"bg-black text-white bg-gradient-to-b from-[#5D2CA8] to-black py-[72px] sm:py-24"}>
                <div className="container">
                    <h2 className={"text-5xl font-bold tracking-tight text-center"}>Frequently Asked Questions</h2>
                    <div className={"mt-12 max-w-4xl mx-auto"}>
                        <Separator/>
                        <Accordion type="single" collapsible>
                            {FAQ.map((item, index) => (
                                <AccordionItem key={index} value={item.question}>
                                    <AccordionTrigger className={"text-md lg:text-lg font-bold"}>{item.question}</AccordionTrigger>
                                    <AccordionContent className={"text-sm"}>
                                        {item.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </>
    )
}
