"use client"

import CallToAction from "@/../components/call-to-action";
import SkillsSlider from "../../components/skills-slider";
import ProjectCard from "../../components/project-cards";
import ProcessCarousel from "../../components/process-carousel";
import SkillList from "../../components/skills-list";
import ExperienceList from "../../components/experience-list";

export default function Home() {
    return (
        <main className="min-h-screen">
            <CallToAction/>
            <SkillsSlider/>
            <ExperienceList />
            <ProjectCard/>
            <ProcessCarousel/>
            <SkillList skills={["Frontend fejlesztés", "Backend fejlesztés", "UI dizájn", "UX tervezés", "Tesztelés", "Mentorálás", "Tanítás", "Ügyfél-orientált kommunikáció"]} />
        </main>
    );
}
