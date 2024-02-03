import { Card, Image, Text, Badge, Group } from '@mantine/core';




import React from 'react'
import {SyncLoader} from 'react-spinners'
import { useState } from 'react'



import { useDisclosure } from '@mantine/hooks'
import { Modal, Button } from '@mantine/core'

function Contact() {
  const [opened, { open, close }] = useDisclosure(false)






  const addFormUrl="http://localhost:3000/addForm"
  const [name, setName] = useState("")
  const [phoneNumber, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [intrest, setIntrest] = useState("")
  const [message,setMessage]=useState()
  const [isLoading,setIsLoading]=useState(false)
  const addForm = (e) => {
    e.preventDefault()
    setIsLoading(true)
    console.log(name, phoneNumber,message,intrest,email)
    const body={name, phoneNumber,message,intrest,email}
    fetch(addFormUrl,{
      method:"POST",
      body:JSON.stringify(body),
      headers:{
        "Content-Type":"application/json"
      },
      
    })
    .then((response)=>response.json())
      .then((json)=>{
        setMessage(json.message)
        setIsLoading(false)
      })
      
      
      .catch(error=>{
        setMessage("internal error")
        setIsLoading(false)
      }).finally(
        ()=>{
          setIsLoading(false)
        }
      )
    
  }



  


  return (
<>
  
    <div className=' flex justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-br-full rounded-bl-full  '>
        <div className='max-w-[70vw] flex justify center flex-row mt-10 mb-20'>

        <img src="https://img.icons8.com/external-solidglyph-m-oki-orlando/32/external-Fraud-Detection-artificial-intelligence-solidglyph-m-oki-orlando.png" alt="" className='w-52 h-56'/>
     <h1 className='text-4xl text-center'><b>Fraud Detection: <br/>Its Importance & How to Choose the Right System</b></h1>

     <img  src="https://img.icons8.com/external-solidglyph-m-oki-orlando/32/external-fraud-detection-data-science-application-solid-solidglyph-m-oki-orlando.png" alt="" className='w-52 h-56'/>  
     
   

          
           
        </div>
        </div>
         <div className='flex justify-center'>
    <div className="relative justify-center rounded-3xl mt-10 bg-violet-400" >
      
      <div className='text-center text-5xl space-x-5 mt-10'>
       <b> <h1>Contact Us</h1></b>
      </div>

      <Text size='lg' className='text-black'>
           Fraud can lead to significant financial losses for individuals, businesses, and governments. Preventing fraud helps safeguard assets and resources from being misappropriated or stolen.
      <br/>
      Fraud undermines trust and confidence in financial systems, institutions, and transactions. Preventing fraud is essential to maintaining a stable and trustworthy economic environment.
      <br/>
      <div className='text-center text-3xl space-x-5'>
      <b>Don't Hesitate To Contact Us</b>
      </div>
      
      
      </Text>

      

     

    <div>
     <Modal
        opened={opened}
        onClose={close}
        title="why do you want to contact us"
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        {

<div className='flex justify-center h-[80vh] padding-top-10'>
<form class="w-full max-w-lg">
  <p>{message}</p>
<div class="flex flex-wrap -mx-3 mb-6">
<div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
     Name
  </label>
  <input value={name} onChange={(e) => setName(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder=""/>
 
</div>
<div class="w-full md:w-1/2 px-3">
  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
    email
  </label>
  <input value={email} onChange={(e) => setEmail(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder=""/>
</div>
</div>
<div class="flex flex-wrap -mx-3 mb-6">
<div class="w-full px-3">
  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
    message
  </label>
  <input value={message} onChange={(e) => setMessage(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder=""/>
  <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
</div>
</div>
<div class="flex flex-wrap -mx-3 mb-2">

{/* <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
    intrest
  </label>
  <input value={intrest} onChange={(e) => setIntrest(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder=""/>

</div> */}
<div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
   mobileNumber
  </label>
  <input value={phoneNumber} onChange={(e) => setPhone(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder=""/>
</div>
{isLoading && <SyncLoader color="#36d7b7" />} 

<button className='w-80 h-10 text-3xl' onClick={addForm}>Submit</button>

</div>

</form>

</div>


        }
      </Modal>
<div className='pr-96 pl-96 pt-9 flex justify-center mb-10'>
      <Button className=' bg-black text-white' onClick={open}>Contact Form</Button>
      </div>
    </div>
    </div>
    </div>
    <h1 className='text-center text-5xl mt-10'>Team Members</h1>
    <div className='flex flex-row text-center items-center mr-10 ml-10 mt-10 mb-10 p-5 m-2'>
    
<a class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Khushi Kumari</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </div>
</a>



<a class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Priti Kumari</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </div>
</a>
<a class="flex items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="" alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Khushi Kumari</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </div>
</a>


</div>
    </>
  )
}

export default Contact






// import React, { useEffect, useState } from 'react'

// import { io } from "socket.io-client"

// function Chat() {
//   const [message, setMessage] = useState("")
//   const [room, setRoom] = useState("")
//   const [messages, setMessages] = useState([])
//   const [isJoined, setIsJoined] = useState(false)

//   const socket = io("https://frauddetection-fi8d.onrender.com", { transports: ["websocket"] })
//   useEffect(() => {
//     socket.on("joined", () => {
//       setIsJoined(true)
//     })
//     socket.on("message", (msg) => {
//       setMessages((prev) => [...prev, msg])
//     })
//   }, [room])
//   function send() {
//     socket.emit("message", message, room)
//   }


//   function join() {
//     socket.emit("join", room)
//   }

//   return (
//     <>

//       {
//         !isJoined ?
//           <div>
//             <input value={room} type='text' placeholder="enter room id" onChange={(e) => setRoom(e.target.value)} />
//             <button onClick={join}>join</button>
//           </div>
//           :
//           <div className='bg-green-900'>
//             {
//               messages.map((mess, index) => {
//                 return (
//                   <p key={index} >
//                     {mess}
//                   </p>
//                 )
//               })}

//             <input value={message} onChange={(e) => setMessage(e.target.value)} type='text' placeholder='enter message' />
//             <button onClick={send}>Send</button>

//           </div>

//       }
//     </>
//   )
// }

// export default Contact





// // import React from 'react'
// // import {SyncLoader} from 'react-spinners'
// // import { useState } from 'react'



// // function Contact() {
// //   const addFormUrl="http://localhost:3000/addForm"
// //   const [name, setName] = useState("")
// //   const [phoneNumber, setPhone] = useState("")
// //   const [email, setEmail] = useState("")
// //   const [intrest, setIntrest] = useState("")
// //   const [message,setMessage]=useState()
// //   const [isLoading,setIsLoading]=useState(false)
// //   const addForm = (e) => {
// //     e.preventDefault()
// //     setIsLoading(true)
// //     console.log(name, phoneNumber,message,intrest,email)
// //     const body={name, phoneNumber,message,intrest,email}
// //     fetch(addFormUrl,{
// //       method:"POST",
// //       body:JSON.stringify(body),
// //       headers:{
// //         "Content-Type":"application/json"
// //       },
      
// //     })
// //     .then((response)=>response.json())
// //       .then((json)=>{
// //         setMessage(json.message)
// //         setIsLoading(false)
// //       })
      
      
// //       .catch(error=>{
// //         setMessage("internal error")
// //         setIsLoading(false)
// //       }).finally(
// //         ()=>{
// //           setIsLoading(false)
// //         }
// //       )
    
// //   }






// //   return (
// //     <div className='flex justify-center h-[80vh] padding-top-10'>
// //     <form class="w-full max-w-lg">
// //       <p>{message}</p>
// //   <div class="flex flex-wrap -mx-3 mb-6">
// //     <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
// //       <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
// //          Name
// //       </label>
// //       <input value={name} onChange={(e) => setName(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder=""/>
     
// //     </div>
// //     <div class="w-full md:w-1/2 px-3">
// //       <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
// //         email
// //       </label>
// //       <input value={email} onChange={(e) => setEmail(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder=""/>
// //     </div>
// //   </div>
// //   <div class="flex flex-wrap -mx-3 mb-6">
// //     <div class="w-full px-3">
// //       <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
// //         message
// //       </label>
// //       <input value={message} onChange={(e) => setMessage(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder=""/>
// //       <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
// //     </div>
// //   </div>
// //   <div class="flex flex-wrap -mx-3 mb-2">
   
// //     <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
// //       <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
// //         intrest
// //       </label>
// //       <input value={intrest} onChange={(e) => setIntrest(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder=""/>
    
// //     </div>
// //     <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
// //       <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
// //        mobileNumber
// //       </label>
// //       <input value={phoneNumber} onChange={(e) => setPhone(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder=""/>
// //     </div>
// //     {isLoading && <SyncLoader color="#36d7b7" />}
// //     <button className='w-80 h-10 text-3xl' onClick={addForm}>Submit</button>
// //   </div>
  
// // </form>

// //     </div>
// //   )
// // }

// // export default Contact






