import Image from 'next/image'
import React from 'react'

type Props = {
    image:string,
    course: string,
    name:string
}

const Education = ({image, course, name}: Props) => {
  return (
    <div className='card flex flex-col gap-[33px] w-[250px] sm:min-w-[436px] px-[33px] py-[27px]'>
       <div className='flex flex-col gap-2 items-center'>
            <Image src={image} alt='Education logo' width={55} height={55}/>
            <div className='flex flex-col'>
                <p className='text-lg'>{course}</p>
                <p className='text-sm text-[#777]'>{name}</p>
            </div>
        </div> 
    </div>
  )
}

export default Education