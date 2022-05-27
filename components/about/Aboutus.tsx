import React from 'react'
import Image from 'next/image';
import { urlFor } from '../../sanity';
import { Section, Div, Tag, H2, Description } from '../../shared';
import { TAbout } from '../../types/typings';

export type TAboutProps = {
  about: [TAbout];
}

function Aboutus({ about }: TAboutProps) {
  return (
    <Section>
      <Div>
        <div className={`flex flex-col md:flex-row md:justify-between items-center`}>
            <img 
              className={`w-full mb-4 md:w-[45%]`} 
              src={urlFor(about[0].image.asset._ref).url()} alt={`about`}
            />
            <div className={`w-full md:w-[45%] mt-4`}>
              <Tag text={about[0].tag} />
              <H2  className={`mt-4`} text={about[0].title} />
              <Description className={`max-w-[350px] mt-2`} text={about[0].description} />
              <div className={`flex justify-between items-center w-fit mt-4`}>
                <i className={`text-flamingo text-2xl ri-arrow-right-circle-fill`}></i>
                <p className={`text-xs font-quinta font-medium ml-2`}>READ MORE</p>
              </div>
            </div>
        </div>
      </Div>
    </Section>
  )
}

export default Aboutus