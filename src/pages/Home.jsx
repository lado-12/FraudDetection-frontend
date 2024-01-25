import React from 'react'
import Slider from '../components/Slider'
import Card from '../components/Card'


function Home() {
  return (
    <div className='flex justify-center flex-col items-center'>
        <div className='max-w-[70vw]'>
            <Slider/>
        </div>
        <div className='bg-gray-500 w-full flex justify-center mt-10 h-48 items-center text-2xl flex-col'>
            <p className='text-white font-display'>
                Koi Missed call aaye na uthaye
            </p>
            <button className='text-white inline-block py-[10px] px-[20px] text-[24px] font-bold text-center decoration-none bg-[#ff5252] border-black border-[2px] rounded-[10px] shadow-[5px_5px_0px_black] duration-[0.3s] transition-all ease-in hover:bg-[#fff] hover:text-[#ff5252] hover:border-[#ff5252] hover:shadow-[#ff5252] hover:shadow-none active:bg-[#fcf414] active:shadow-none translate-y-[4px]'>Explore now</button>
        </div>

        <div className='flex flex-row'>
          <Card title={"Music"} Image={"https://img.icons8.com/fluency/48/aipods-pro-max.png"}/>
          <Card title={"Love"} Image={"https://img.icons8.com/fluency/48/like.png"}/>
          <Card title={"Smile"} Image={"https://img.icons8.com/fluency/48/smiling-face-with-heart.png"}/>
        </div>

    </div>
  )
}

export default Home