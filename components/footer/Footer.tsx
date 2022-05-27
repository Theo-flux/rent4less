import React from 'react';
import Image from 'next/image';
import { Section, Div, Description } from '../../shared';
import {TFooter, footerData} from './footerData';
import logo from '../../public/rent4less-logo.png'

function Footer() {
  return (
    <Section className={`px-4 py-24`}>
        <div className={`bg-[#000000] rounded-md`}>
            <div className={`p-4 md:p-8`}>
                <div className={`grid grid-cols-1 md:grid-cols-4 gap-8`}>
                    <div className={``}>
                        <figure className={`w-fit mb-4`}>
                            <Image src={logo} className={`w-[20px] md:w-[50%]`} alt="logo" />
                        </figure>
                        <Description text={`Rent4Less by Alpha Mead is a rental scheme designed to provide a flexible and convenient option for middle income Nigerians to rent homes. With this scheme, you can now`} />
                    </div>

                    {
                        footerData.map((data, index) => {
                            return(
                                <div key={index} className={`md:mx-auto border-flamingo`}>
                                    <h3 className={`text-white mb-4 font-quinta font-medium`}>{data.name}</h3>
                                    {
                                        data.items.map((el: string, index) => {
                                            return(
                                                <Description className={`mb-4 cursor-pointer`} key={index} text={el}/>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </Section>
  )
}

export default Footer