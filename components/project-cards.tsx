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
            backgroundColor: "bg-[#CDF9C8]",
            title: "Vorort Autopflege",
            link: "https://voa-uat.topin.hu",
            description: "Német autómosó vállalkozás számára készült weboldal, amely adminisztrációs felületet és többnyelvű időpontfoglaló rendszert tartalmaz. Egyedi felhasználói felületet és többlépcsős időpontfoglalási űrlapot kínál, három nyelven: német, magyar és angol.",
            imagePath: "/assets/images/projects/voa.webp",
            buttonText: "Megtekintem a honlapot",
            technologies: ["Next.js", "Tailwind CSS", "Figma", "Canva", "Laravel", "REST API", "JSON"],
        },
        {
            backgroundColor: "bg-[#CCE7F8]",
            title: "Animal Trust",
            link: "https://animaltrust.uk.org",
            description: "Nagy-Britanniában működő, 12 gyarmatot lefedő non-profit szervezet weboldala. A platform dinamikusan létrehozható oldalakkal és blogbejegyzésekkel, valamint online fizetési lehetőséggel támogatja a havi előfizetési csomagjukat, amelyet már több mint 130 ezer felhasználó választott.",
            imagePath: "/assets/images/projects/animaltrust.webp",
            buttonText: "Megtekintem a honlapot",
            technologies: ["Next.js", "Tailwind CSS", "Figma", "TypeScript", "Strapi", "REST API", "JSON"],
        },
        {
            backgroundColor: "bg-[#B79FBC]",
            title: "HelloWine",
            link: "https://hellowine.com",
            description: "Magyarország, Ausztria és Szlovákia legnagyobb, borokra, borkóstolókra és pincészetekre épülő vállalati szintű weboldala. A platform többnyelvű, adminisztrációs felületet kínál, amely külön jogosultságokat biztosít borászok, pincészetek és felhasználók számára. Emellett lehetőséget nyújt gazdagon testreszabható blogbejegyzések létrehozására. A fejlesztést Pair Programming módszerben végeztem egy kollégámmal, szorosan együttműködve a UI/UX dizájnerekkel.",
            imagePath: "/assets/images/projects/hellowine.webp",
            buttonText: "Megtekintem a honlapot",
            technologies: ["Angular", "BootStrap", "TypeScript", "Figma", "Laravel", "REST API", "JSON", "Docker"],
        },
        {
            backgroundColor: "bg-[#DDEED4]",
            title: "Havalda Construct",
            link: "https://shopl.hu",
            description: "Egy magyar generálkivitelező és építőipari projektekre specializálódott 12. kerületi cég többnyelvű weboldala. A honlap bloggal, referenciagyűjteménnyel és kapcsolatfelvételi űrlappal egészül ki.",
            imagePath: "/assets/images/projects/havalda.webp",
            buttonText: "Megtekintem a honlapot",
            technologies: ["Next.js", "Strapi", "Tailwind CSS", "TypeScript", "REST API", "JSON", "Figma"],
        },
        {
            backgroundColor: "bg-[#FAE5D1]",
            title: "Shopl",
            link: "https://shopl.hu",
            description: "Egy magyar szállítmányozási cég részére készített kezdőlap dizájn. Az oldal segíti az ajánlatkérést és megkönnyíti a felhasználók számára olyan termékek beszerzését, amelyeket gyártók nem szállítanak Magyarországra a távolság miatt.",
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
