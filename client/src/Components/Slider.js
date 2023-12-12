import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/navigation';
import "swiper/css";
import '../css/homepage.css'

// import required modules
import { Navigation } from 'swiper/modules';


export default function Slider() {
    return <>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide className='w-[!600px]'>
            <img src={require("../Components/images/bannerN1.jpg")}
            alt="..." className='object-cover'/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={require("../Components/images/bannerN4.jpg")}
            alt="..." className='object-cover'/>
        </SwiperSlide>
        </Swiper>
    </>
}