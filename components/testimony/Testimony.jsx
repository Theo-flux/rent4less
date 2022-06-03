import React, { useRef } from 'react';
import Image from 'next/image';
import { urlFor } from '../../sanity';
import { Div, Section } from '../../shared';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

// const TestimonyCard = () => {
//     return(
//         <div></div>
//     )
// }


// eslint-disable-next-line react/display-name
const NextBtn = React.forwardRef(({children, className}, ref) => {
    return(
        <button
           ref={ref}
           className={`group ${className}`}
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
           className={`group ${className}`}
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
                <div>
                    <PrevBtn
                        ref={prevRef}
                        className="absolute z-30 left-[25px] lg:relative lg:left-0 order-1"
                    >
                        <i className="group-hover:text-pink text-xl font-bold ri-arrow-left-s-line"></i>
                    </PrevBtn>
                    <NextBtn
                        ref={nextRef}
                        className="absolute z-30 right-[25px] lg:relative lg:right-0 order-3"
                    ></NextBtn>
                    <Swiper
                        className={``}
                        slideToClickedSlide={true}
                        modules={[Navigation, Scrollbar]}
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
                                        <div className={`flex flex-col md:flex-row justify-between items-start`}>
                                            <img
                                                className={`w-full md:w-[50%]`} 
                                                src={urlFor(test.image.asset._ref).url()}
                                                alt='pic' 
                                            />
                                            <div className={`w-full md:w-[45%]`}>
                                                {test.description}
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
            </Div>
        </Section>
    )
}

export default Testimony;