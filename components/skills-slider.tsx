import React from "react";
import "@/app/slider-styles.css";
import {useKeenSlider} from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import skills from "@/app/skills/skills.json";
import Image from "next/image";

const animation = {duration: 10000, easing: (t: number) => t};

export default function SkillsSlider() {
    const [sliderRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        renderMode: "performance",
        drag: false,
        slides: {
            perView: 8,
        },
        created(s) {
            s.moveToIdx(5, true, animation);
        },
        updated(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation);
        },
        animationEnded(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation);
        },
    });

    const allIcons = Object.entries(skills).flatMap(([category, icons]) =>
        icons.map(({icon, description}) => ({icon, description, category}))
    );
    return (
        <section className="relative w-full h-full bg-white">
            <div className="relative w-full h-full container mx-auto">
                <div className="absolute w-32 from-white z-50 to-transparent bg-gradient-to-r left-0 top-0 h-full"></div>
                <div ref={sliderRef} className="keen-slider container mx-auto">
                    {allIcons.slice(0, 43).map(({icon, description, category}, index) => (
                        <div
                            key={index}
                            className="!max-h-40 relative keen-slider__slide number-slide group"
                        >
                            <div
                                className="!text-sm z-40 p-1 absolute bg-slate-700/80 text-white border rounded-md -translate-y-12 scale-0 group-hover:scale-100 transition-transform duration-700 origin-center"
                            >
                                {description}
                            </div>
                            <Image
                                width={40}
                                height={40}
                                src={`/assets/icons/${category}/${icon}`}
                                alt={description}
                                className="mx-auto"
                            />
                        </div>
                    ))}
                </div>
                <div className="absolute w-32 from-transparent z-50 to-white bg-gradient-to-r right-0 top-0 h-full"></div>
            </div>
        </section>
    );
}
