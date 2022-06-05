import React, { useRef } from 'react';
import Image from 'next/image';
import { urlFor } from '../../sanity';
import { Div, Section } from '../../shared';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';


// eslint-disable-next-line react/display-name
const NextBtn = React.forwardRef(({children, className}, ref) => {
    return(
        <button
           ref={ref}
           className={`bg-[#00000010] h-[40px] w-[40px] rounded-full flex justify-center items-center ${className}`}
        >
            {children}
        </button>
    )
});

// eslint-disable-next-line react/display-name
const PrevBtn = React.forwardRef(({children, className}, ref) => {
    return(
        <button
           ref={ref}
           className={`bg-[#00000010] h-[40px] w-[40px] rounded-full flex justify-center items-center ${className}`}
        >
            {children}
        </button>
    )
});


function Testimony({testimony}) {
    const nextRef = useRef(null);
    const prevRef = useRef(null);

    return (
        <Section>
            <Div>
                <div className={`relative`}>
                    
                    <Swiper
                        className={``}
                        slideToClickedSlide={true}
                        modules={[Navigation]}
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                        }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        {
                            testimony.map((test, index) => {
                                return(
                                    <SwiperSlide key={index}
                                        className={``}
                                    >
                                        <div className={`flex flex-col md:flex-row justify-between items-center`}>
                                            <img
                                                className={`w-full md:w-[45%]`} 
                                                src={urlFor(test.image.asset._ref).url()}
                                                alt='pic' 
                                            />

                                            <div className={`w-full md:w-[45%]`}>
                                                <div>
                                                    <h1 className={`text-sm md:text-md font-quinta
                                                    text-darkgray font-light tracking-wider`}>
                                                        <span className={`text-5xl md:text-7xl font-poppins text-darkgray flex justify-end items-end rotate-180 w-fit mb-2`}>{`"`}</span>
                                                        {test.description}.
                                                        <span className={`text-5xl md:text-7xl font-poppins text-darkgray flex justify-end mt-2`}>{`"`}</span>
                                                    </h1>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>

                    <div className={`w-fit flex justify-between items-center absolute bottom-[-30px] md:bottom-0 right-[37%] z-40`}>
                        <PrevBtn
                            ref={prevRef}
                            className="group hover:bg-[#000000]"
                        >
                            <i className="group-hover:text-white text-xl font-bold ri-arrow-left-s-line"></i>
                        </PrevBtn>
                        <NextBtn
                            ref={nextRef}
                            className="group hover:bg-[#000000] ml-4"
                        >
                            <i className="group-hover:text-white text-xl font-bold ri-arrow-right-s-line"></i>
                        </NextBtn>
                    </div>
                </div>
            </Div>
        </Section>
    )
}

export default Testimony;