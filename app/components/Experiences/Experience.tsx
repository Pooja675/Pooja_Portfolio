import Image from "next/image";
import React from "react";
import Reveal from "../Reveal";

type Props = {
  id: number;
  image: string;
  company: string;
  role: string;
  description: string;
  dates: string;
};

const Experience = ({
  id,
  image,
  company,
  role,
  description,
  dates,
}: Props) => {
  return (
    <Reveal initialX={id % 2 === 0 ? -60 : 60} duration={0.5 * id}>
    <div className=" card flex flex-col items-stretch w-full max-w-screen-lg px-6 py-[27px] md:px-[33px] gap-3">
      <div className="flex flex-col items-start md:flex-row gap-1 md:gap-0 md:justify-between ">
        <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
          <Image
            src={image}
            alt={`company image for ${company}`}
            width={22}
            height={22}
            style={{ width: "auto", height: "auto" }} 
          />
          <h3 className="text-lg font-medium">{company}</h3>
          
        </div>
        <p className="text-base md:text-lg font-medium">{role}</p>
      </div>

      <p className="text-sm md:text-base">{description}</p>

      <p className="text-sm/1 md:text-base">{dates}</p>
    </div>
    </Reveal>
  );
};

export default Experience;
