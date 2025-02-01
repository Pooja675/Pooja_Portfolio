import React from 'react'
import SectionContainer from '../Section/SectionContainer'
import SectionHeader from '../Section/SectionHeader'
import educations from "@/data/educations.json"
import Education from './Education'


const Educations = () => {
  return (
    <SectionContainer id='educations'>
        <div className='section-contents'>
            <SectionHeader 
                plainText='Explore My Learning Journey'
                highlightText='Education'
            />
            <div className='w-full overflow-x-clip'>
                <div className='w-[1758px] sm:w-[2754px] flex items-stretch justify-start gap-[23px] pr-[23px] overflow-x-clip animate-scroll'>
                    {[...educations, ...educations].map((education, id) => (
                        <Education 
                            key={id}
                            image={education.image}
                            course={education.course}
                            name={education.name}
                        />
                    ))}
                </div>
            </div>
        </div>

    </SectionContainer>
)
}

export default Educations