import React, { useRef } from "react";
import "@/app/slider-styles.css";
import { useKeenSlider, KeenSliderInstance } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const ProcessSlider = () => {
    const animationSpeed = useRef(45000); // Default animation duration
    const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
        loop: true,
        drag: false,
        slides: {
            perView: 2,
            spacing: 30,
        },
        created(s) {
            startAnimation(s, animationSpeed.current);
        },
        animationEnded(s) {
            startAnimation(s, animationSpeed.current);
        },
    });

    const startAnimation = (s: KeenSliderInstance, duration: number) => {
        if (!s.track) return;
        s.animator.start([
            {
                distance: s.track.details.length,
                duration,
                easing: (t: number) => t,
            },
        ]);
    };

    const handleMouseEnter = () => {
        if (!slider.current) return;
        animationSpeed.current = 45000; // Faster speed on hover
        startAnimation(slider.current, animationSpeed.current);
    };

    const handleMouseLeave = () => {
        if (!slider.current) return;
        animationSpeed.current = 25000; // Reset to default speed
        startAnimation(slider.current, animationSpeed.current);
    };

    const allSteps = [
        {
            title: "Felfedezés",
            description:
                "Az első lépés, hogy alaposan megértsük az igényeidet és céljaidat. Ötletelünk, tervezünk, és együtt lefektetjük a projekt alapjait, hogy minden zökkenőmentesen induljon.",
        },
        {
            title: "Meghatározás",
            description:
                "Még több részletet gyűjtünk össze a célközönségedről, a piaci lehetőségekről és az irányelvekről. Közvetlen visszajelzések alapján formáljuk az elképzeléseket, hogy azok a te világodhoz passzoljanak.",
        },
        {
            title: "Fejlesztés",
            description:
                "Elkezdjük megalkotni az élményt! Tesztelünk, finomítunk, és közben folyamatosan figyeljük, hogyan alakíthatjuk úgy a projektet, hogy az a felhasználóid számára a lehető legjobb legyen.",
        },
        {
            title: "Kivitelezés",
            description:
                "Az utolsó simítások: összerakjuk a design mintázatokat, teszteljük a funkciókat, és veled együtt dolgozunk a végső megoldáson, hogy minden tökéletes legyen.",
        },
    ];

    return (
        <section className="pb-20">
            <div className="container mx-auto">
                <div>
                    <h2 className="text-3xl my-4 leading-[1.4em]">Folyamat</h2>
                    <p className="text-[24px] text-[#00000080] font-normal lg:w-3/4 leading-[1.4em]">
                        Ötlettől, tervezéstől a megvalósításig. A legújabb keretrendszerek és jól bevált módszerek
                        ötvözetével készül el minden projekt – a sikeres online jelenléted érdekében.
                    </p>
                </div>
            </div>
            <div
                ref={sliderRef}
                className="keen-slider my-8"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {allSteps.map(({ title, description }, index) => (
                    <div key={index} className="space-y-4 p-8 bg-[#CCE7F8] rounded-2xl relative keen-slider__slide">
                        <div className="relative z-20">
                            <div>
                                <h3 className="text-xl mb-2 font-bold text-[#3f6c88]">{title}</h3>
                            </div>
                            <div className="text-md mb-10 text-[#00000080]">{description}</div>
                        </div>
                        <div className="absolute !font-thin text-gray-800/10 z-10 -bottom-6 text-8xl">0{index + 1}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProcessSlider;
