import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image1 from "../assets/d1.jpeg"
import Image2 from "../assets/d2.png"
import Image3 from "../assets/d3.jpeg"



export default function Slider() {
    return (
        <Carousel autoPlay infiniteLoop interval={1000} showThumbs={false} showStatus={true} >
            <div>
                <img src={Image1} className="max-h-[80vh] rounded-3xl" />

            </div>
            <div>
                <img src={Image2} className="max-h-[80vh] rounded-3xl"  />

            </div>
            <div>
                <img src={Image3} className='max-h-[80vh] rounded-3xl' />

            </div>
        </Carousel>
    )
}