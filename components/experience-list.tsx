export default function ExperienceList() {
    return (<section className="py-20 container mx-auto px-4" id="Experience">
        <h2 className="text-[36px] leading-[1.4em]">Tapasztalat</h2>
        <ul className="space-y-6 my-6">
            <li>
                <div className="flex items-center justify-between">
                    <h3 className="md:text-[26px] text-[20px] leading-[1.6em] max-w-fit">Junior Full-Stack Developer</h3>
                    <div className="md:text-[18px] text-[16px] leading-[1.4em] text-[#00000080] w-full py-2 flex flex-col text-right">
                        <p>Full remote</p>
                        <p>2024 Január - 2024 December</p>
                    </div>
                </div>
                <hr/>
            </li>
            <li>
                <div className="flex items-center justify-between">
                    <h3 className="md:text-[26px] text-[20px] leading-[1.6em] max-w-fit">Mobilapplikáció Fejlesztés Tanár</h3>
                    <div className="md:text-[18px] text-[16px] leading-[1.4em] text-[#00000080] w-full py-2 flex flex-col text-right">
                        <p>On-site</p>
                        <p>2024 Szeptember - </p>
                    </div>
                </div>
                <hr/>
            </li>
            <li>
                <div className="flex items-center justify-between">
                    <h3 className="md:text-[26px] text-[20px] leading-[1.6em] max-w-fit">Junior Frontend Developer (Freelancer)</h3>
                    <div className="md:text-[18px] text-[16px] leading-[1.4em] text-[#00000080] w-full py-2 flex flex-col text-right">
                        <p>Full Remote (Project based)</p>
                        <p>2022 Szeptember - 2024 Január</p>
                    </div>
                </div>
                <hr/>
            </li>
        </ul>
    </section>)
}