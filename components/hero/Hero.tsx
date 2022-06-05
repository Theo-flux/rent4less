import React from 'react'
import { useMediaQuery } from 'react-responsive';
import {TJumbotron} from "../../types/typings";
import {Section, Div, Title, Tag, Description} from "../../shared";
import bg from "../../public/background.png";

type THeroProps = {
    jumbotron: [TJumbotron]
}



function Hero({jumbotron}: THeroProps) {
    const isMobile = useMediaQuery({minWidth: 767});
    return (
        <Section
            className={``}
            style = {{
                // background: `url(${isMobile && bg.src})`,
                width: '100%',
                height: '100%',
                backgroundPosition: `center`,
                backgroundRepeat: `no-repeat`,
            }}
        >
            <div className={`w-4/5 mx-auto max-w-5xl`}>
                <div className={`h-[60vh] lg:h-[100vh] flex flex-col justify-center items-start`}>
                        <Tag className={`mb-2`} text={jumbotron[0].tag}/>
                        <div className={`max-w-[600px] h-fit mb-4`}>
                            <Title className={``} text={jumbotron[0].title} />
                            <div className={`w-[150px] h-[10px] lg:w-[288px] lg:h-[15px] bg-flamingo rounded-full`}></div>
                        </div>
                        <Description className={`max-w-[400px]`} text={jumbotron[0].description} />
                </div>
            </div>
        </Section>
    )
}

export default Hero