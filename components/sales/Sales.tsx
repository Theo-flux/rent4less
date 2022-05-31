import React from 'react';
import Image from 'next/image';
import { urlFor } from '../../sanity';
import { Div, Section } from '../../shared'
import { TSales } from '../../types/typings'

interface ISalesProps {
    sales: [TSales];
}

type TSalesCardProps = {
    sale: TSales;
    key: number;
}

const SalesCard = ({sale}: TSalesCardProps) => {
    const {image, title, tag} = sale;
    return(
        <div
            className={`w-full mx-auto rounded-lg h-[150px] md:h-[200px]`} 
            style={{
                backgroundImage: `url('${urlFor(image.asset._ref).url()}')`,
                backgroundPosition: `center`,
                backgroundRepeat: `no-repeat`,
                backgroundBlendMode: `multiply`,
                backgroundColor: `rgba(0, 0, 0, 0.8)`
            }}
        >
            <div className={`p-8`}>
                <h4 className={`text-white font-quinta font-semibold text-xl max-w-[200px]`}>{title}</h4>

                <div className={`flex justify-between items-center w-fit mt-4 md:mt-8`}>
                    <i className={`text-xl text-flamingo ri-arrow-right-circle-fill`}></i>
                    <p className={`text-white ml-2`}>{tag}</p>
                </div>
            </div>
        </div>
    )
}

function Sales({sales}: ISalesProps) {
          
    return (
        <Section className=''>
            <Div>
                <div className={`w-full mx-auto max-w-4xl`}>
                    <div className={`grid grid-cols-1 md:grid-cols-2 gap-4`}>
                        {
                            sales.map((sale, index) => {
                                return(
                                    <SalesCard key={index} sale={sale} />
                                )
                            })
                        }
                    </div>
                </div>
            </Div>
        </Section>
    )
}

export default Sales;