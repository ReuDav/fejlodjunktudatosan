import ProjectCardItem from "@/../components/project-card-item";

interface Project {
    title: string;
    backgroundColor: string;
    link: string;
    description: string;
    imagePath: string;
    buttonText: string;
    technologies: string[];
}

export default function ProjectCard() {
    const projects: Project[] = [
        {
            backgroundColor: "bg-[#DDEED4]",
            title: "Vorort Autopflege",
            link: "https://voa-uat.topin.hu",
            description: "Egy német autómosó cég honlapja, adminisztrációs felülettel, időpontfoglaló rendszerrel. Egyedi felhasználói felület tervezése és felhasználói élmény, többnyelvűség és az időpontfoglalás többlépéses űrlap kialakítása. (Német, Magyar, Angol)",
            imagePath: "/assets/images/projects/voa.webp",
            buttonText: "Megtekintem a honlapot",
            technologies: ["Next.js", "Tailwind CSS", "Figma", "Laravel", "REST API", "JSON"],
        },
        {
            backgroundColor: "bg-[#CCE7F8]",
            title: "Animal Trust",
            link: "https://animaltrust.uk.org",
            description: "Nagy-Britanniában egy 12 megyében megtalálható non-profit szervezet honlapja, dinamikusan létrehozható oldalakkal, blog bejegyzésekkel, online fizetési lehetőséggel integrálva egy általuk szolgáltatott havi csomagra, amelyre már 130 ezren előfizettek.",
            imagePath: "/assets/images/projects/animaltrust.webp",
            buttonText: "Megtekintem a honlapot",
            technologies: ["Next.js", "Tailwind CSS", "Figma", "TypeScript", "Strapi", "REST API", "JSON"],
        },
        {
            backgroundColor: "bg-[#DDEED4]",
            title: "Havalda Construct",
            link: "https://shopl.hu",
            description: "Magyar generálkivitelezéssel és egyéb építőipari projektekkel foglalkozó 12. kerületi cégnek készült többnyelvű, blog és referenciákkal kiegészített honlap, kapcsolat űrlappal kiegészítve.",
            imagePath: "/assets/images/projects/havalda.webp",
            buttonText: "Megtekintem a honlapot",
            technologies: ["Next.js", "Strapi", "Tailwind CSS", "TypeScript", "REST API", "JSON", "Figma"],
        },
        {
            backgroundColor: "bg-[#FAE5D1]",
            title: "Shopl",
            link: "https://shopl.hu",
            description: "Egy magyar szállítással foglalkozó cég megkérésére készített kezdőlap dizájn, amely segít ajánlatot kérni a cégtől, könnyebb módon juthatnak a felhasználok olyan termékekhez, amelyeket alapjáraton nem szállítanak a gyártók Magyarországra a távolságra való tekintettel.",
            imagePath: "/assets/images/projects/shopl.webp",
            buttonText: "Megtekintem a honlapot",
            technologies: ["HTML", "CSS", "Javascript", "Jquery", "Bootstrap", "Figma"],
        },
    ];

    return (
        <section>
            <div className="container min-h-[500px] w-full mx-auto py-20">
                {projects.map((project, index) => (
                    <ProjectCardItem
                        key={index}
                        title={project.title}
                        description={project.description}
                        imagePath={project.imagePath}
                        link={project.link}
                        buttonText={project.buttonText}
                        backgroundColor={project.backgroundColor}
                        technologies={project.technologies}
                    />
                ))}
            </div>
        </section>
    );
}
