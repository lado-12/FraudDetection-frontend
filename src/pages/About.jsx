import React,{useEffect,useState} from 'react'
import Image1 from '../assets/n1.webp';
import Image2 from '../assets/n2.webp';
import Image3 from '../assets/n3.webp';
import Image4 from '../assets/n4.webp';
import Image5 from '../assets/n5.webp';
import Image6 from '../assets/n6.webp';
import Image8 from '../assets/n8.webp';
import Image9 from '../assets/n9.webp';
import Image10 from '../assets/n10.webp';
import Image11 from '../assets/n11.webp';
import Image12 from '../assets/n12.webp';
import Image13 from '../assets/n13.webp';
import Image14 from '../assets/n14.webp';


function About() {
    const [header, setHeader] = useState('');

    useEffect(() => {
      const text = "Here.. Some NEWS regarding fraud";
      let currentText = '';
      
      const interval = setInterval(() => {
        currentText = text.substring(0, currentText.length + 1);
        setHeader(currentText);
  
        if (currentText === text) {
          clearInterval(interval);
        }
      }, 100);
  
      return () => clearInterval(interval);
    }, []);
  
  
  
  return (
    <>

<div className='bg-gray-900 '>
     
      
    <header  className='flex justify-center font-serif text-5xl text-gray-700 hover:text-gray-800 bg-gradient-to-r from-gray-300 to-slate-500 color-black mt-1 h-24 rounded-full '>
       <div className='mt-5'>{header}</div>  </header>
    
    </div>
    <div className='bg-gray-900 text-center mt-1'>
    <div className='ml-60'>

<a href="https://timesofindia.indiatimes.com/city/pune/online-task-frauds-in-maharashtra-techie-firm-manager-and-more-lose-rs-1-crore/articleshow/107376290.cms" class="flex flex-col items-center bg-gray-500 border border-gray-200 rounded-xl shadow md:flex-row md:max-w-5xl hover:bg-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mt-1 mb-10">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-52 md:w-72 md:rounded-none md:rounded-s-lg" src={Image1} alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Techie, firm manager, 6 others lose Rs 1 crore to online tas ..</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Cybercrime police stations in Pune and Pimpri Chinchwad registered FIRs related to online task frauds, totaling Rs 1.04 crore. Victims include a software engineer who lost Rs 30.20 lakh in a part-time job scam, and a graduate from Thergaon who lost Rs 2.39 lakh.</p>
    </div>
</a>
<a href="https://timesofindia.indiatimes.com/gadgets-news/google-tests-enhanced-financial-fraud-protection-for-users/articleshow/107486245.cms" class="flex flex-col items-center bg-gray-500 border border-gray-200 rounded-xl shadow md:flex-row md:max-w-5xl hover:bg-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-900 mt-10 mb-10">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-52 md:w-72 md:rounded-none md:rounded-s-lg" src={Image2} alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Here’s how Google is planning to protect your from financial ..</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Google is testing enhanced financial fraud protection for Google Play Protect. The feature automatically blocks app installations that request sensitive permissions. Google has partnered with the Cyber Security Agency of Singapore for the pilot program.
</p>
    </div>
</a>
<a href="https://timesofindia.indiatimes.com/city/rajkot/junagadh-woman-loses-rs-1-lakh-in-online-hotel-booking-fraud-latest-news/articleshow/107022652.cms" class="flex flex-col items-center bg-gray-500 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-5xl hover:bg-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mt-10 mb-10">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-52 md:w-72 md:rounded-none md:rounded-s-lg" src={Image3} alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Junagadh woman loses Rs 1 lakh in online hotel booking fraud</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">A woman from Keshod town in Junagadh lost Rs 1.11 lakh in OTP fraud to a cyber crook impersonating as an employee of Lemon Tree Hotel. The fraudster offered her a discount on room booking in Dwarka. The woman made the payment using Gpay and got her money siphoned off through cloned numbers.</p>
    </div>
</a>
<a href="https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/shantanu-maheshwari-hit-by-bank-fraud-urges-swift-action-for-security-restoration/articleshow/107296322.cms" class="flex flex-col items-center bg-gray-500 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-5xl hover:bg-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mt-10 mb-10">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-52 md:w-72 md:rounded-none md:rounded-s-lg" src={Image4} alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Shantanu Maheshwari hit by bank fraud, urges swift action for security restoration!</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Shantanu Maheshwari is gearing up for the release of his upcoming film, 'Auron Mein Kahan Dum Tha,' directed by Neeraj Pandey and featuring Tabu and Ajay Devgn, which is scheduled to hit theaters on April 26.</p>
    </div>
</a>
<a href="https://timesofindia.indiatimes.com/tv/news/hindi/gangubai-kathiawadi-actor-shantanu-maheshwari-falls-prey-to-a-bank-fraud-urges-authorities-to-take-swift-action/articleshow/107262706.cms" class="flex flex-col items-center bg-gray-500 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-5xl hover:bg-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mt-10 mb-10">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-52 md:w-72 md:rounded-none md:rounded-s-lg" src={Image5} alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Shantanu Maheshwari is gearing up for the release of his upcoming film, 'Auron Mein Kahan Dum Tha,' directed by Neeraj Pandey and featuring Tabu and Ajay Devgn, which is scheduled to hit theaters on April 26.</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">In an Instagram story, the 32-year-old actor revealed that fraudsters targeted his Axis bank account, generating a card without his knowledge. Disturbingly, his registered email ID, phone number, and address underwent changes without any verification or the receipt of a one-time password (OTP).</p>
    </div>
</a>
<a href="https://timesofindia.indiatimes.com/world/pakistan/pakistan-court-to-indict-fawad-chaudhry-in-fraud-case-on-february-10/articleshow/107190920.cms" class="flex flex-col items-center bg-gray-500 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-5xl hover:bg-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mt-10 mb-10">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-52 md:w-72 md:rounded-none md:rounded-s-lg" src={Image6} alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Pakistan: Court to indict Fawad Chaudhry in fraud case on February 10</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">ISLAMABAD: Court has decided to indict Pakistan's former Minister of Information and Broadcasting Fawad Chaudhry in an alleged fraud case on February 10, Pakistan-based ARY News reported. According to details, Fawad Chaudhry's lawyer Qaiser Imam Mirza Baig appeared before the court.</p>
    </div>
</a>
<a href="https://timesofindia.indiatimes.com/city/delhi/rise-of-quishing-the-threat-of-fake-qr-codes-for-financial-fraud-and-identity-theft/articleshow/106940852.cms" class="flex flex-col items-center bg-gray-500 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-5xl hover:bg-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mt-10 mb-10">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-52 md:w-72 md:rounded-none md:rounded-s-lg" src={Image8} alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Quishing's here, look before you QR code</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Cybercrime is evolving with the rise of 'quishing', the use of fake or manipulated QR codes to steal money and personal information. Complaints of UPI-related fraud surpassed 30,000 in 2023, with QR code fraud comprising nearly half of the cases.</p>
    </div>
</a>
<a href="https://timesofindia.indiatimes.com/gadgets-news/safer-internet-day-2024-moneyrelated-scams-and-how-to-stay-protected/articleshow/107463255.cms" class="flex flex-col items-center bg-gray-500 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-5xl hover:bg-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mt-10 mb-10">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-52 md:w-72 md:rounded-none md:rounded-s-lg" src={Image9} alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Safer Internet Day 2024: Money-related scams that you should know about and how to stay protected</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Tips to stay protected include staying aware of common scams, not sharing personal or financial information, using strong passwords and 2FAs, avoiding free Wi-Fi networks, keeping devices' security updated, and regularly checking bank statements.</p>
    </div>
</a>
<a href="https://timesofindia.indiatimes.com/nri/us-canada-news/indian-american-pleads-guilty-to-passport-fraud-faces-up-to-10-years-in-jail/articleshow/107442355.cms" class="flex flex-col items-center bg-gray-500 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-5xl hover:bg-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mt-10 mb-10">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-52 md:w-72 md:rounded-none md:rounded-s-lg" src={Image10} alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Indian-American pleads guilty to passport fraud; faces up to 10 years in jail</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Indian-American Jaiprakash Gulvady admitted to fraudulently obtaining US citizenship by providing false documents and lying. He arrived in the US on a temporary visa, married a US citizen and became a lawful permanent resident.</p>
    </div>
</a>
<a href="https://timesofindia.indiatimes.com/business/india-business/trai-fines-telcos-rs-110-crore-for-failure-to-tackle-pesky-calls/articleshow/107440997.cms" class="flex flex-col items-center bg-gray-500 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-5xl hover:bg-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mt-10 mb-10">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-52 md:w-72 md:rounded-none md:rounded-s-lg" src={Image11} alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Trai fines telcos ₹110cr for failure to tackle pesky calls</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Telecom regulator Trai has imposed a fine of Rs 110 crore as a “financial disincentive” on operators. And, an amount of nearly Rs 1,000 crore, that was siphoned off by cyber criminals, has been recovered by govt as it helped nearly four lakh users to recover their money.</p>
    </div>
</a>
<a href="https://timesofindia.indiatimes.com/business/india-business/rbi-cautions-against-kyc-related-frauds/articleshow/107374160.cms" class="flex flex-col items-center bg-gray-500 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-5xl hover:bg-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mt-10 mb-10">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-52 md:w-72 md:rounded-none md:rounded-s-lg" src={Image12} alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">RBI cautions against KYC related frauds</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Do not share KYC documents or copies with unknown persons or organisations, and never share any sensitive data through unverified or unauthorised websites or mobile applications. Additionally, do not click on suspicious mobile or email links.</p>
    </div>
</a>
<a href="https://timesofindia.indiatimes.com/city/kochi/frauds-and-scams-young-indians-overseas-job-hunt-gone-wrong/articleshow/107410928.cms" class="flex flex-col items-center bg-gray-500 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-5xl hover:bg-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mt-10 mb-10">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-52 md:w-72 md:rounded-none md:rounded-s-lg" src={Image13} alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Foreign dreams of youths go sour, end up in scams</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kochi police launch 'Operation Abroad' campaign to crackdown on illegal recruitment agents. Surprise raids conducted at consultancies. Expert body needed to address issue of fraud in overseas job recruitment.</p>
    </div>
</a>
<a href="https://timesofindia.indiatimes.com/city/thane/surat-businessman-held-for-fraud/articleshow/106996687.cms" class="flex flex-col items-center bg-gray-500 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-5xl hover:bg-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mt-10 mb-10">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-52 md:w-72 md:rounded-none md:rounded-s-lg" src={Image14} alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Surat Businessman held for fraud</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">A Surat-based businessman, Kailash Kothari, has been arrested by the EOW Thane for cheating his partner of Rs 2 crore. He deceitfully established two companies in his wife's and an associate's name, manipulated invoices and GST numbers, resulting in a loss of Rs 2 crore to the victim's business.</p>
    </div>
</a>
<a href="https://timesofindia.indiatimes.com/city/ahmedabad/ahmedabad-cops-son-loses-rs-5-lakh-in-customer-care-fraud/articleshow/106970781.cms" class="flex flex-col items-center bg-gray-500 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-5xl hover:bg-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mt-10 mb-1">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-52 md:w-72 md:rounded-none md:rounded-s-lg" src={Image3} alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Ahmedabad: Cop's son loses Rs 5 lakh in customer care fraud</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Narveer Chauhan, a resident of Krishnanagar and son of a retired police officer, fell victim to customer care fraud. While filing a complaint about his father's pension, he deposited a cheque at an SBI branch in Sabarkantha, which the bank allegedly misplaced.</p>
    </div>
</a>

    </div>
    </div>
    </>
  )
}

export default About










// import React from 'react'
// import {SyncLoader} from 'react-spinners'
// import { useState } from 'react'



// import { useDisclosure } from '@mantine/hooks'
// import { Modal, Button } from '@mantine/core'

// function About() {
//   const [opened, { open, close }] = useDisclosure(false)






//   const addFormUrl="http://localhost:3000/addForm"
//   const [name, setName] = useState("")
//   const [phoneNumber, setPhone] = useState("")
//   const [email, setEmail] = useState("")
//   const [intrest, setIntrest] = useState("")
//   const [message,setMessage]=useState()
//   const [isLoading,setIsLoading]=useState(false)
//   const addForm = (e) => {
//     e.preventDefault()
//     setIsLoading(true)
//     console.log(name, phoneNumber,message,intrest,email)
//     const body={name, phoneNumber,message,intrest,email}
//     fetch(addFormUrl,{
//       method:"POST",
//       body:JSON.stringify(body),
//       headers:{
//         "Content-Type":"application/json"
//       },
      
//     })
//     .then((response)=>response.json())
//       .then((json)=>{
//         setMessage(json.message)
//         setIsLoading(false)
//       })
      
      
//       .catch(error=>{
//         setMessage("internal error")
//         setIsLoading(false)
//       }).finally(
//         ()=>{
//           setIsLoading(false)
//         }
//       )
    
//   }







//   return (
//     <div>
//       <Modal
//         opened={opened}
//         onClose={close}
//         title="Authentication"
//         overlayProps={{
//           backgroundOpacity: 0.55,
//           blur: 3,
//         }}
//       >
//         {

// <div className='flex justify-center h-[80vh] padding-top-10'>
// <form class="w-full max-w-lg">
//   <p>{message}</p>
// <div class="flex flex-wrap -mx-3 mb-6">
// <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//   <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
//      Name
//   </label>
//   <input value={name} onChange={(e) => setName(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder=""/>
 
// </div>
// <div class="w-full md:w-1/2 px-3">
//   <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
//     email
//   </label>
//   <input value={email} onChange={(e) => setEmail(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder=""/>
// </div>
// </div>
// <div class="flex flex-wrap -mx-3 mb-6">
// <div class="w-full px-3">
//   <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
//     message
//   </label>
//   <input value={message} onChange={(e) => setMessage(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder=""/>
//   <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
// </div>
// </div>
// <div class="flex flex-wrap -mx-3 mb-2">

// <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
//   <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
//     intrest
//   </label>
//   <input value={intrest} onChange={(e) => setIntrest(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder=""/>

// </div>
// <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
//   <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
//    mobileNumber
//   </label>
//   <input value={phoneNumber} onChange={(e) => setPhone(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder=""/>
// </div>
// {isLoading && <SyncLoader color="#36d7b7" />}
// <button className='w-80 h-10 text-3xl' onClick={addForm}>Submit</button>
// </div>

// </form>

// </div>


//         }
//       </Modal>

//       <Button onClick={open}>Open modal</Button>

//     </div>
//   )
// }

// export default About