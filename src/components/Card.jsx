import React from 'react'
function Card({Image,title,description}) {
  return (
    <div className='card  bg-black rounded-xl flex flex-col p-5 m-2 mt-16 '>
<img src={Image} className='w-10% h-60'/>
<p className='text-white'> {title}</p>
<p className='text-gray-400'>{description}</p>
    </div>
  )
}

export default Card