import React, { useState,useEffect} from 'react';
import { SyncLoader } from 'react-spinners'
const FraudDetection = () => {
  const addFraudUrl = "http://localhost:3000/addFraud"
  const [name, setName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [email, setEmail] = useState("")
  const [transactionAmount, setTransactionAmount] = useState("")
  const [fraudsterMobile, setFraudsterMobile] = useState()
  const [userBehaviour, setUserBehaviour] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState()
  const[fraudtype,setFraudtype]=useState()
  const addFraud = (e) => {
    e.preventDefault()
    setIsLoading(true)
    console.log(name, phoneNumber, email,fraudtype, transactionAmount, fraudsterMobile, userBehaviour)
    const body = { name, phoneNumber, email,fraudtype, transactionAmount, fraudsterMobile, userBehaviour }
    fetch(addFraudUrl, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json"
      },

    })
      .then((response) => response.json())
      .then((json) => {
        setMessage(json.message)
        setIsLoading(false)
      })


      .catch(error => {
        setMessage("internal error")
        setIsLoading(false)
      }).finally(
        () => {
          setIsLoading(false)
        }
      )

  }






  
  return (
    <>
      <div className=' flex bg-gradient-to-r from-gray-300 to-slate-500  mt-1 mr-40 ml-44 rounded-tr-full rounded-br-full mb-1 border-4 border-slate-500/100 '>

        <form class="w-full max-w-lg text-2xl mt-1 ml-10">
          <p>{message}</p>
          <div class="flex flex-wrap -mx-3 mb-6">

            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">

              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Name
              </label>
              <input value={name} onChange={(e) => setName(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" />

            </div>
            <div class="w-full md:w-1/2 px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                email
              </label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="" />
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                phoneNumber
              </label>
              <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="" />
            
           </div>
           <div class="w-full md:w-1/2 px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                fraudtype
              </label>
              <input value={fraudtype} onChange={(e) => setFraudtype(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="" />
            
           </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                userBehaviour
              </label>
              <input value={userBehaviour} onChange={(e) => setUserBehaviour(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="" />
              <p class="text-gray-600 text-xs italic">Make it as long for your help</p>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-2">

            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                fraudster mobileNumber
              </label>
              <input value={fraudsterMobile} onChange={(e) => setFraudsterMobile(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="number" placeholder="" />
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                transaction amount
              </label>
              <input value={transactionAmount} onChange={(e) => setTransactionAmount(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="number" placeholder="" />
          
            </div>
            {isLoading && <SyncLoader color="#36d7b7" />}



          </div>
         



        </form>
        <div className='ml-56 mt-56 '>
        {!isLoading && <button type='submit'
          className='text-white inline-block py-[10px] px-[20px] text-[24px] font-bold text-center decoration-none bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-500 border-black border-[2px] rounded-[10px] shadow-[5px_5px_0px_black] duration-[0.3s] transition-all ease-in hover:bg-[#fff] hover:text-white hover:border-[#4b4949] hover:shadow-[#141313] hover:shadow-none active:bg-[#222220] active:shadow-none translate-y-[4px]' onClick={addFraud}>
          submit
        </button>} </div>


        
        </div>
      

        <div>
     </div>



      
    </>
  );
};

export default FraudDetection;
