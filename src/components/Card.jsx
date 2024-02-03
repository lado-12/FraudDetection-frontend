import React from 'react'
function Card({Image,title,description}) {
  return (
    <div className='bg-indigo-400 rounded-xl flex flex-col p-5 m-2 mt-16'>
<img src={Image} className='w-10% h-60'/>
<p> {title}</p>
<p>{description}</p>
    </div>
  )
}

export default Card