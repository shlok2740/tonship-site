import {Goal, MonitorSmartphone, ShieldCheck} from "lucide-react";
import {FeatureCard} from "@/components/feature-card";

const features = [
    {
        title: "Blockchain Integration",
        description: "Earn blockchain-based rewards like tokens and NFTs for your achievements, securely stored on the TON blockchain.",
        icon: <MonitorSmartphone className={"size-7"} />,
    },
    {
        title: "Immersive Gameplay",
        description: "Experience dynamic lighting and sound effects with an adaptive difficulty curve as you progress through your space escape journey.",
        icon: <Goal className={"size-7"} />,
    },
    {
        title: "Secure Rewards System",
        description: "All in-game tokens and NFTs are handled by TON smart contracts, ensuring secure and transparent interactions.",
        icon: <ShieldCheck className={"size-7"} />,
    },
]

export function FeaturesSection() {
    return (
        <>
            <div className={"bg-black text-white py-[72px] sm:py-24"}>
                <div className={"container"}>
                    <h1 className={"text-5xl sm:text-6xl font-bold text-center tracking-tighter pt-6"}>Everything you need</h1>
                    <div className={"max-w-3xl mx-auto"}>
                        <p className={"text-center mt-5 text-xl text-white/70"}>
                            Enjoy the best features of our game app, including blockchain integration, immersive gameplay, and secure rewards system.
                        </p>
                    </div>
                    <div className={"flex items-center justify-center mt-16"}>
                        <div className={"grid sm:grid-cols-3 gap-5 max-w-5xl"}>
                            {features.map((features, index) => (
                                <FeatureCard
                                    key={index} title={features.title}
                                    description={features.description} icon={features.icon}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
