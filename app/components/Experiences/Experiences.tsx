import React from 'react'
import SectionContainer from '../Section/SectionContainer'
import SectionHeader from '../Section/SectionHeader'
import experiences from '@/data/experiences.json'
import Experience from './Experience'
import Image from 'next/image'

const Experiences = () => {
  return (
    <SectionContainer id='experience'>
        <div className='section-contents mb-[66px] md:mb-[43px] md:mx-[64px]'>
            <SectionHeader 
                plainText='💼 My prior'
                highlightText='Work Experience'
            />
            <div className='w-full p-6 md:px-[52px] flex flex-col gap-5'>
                {experiences.map((experience, id) => (
                    <Experience 
                        key={id}
                        id={id}
                        image={experience.image}
                        company={experience.company}
                        role={experience.role}
                        description={experience.description}
                        dates={experience.dates}
                    />
                ))}
            </div>

        </div>
        <div className='circle-icon w-14 h-14 left-1.5 bottom-0 md:left-[90px] -z-10'>
            <Image 
                src='/electricity_icon.svg'
                alt='Electricity icon'
                width={23}
                height={23}
            />

        </div>
    </SectionContainer>
)
}

export default Experiences