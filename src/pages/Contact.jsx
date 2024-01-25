import React from 'react'
import {SyncLoader} from 'react-spinners'
import { useState } from 'react'



function Contact() {
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
   
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        intrest
      </label>
      <input value={intrest} onChange={(e) => setIntrest(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder=""/>
    
    </div>
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
  )
}

export default Contact