import React from 'react'
import Hero from './Hero/Hero'
import Skills from './Skills/Skills'
import Projects from './Projects.tsx/Projects'
import Educations from './Educations/Educations'


const Sections = () => {
  return (
    <main className='flex flex-col gap-[142px] w-full md:max-w-screen-lg pt-[236px] md:pt-60 mx-auto'>
        <Hero/>
        <Skills/>
        <Projects />
        <Educations />
    </main>
  )
}

export default Sections