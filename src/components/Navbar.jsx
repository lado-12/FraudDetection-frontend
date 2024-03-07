import React, { useState,useEffect } from 'react'
//import { MyContext } from '../Helper/AppContext'

function Navbar() {
  // const {user}=useContext(MyContext)
  // console.log(user)
  const [headerText, setHeaderText] = useState('');

  useEffect(() => {
    const text = "Fraud Detection: Its Importance & How to Choose the Right System";
    let currentText = '';
    
    const interval = setInterval(() => {
      currentText = text.substring(0, currentText.length + 1);
      setHeaderText(currentText);

      if (currentText === text) {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);


  return (
   <>
   

<nav className=" bg-gray-900 fixed top-0 w-full z-30 bg-transparent text-3xl">
  <div class="flex flex-wrap items-center justify-between mx-auto p-4 font-sans hover:font-serif bg-gray-900  ">
    <a href="" class="flex items-center space-x-3 rtl:space-x-reverse ml-10">
    <img width="50" height="50" src="https://img.icons8.com/color/48/locked-inside.png" alt="hacking"/>
        <span class="self-center text-3xl text-gray-100 font-semibold whitespace-nowrap dark:text-white">Fraudy</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto text-gray-100 " id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-300 rounded-lg  bg-gray-900 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-gray-900 dark:bg-gray-900 md:dark:bg-gray-900 dark:border-gray-900">
        <li>
          <a href="/home" class="block py-2 px-3 text-white bg-white-700 rounded md:bg-transparent md:text-gray-200 md:p-0 dark:text-white md:dark:text-blue-500 mr-5" aria-current="page">Home</a>
        </li>
        <li>
          <a href="/about" class="block py-2 px-3 text-gray-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-200 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent mr-5">About</a>
        </li>
        <li>
          <a href="/services" class="block py-2 px-3 text-gray-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-200 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent mr-5">Services</a>
        </li>
       
        <li>
          <a href="/contact" class="block py-2 px-3 text-gray-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-200 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent mr-20">Contact</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
<div className='bg-gray-900 '>
      <div className=' flex justify-center bg-gradient-to-r from-gray-500 via-slate-500 to-gray-500 rounded-br-full rounded-bl-full mt-20 border-4 border-white   '>
        <div className='max-w-[70vw] flex justify center flex-row mt-10 mb-20'>

          <img src="https://img.icons8.com/external-solidglyph-m-oki-orlando/32/external-Fraud-Detection-artificial-intelligence-solidglyph-m-oki-orlando.png" alt="" className='w-44 h-48' />
          <b className='text-6xl font-serif ml-10'>
            {headerText}
          </b>
          <img src="https://img.icons8.com/external-solidglyph-m-oki-orlando/32/external-fraud-detection-data-science-application-solid-solidglyph-m-oki-orlando.png" alt="" className='w-44 h-48' />





        </div>
      </div>
      </div>

   </>
  )
}

export default Navbar