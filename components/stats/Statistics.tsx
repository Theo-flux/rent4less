import React from 'react';
import { urlFor } from '../../sanity';
import { Section, Div, Description, H2 } from '../../shared';
import { TStats } from '../../types/typings';

interface IStatsprops {
  stats: [TStats]
};


interface IStatsPodprops {
  stat: TStats;
  key: number;
};

const StatPod = ({stat}: IStatsPodprops) => {
  return(
    <div className={`flex flex-col justify-center items-center`}>
      <figure className={`bg-[#FFEDE7] p-4 rounded-xl w-fit mb-4`}>
        <img src={urlFor(stat.image.asset._ref).url()} alt="icon"/>
      </figure>

      <H2 className={``} text={`${stat.figure}+`} />
      <Description className={``} text={stat.tag} />
    </div>
  )
}

function Statistics({stats}: IStatsprops) {

  return (
    <Section>
      <Div>
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8`}>
          {
            stats.map((stat, index) => (
              <StatPod key={index} stat={stat}/>
            ))
          }
        </div>
      </Div>
    </Section>
  )
}

export default Statistics;