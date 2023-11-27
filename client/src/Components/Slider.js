import { Carousel } from 'flowbite-react';
export default function Slider() {
    return (
        < Carousel >
            <img
                src={require("../Components/images/banner2.png")}
                alt="..."
                className='legend md-h-[50px]'
            />
            <img
                src={require("../Components/images/banner2.png")}
                alt="..."
                className='legend'
            />
            <img
                src={require("../Components/images/BIS-banner-1.png")}
                alt="..."
                className='legend'
            />

        </Carousel >
    )
}