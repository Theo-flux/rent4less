import React from 'react';
import {Section, Div, H2, Description } from '../../shared';
import {steps, TStep} from './data';

interface TStepCardProps {
    step: TStep
}

const StepCard = ({step}: TStepCardProps) => {
    return(
        <div className={`relative overflow-hidden ${step.id === 0 ? "bg-flamingo" : "bg-white"} rounded-md`}>
            
            <p className={`font-poppins ${step.id === 0 ? "stroked-text-01 text-flamingo" : "stroked-text text-white"} text-9xl absolute left-[-60px] top-[-15px]`}>{step.no}</p>

            <div className={`p-8 flex flex-col`}>
                <div className={`self-end flex items-center justify-center w-[50px] h-[50px] rounded-full ${step.id === 0 ? "bg-[#ffffff20]" : "bg-[#FFEDE7]"}`}>
                    <i className={`${step.id === 0 ? "text-white" : "text-flamingo"} ${step.title_icon}`}></i>
                </div>
                <div className={`mt-12 mb-8`}>
                    <p className={`${step.id === 0 ? "text-[#F0F0F0]" : "text-black"} font-quinta font-bold text-lg`}>{step.title}</p>
                    <p className={`${step.id === 0 ? "text-[#F0F0F0]" : "text-black"} font-quinta font-light text-sm mt-4`}>{step.text}</p>
                </div>
                <div className={`flex justify-between items-center w-fit cursor-pointer`}>
                    <i className={`${step.id === 0 ? "text-[#F0F0F0]" : "text-flamingo"} text-2xl mr-2 ${step.icon}`}></i>
                    <p className={`${step.id === 0 ? "text-[#F0F0F0]" : "text-flamingo"} font-quinta font-bold text-xs tracking-widest`}>SEARCH PROPERTY</p>
                </div>
            </div>
            
        </div>
    )
}

function Steps() {
  return (
    <Section className={``} style={{background: `linear-gradient(90deg, rgba(255, 237, 231, 0) 0%, #FFEDE7 100%)`}}>
        <Div>
            <div className={``}>
                <div className={`flex flex-col justify-center items-center mb-12`}>
                    <H2 className={`text-center mb-4`} text={`Get Your Apartment in 3 Steps`}/>
                    <Description className={`text-center text-xs w-11/12 mx-auto max-w-[550px]`} text={`Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam`} />
                </div>

                <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8`}>
                    {
                        steps.map((step: TStep, index: number) => {
                            return(
                                <StepCard key={index} step={step}/>
                            )
                        })
                    }
                </div>
            </div>
        </Div>
    </Section>
  )
}

export default Steps