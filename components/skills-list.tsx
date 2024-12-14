import SkillButton from "@/../components/skill-button";

interface SkillsListProps {
    skills: string[];
}
export default function SkillList({skills} : SkillsListProps) {
    return <section className="container mx-auto px-4" id="Skills">
        <h2 className="text-3xl my-8">Készségeim</h2>
        <div className="py-12 px-8 bg-[#d1eafa] rounded-xl">
            <div className="flex flex-wrap gap-4">
                {skills.map((skill, index) => <SkillButton key={index} skill={skill}/>)}
            </div>
        </div>
    </section>
}