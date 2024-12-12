import Canvas from "./canvas";
import Image from "next/image";
import {ArrowDownOnSquareStackIcon, PhoneIcon} from "@heroicons/react/24/solid";
import Link from "next/link";

export default function CallToAction() {
    return (<section className="relative w-full h-screen top-20">
        <div id="Overlay" className="absolute z-40 inset-0 max-h-[calc(100vh_-_80px)] flex flex-col items-center space-y-6 justify-center">
            <div className="relative w-full flex flex-col items-center">
                <Image src="/assets/images/David.webp" alt="David" width={125} height={125}
                       className="animate-fade-in-up aspect-square rounded-full object-cover object-center"/>
                <div style={{ animationDelay: "100ms" }} className="animate-fade-in-up opacity-0 inline-block max-w-fit absolute -bottom-6 w-full bg-white rounded-md p-2">
                Reucov Dávid
                </div>
            </div>
            <div className="text-center">
                <h1 style={{ animationDelay: "200ms" }} className="animate-fade-in-up opacity-0 md:text-[36px] text-[24px] md:leading-[36px] leading-[24px] mt-4">Junior Full Stack Developer</h1>
                <p style={{ animationDelay: "300ms" }} className="animate-fade-in-up opacity-0 delay-150 md:text-[24px] text-[20px] md:leading-[36px] leading-[32px] mt-4">Készen állok mindent megtenni, a Te honlapodért. <br /> Pontossággal, precízitással, professzionálisan.</p>
                <div className="flex items-center gap-6 justify-center mt-6">
                    <button type="button" style={{ animationDelay: "400ms" }} className="animate-fade-in-up opacity-0 delay-300 md:text-[20px] text-[16px] px-6 py-2 rounded-full min-w-20 bg-slate-900 text-slate-100 border"><Link className="flex items-center gap-2" href="https://reudav.pro" target="_blank">Önéletrajz <ArrowDownOnSquareStackIcon height={16} width={16} /></Link></button>
                    <button type="button" style={{ animationDelay: "500ms" }} className="animate-fade-in-up opacity-0 delay-[450ms] md:text-[20px] text-[16px] px-6 py-2 rounded-full min-w-20 bg-white border"><Link className="flex items-center gap-2" href="tel:+36203563564" target="_blank">Kapcsolat <PhoneIcon height={16} width={16} /></Link></button>
                </div>
            </div>
        </div>
        <Canvas/>

    </section>)
};