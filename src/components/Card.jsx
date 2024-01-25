import React from 'react'
function Card({Image,title}) {
  return (
    <div className='bg-gray-500 rounded-xl flex flex-col p-10 m-4'>
<img src={Image}/>
<p> {title}</p>
    </div>
  )
}

export default Card