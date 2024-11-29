import Linkedin from "../assets/icons/linkedin.svg"
import X from "../assets/icons/x-social.svg"

export function SiteFooter() {
    return (
        <>
            <footer className="py-6 md:px-8 md:py-0 border-t-2 bg-black">
                <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                    <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
                        ©️ 2024 TONShip, All rights reserved. Made with ❤️ by  <a
                            href={"https://github.com/shlok2740"}
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium underline underline-offset-4"
                        >
                            Shlok Kumar                    </a>
                    </p>
                    <div>
                        <ul className={"flex justify-center gap-2.5 text-muted-foreground"}>
                            <li className={"hover:text-white cursor-pointer"}><a href={"https://x.com/sk2740"} target={"_blank"}> <X /> </a></li>
                            <li className={"hover:text-white cursor-pointer"}><a href={"https://linkedin.com/in/sk2740"} target={"_blank"}> <Linkedin /> </a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}
