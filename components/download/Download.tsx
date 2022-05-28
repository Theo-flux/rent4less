import React from 'react';
import Image from 'next/image';
import { urlFor } from '../../sanity';
import { Section, Div, Tag, H2 } from '../../shared/';
import { TDownload } from '../../types/typings';
import playstore from '../../public/playstore.png';
import applestore from '../../public/apple.png';

interface IDownloadProps {
    download: [TDownload]
}

const downloadData = [
    {
        id: 0,
        name: 'Google Play',
        icon: playstore
    },

    {
        id: 0,
        name: 'Apple Store',
        icon: applestore
    }
]


function Download({download}: IDownloadProps) {

    return (
        <Section style={{background: `linear-gradient(90deg, rgba(255, 237, 231, 0) 0%, #FFEDE7 100%)`}}>
            <div className={`w-11/12 py-24 mx-auto max-w-6xl`}>
                <div 
                    className={`w-full mx-auto rounded-lg`} 
                    style={{
                        backgroundImage: `url('${urlFor(download[0].image.asset._ref).url()}')`,
                        width: '100%',
                        height: '300px',
                        backgroundPosition: `cover`,
                        backgroundRepeat: `no-repeat`,
                        backgroundBlendMode: `overlay`,
                        backgroundColor: `#00000095`,
                    }}
                >
                    <div className={`h-full p-4 md:px-12`}>
                        

                        <div className={`flex flex-col md:flex-row justify-between items-center w-full h-full`}>
                            <div className={``}>
                                <Tag className={`text-center md:text-left`} text={download[0].tag}/>
                                <H2 textColor={`text-white`} className={`mt-4 text-white text-center md:text-left`} text={download[0].title} />
                            </div>
                            
                            <div className={`w-fit flex flex-col md:flex-row justify-between md:items-center`}>
                                {
                                    downloadData.map((data, index) => {
                                        return(
                                            <div key={index} className={`rounded-md flex justify-between items-center bg-white px-4 py-1 first:mb-4 md:first:mr-4 md:first:mb-0`}>
                                                <Image src={data.icon} alt="google"/>
                                                <span className={`font-quinta md:ml-4`}>
                                                    <small className={`text-[8px] md:text-[10px]`}>GET IT ON</small>
                                                    <p className={`font-bold text-sm md:text-base`}>{data.name}</p>
                                                </span>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Download;