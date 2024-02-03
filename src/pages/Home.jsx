import React, { useState } from 'react'
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


function Home() {
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    // Add other styles as needed
  };



  function fraudcall() {
    fetch('https://seon.io/resources/fraud-detection-and-prevention')
      .then(response => response.json())
      .then(json => {
        setFraud(json);
        // Redirect to the specified URL after fetching data
        window.location.href = 'https://seon.io/resources/fraud-detection-and-prevention/';
      })
      .catch(error => console.error('Fetch error:', error));
  }

  return (
    <>
      <div className=' flex justify-center bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 rounded-br-full rounded-bl-full  '>
        <div className='max-w-[70vw] flex justify center flex-row mt-10 mb-20'>

          <img src="https://img.icons8.com/external-solidglyph-m-oki-orlando/32/external-Fraud-Detection-artificial-intelligence-solidglyph-m-oki-orlando.png" alt="" className='w-52 h-56' />
          <h1 className='text-4xl text-center'><b>Fraud Detection: <br />Its Importance & How to Choose the Right System</b></h1>

          <img src="https://img.icons8.com/external-solidglyph-m-oki-orlando/32/external-fraud-detection-data-science-application-solid-solidglyph-m-oki-orlando.png" alt="" className='w-52 h-56' />





        </div>
      </div>
      <Slider />
      <div className='bg-gradient-to-r from-cyan-500 to-blue-500 w-full flex justify-center mt-10 mb-10 h-72 items-center text-2xl flex-col rounded-full'>

        <p className='text-white font-display'>
          <h1 className='text-red-500 text-5xl'>PREVENTION</h1>
          Fraud prevention requires a proactive and multi-faceted approach encompassing employee education, robust internal controls, enhanced authentication mechanisms, continuous monitoring, vendor risk management, fraud risk assessment, and collaborative efforts. By implementing these strategies, organizations can reduce the likelihood of fraudulent activities, protect assets, and maintain trust and integrity in their operations.
        </p>
        <a href="https://seon.io/resources/fraud-detection-and-prevention" target='blank'>

        <button
          className='text-white inline-block py-[10px] px-[20px] text-[24px] font-bold text-center decoration-none bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 border-black border-[2px] rounded-[10px] shadow-[5px_5px_0px_black] duration-[0.3s] transition-all ease-in hover:bg-[#fff] hover:text-white hover:border-[#ff5252] hover:shadow-[#ff5252] hover:shadow-none active:bg-[#fcf414] active:shadow-none translate-y-[4px]'
        
        >
          Explore now
        </button>
        </a>

        <p>

        </p>

      </div>






    </>
  )
}

export default Home