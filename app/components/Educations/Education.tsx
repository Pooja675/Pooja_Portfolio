import Image from 'next/image'
import React from 'react'

type Props = {
    image:string,
    course: string,
    name:string
}

const Education = ({image, course, name}: Props) => {
  return (
    <div className='card flex flex-col gap-[33px] w-[250px] sm:min-w-[436px] px-[33px] py-[27px] hover:scale-105 duration-300 ease-in-out'>
       <div className='flex flex-col gap-2 items-center'>
            <Image src={image} alt='Education logo' width={60} height={60}/>
            <div className='flex flex-col justify-center'>
                <p className='text-xl'>{course}</p>
                <p className='text-lg text-[#777]'>{name}</p>
            </div>
        </div> 
    </div>
  )
}

export default Education