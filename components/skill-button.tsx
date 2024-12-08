interface SkillButtonProps {
    skill: string;
}
export default function SkillButton({skill} : SkillButtonProps) {
    return (<div className="bg-[#3f6c88] rounded-xl text-slate-50 p-2">
        {skill}
    </div>)
}