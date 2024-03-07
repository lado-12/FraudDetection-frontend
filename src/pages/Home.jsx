import React, { useState,useEffect } from 'react'
import Slider from '../components/Slider'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image1 from '../assets/d1.jpeg'
import Image2 from '../assets/d2.png'
import Image3 from '../assets/d3.jpeg'
import backgroundImage from '../assets/d4.jpeg'; // Import your image
import Image5 from '../assets/d5.jpeg'
import Image6 from '../assets/d6.jpeg'
import Image7 from '../assets/d7.jpeg'
import Image8 from '../assets/d8.jpeg'
import Image9 from '../assets/d9.jpeg'
import ChatBot from '../components/ChatBot';


function Home() {
 
  

  

  return (
    <>
    <div className='bg-gray-900 '>
      
      <Slider />
      <ChatBot/>
      <div className='bg-gradient-to-r from-gray-500 to-gray-500 w-full flex justify-center mt-10 mb-1 h-72 items-center text-2xl flex-col rounded-full'>

        <p className='text-black text-center font-serif'>
          <h1 className='text-gray-300 text-5xl font-serif'><b>PREVENTION</b></h1>
          Fraud prevention requires a proactive and multi-faceted approach encompassing employee education, robust internal controls, enhanced authentication mechanisms, continuous monitoring, vendor risk management, fraud risk assessment, and collaborative efforts. By implementing these strategies, organizations can reduce the likelihood of fraudulent activities, protect assets, and maintain trust and integrity in their operations.
        </p>
        <a href="https://seon.io/resources/fraud-detection-and-prevention" target='blank'>

        <button
          className='text-white inline-block py-[10px] px-[20px] text-[24px] font-bold text-center decoration-none bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-500 border-black border-[2px] rounded-[10px] shadow-[5px_5px_0px_black] duration-[0.3s] transition-all ease-in hover:bg-[#fff] hover:text-white hover:border-[#4b4949] hover:shadow-[#141313] hover:shadow-none active:bg-[#fcf414] active:shadow-none translate-y-[4px]'
        
        >
          Explore now
        </button>
        </a>

        <p>

        </p>

      </div>


      </div>



    </>
  )
}

export default Home