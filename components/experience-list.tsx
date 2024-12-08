export default function ExperienceList() {
    return (<section className="py-20 container mx-auto">
        <h2 className="text-[36px] leading-[1.4em]">Tapasztalat</h2>
        <ul className="space-y-6 my-6">
            <li>
                <div className="flex items-center justify-between">
                    <h3 className="text-[26px] leading-[1.6em]">Junior Full-Stack Developer</h3>
                    <div className="text-[18px] leading-[1.4em] text-[#00000080] py-2 flex flex-col text-right">
                        <p>Full remote</p>
                        <p>2024 Január - 2024 December</p>
                    </div>
                </div>
                <hr/>
            </li>
            <li>
                <div className="flex items-center justify-between">
                    <h3 className="text-[26px] leading-[1.6em]">Mobilapplikáció Fejlesztés Tanár</h3>
                    <div className="text-[18px] leading-[1.4em] text-[#00000080] py-2 flex flex-col text-right">
                        <p>On-site</p>
                        <p>2024 Szeptember - </p>
                    </div>
                </div>
                <hr/>
            </li>
            <li>
                <div className="flex items-center justify-between">
                    <h3 className="text-[26px] leading-[1.6em]">Junior Frontend Developer (Freelancer)</h3>
                    <div className="text-[18px] leading-[1.4em] text-[#00000080] py-2 flex flex-col text-right">
                        <p>Full Remote</p>
                        <p>2022 Szeptember - 2024 Január</p>
                    </div>
                </div>
                <hr/>
            </li>
        </ul>
    </section>)
}