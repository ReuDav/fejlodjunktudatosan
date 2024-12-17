"use client"

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import CallToAction from "@/../components/call-to-action"

const SkillsSlider = dynamic(() => import("../../components/skills-slider"), {
  loading: () => <div>...</div>
})
const ProjectCard = dynamic(() => import("../../components/project-cards"))
const ProcessCarousel = dynamic(() => import("../../components/process-carousel"))
const SkillList = dynamic(() => import("../../components/skills-list"))
const ExperienceList = dynamic(() => import("../../components/experience-list"))

export default function Home() {
    return (
        <main className="min-h-screen">
            <CallToAction/>
            
            <Suspense fallback={<div>...</div>}>
                <SkillsSlider/>
            </Suspense>
            
            <Suspense fallback={<div>...</div>}>
                <ExperienceList />
            </Suspense>
            
            <Suspense fallback={<div>...</div>}>
                <ProjectCard/>
            </Suspense>
            
            <Suspense fallback={<div>...</div>}>
                <ProcessCarousel/>
            </Suspense>
            
            <Suspense fallback={<div>...</div>}>
                <SkillList skills={[
                    "Frontend fejlesztés",
                    "Backend fejlesztés",
                    "UI dizájn",
                    "UX tervezés",
                    "Tesztelés",
                    "Mentorálás",
                    "Tanítás",
                    "Ügyfél-orientált kommunikáció"
                ]} />
            </Suspense>
        </main>
    )
}