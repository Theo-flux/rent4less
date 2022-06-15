import React, { useRef } from 'react'
import { urlFor } from '../../sanity';
import { useMediaQuery } from 'react-responsive';
import {Section, Div, Tag, H2} from '../../shared';
import {Swiper, SwiperSlide} from 'swiper/react'
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

const PropertyCard = ({item}) => {
  return(
    <div className={`p-2 bg-white rounded-[30px]`}>
      <img className={`w-[100%]`} src={urlFor(item.image.asset._ref).url()} alt=""/>

      <div className={`p-4 mt-4`}>
        <div className={`mb-4`}>
          <p className={`font-quinta font-bold`}>{item.title}</p>
          <small className={`font-quinta text-darkgray`}>{item.location}</small>
        </div>

        <div>
          <h2 className={`text-xl font-axi font-bold`}>&#8358;{item.price.toLocaleString()} <subscript className={`text-base font-quinta font-light text-darkgray`}>per month</subscript></h2>
        </div>
      </div>
    </div>
  )
}


function Property({property}) {
  const nextRef = useRef(null);
  const prevRef = useRef(null);
  const swiper = useRef(null);
  const isMobile = useMediaQuery({minWidth: 768});
  const isTablet = useMediaQuery({minWidth: 424, maxWidth: 767});

  return (
    <Section id={`property`} className={``}>
      <Div>
        <div className={`grid gap-8 grid-cols-1 md:grid-cols-2`}>

          <div className={`w-fit`}>
            <Tag text={`on reveiews`}/>
            <H2 className={`mt-2`} text={`Available Properties`}/>
          </div>

          <div className={`flex place-self-start md:place-self-end justify-between items-center`}>
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
          
          <div className={`md:mt-4 md:col-span-2 md:row-start-2 md:row-end-3`}>
            <Swiper
              className={``}
              slideToClickedSlide={true}
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={isMobile ? 3:1}
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
              ref={swiper}
            >
              {
                property.map((item, index) => {
                  return(
                    <SwiperSlide key={index} className={``}>
                      <PropertyCard item={item} />
                    </SwiperSlide>
                  )
                })
              }
            </Swiper>
          </div>
        </div>
      </Div>
    </Section>
  )
}

export default Property;