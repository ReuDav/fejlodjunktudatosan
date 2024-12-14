import Image from "next/image";
import Link from "next/link";

type ProjectCardItemProps = {
    title: string;
    description: string;
    mobileDescription: string;
    imagePath: string;
    link: string;
    buttonText: string;
    backgroundColor: string;
    technologies: string[];
};

const ProjectCardItem: React.FC<ProjectCardItemProps> = ({
                                                             title,
                                                             description,
                                                             mobileDescription,
                                                             imagePath,
                                                             link,
                                                             buttonText,
                                                             backgroundColor,
                                                             technologies
                                                         }) => {
    return (
        <>
            <div id="card-1"
                 className={`sticky ${backgroundColor} rounded-3xl top-[20%] mx-auto container min-h-[360px] shadow-md flex items-center justify-center z-10`}>
                <div className="grid md:grid-cols-[2fr_1fr] gap-4 p-10">
                    <div className="flex flex-col gap-4 items-start">
                        <h1 className="md:text-[24px] text-[20px] leading-[1.4em]">{title}</h1>
                        <p className="md:block hidden md:text-[16px] leading-[1.6em] text-[#00000080] leading-[1.6em]">{description}</p>
                        <p className="md:hidden text-[#00000080] leading-[1.6em]">{mobileDescription}</p>
                        <button className="md:block hidden mt-auto bg-black py-2 px-3 rounded-2xl text-white"><Link target="_blank"
                                                                                                    href={link && link}>{buttonText || "Megtekintem a honlapot"}</Link>
                        </button>
                    </div>
                    <div>
                        <Image src={imagePath} alt={title} width={400} height={300}/>
                        <div className="flex flex-wrap gap-2 mt-4">
                            {technologies.map((technology, index) => (
                                <div key={index} className="p-1.5 text-[14px] bg-slate-950 text-slate-50 rounded-xl ">
                                    {technology}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="gap h-[100px]"></div>
        </>
    )
        ;
};

export default ProjectCardItem;
