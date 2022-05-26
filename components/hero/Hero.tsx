import React from 'react'
import { useMediaQuery } from 'react-responsive';
import {TJumbotron} from "../../types/typings";
import {Section, Div, Title, Tag, Description} from "../../shared";
import bg from "../../public/background.png";

interface IHeroProps {
    jumbotron: [TJumbotron]
}



function Hero({jumbotron}: IHeroProps) {
    const isMobile = useMediaQuery({minWidth: 767});
    return (
        <Section
            className={``}
            style = {{
                backgroundImage: `url(${isMobile && bg.src})`,
                width: '100%',
                height: '100%',
                backgroundPosition: `center`,
                backgroundRepeat: `no-repeat`,
                backgroundSize: ``,
            }}
        >
            <Div>
                <div className={`h-[100vh] flex flex-col justify-center items-start`}>
                        <Tag className={`mb-2`} text={jumbotron[0].tag}/>
                        <div className={`w-[550px] h-fit mb-8`}>
                            <Title className={``} text={jumbotron[0].title} />
                            <div className={`w-[288px] h-[15px] bg-flamingo rounded-full`}></div>
                        </div>
                        <Description className={`max-w-[400px]`} text={jumbotron[0].description} />
                </div>
            </Div>
        </Section>
    )
}

export default Hero