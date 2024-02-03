import React from 'react'
import Card from '../components/Card'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image1 from '../assets/d1.jpeg'
import Image2 from '../assets/d2.png'
import Image3 from '../assets/d3.jpeg'
import Image4 from '../assets/d4.jpeg'; // Import your image
import Image5 from '../assets/d5.jpeg'
import Image6 from '../assets/d6.jpeg'
import Image7 from '../assets/d7.jpeg'
import Image8 from '../assets/d8.jpeg'
import Image9 from '../assets/d9.jpeg'



export default function Slider() {
    return (
        <Carousel autoPlay infiniteLoop interval={1000} showThumbs={false} showStatus={true} >
            <div className='flex flex-row mt-10'>
            <div className='flex flex-row'>
          <Card title={<b>"Data Analytics and Machine Learning "</b>} Image={Image1} description={"With the proliferation of big data, organizations can leverage advanced analytics and machine learning algorithms to detect anomalies and patterns indicative of fraudulent behavior. These technologies analyze vast amounts of data in real-time, enabling timely identification of suspicious activities."}/>
          <Card title={<b>"Biometric Authentication"</b>} Image={Image2} description={" Biometric authentication, including fingerprint, facial recognition, and voice recognition technologies, adds an extra layer of security by verifying users' identities based on unique biological traits, thus reducing the likelihood of identity theft and unauthorized access."}/>
          <Card title={<b>"Transaction Monitoring"</b>} Image={Image3} description={" Continuous monitoring of transactions enables early detection of suspicious activities, such as unusual spending patterns, multiple failed login attempts, or transactions outside typical business hours, prompting immediate investigation and intervention."}/>
        </div>
            </div>
            <div>
            <div className='flex flex-row'>
          <Card title={<b>"Behavioral Analysis"</b>} Image={Image5} description={" Understanding typical user behavior is crucial for detecting anomalies. Behavioral analysis techniques monitor deviations from normal patterns, such as unusual transaction amounts, frequencies, or locations, to flag potentially fraudulent actions."}/>
          <Card title={<b>"Collaborative Efforts"</b>} Image={Image6} description={"Collaboration between industry stakeholders, law enforcement agencies, and regulatory bodies facilitates information sharing and intelligence gathering, enhancing the collective ability to combat fraud across sectors and jurisdictions"}/>
          <Card title={<b>"Artificial Intelligence (AI)"</b>} Image={Image7} description={"AI-powered fraud detection systems leverage machine learning algorithms to analyze data and identify fraudulent patterns with high accuracy and speed. "}/>
        </div>

            </div>
            <div>
            <div className='flex flex-row'>
          <Card title={<b>"Predictive Analytics"</b>} Image={Image8} description={"Predictive modeling techniques forecast future fraudulent activities based on historical data, enabling proactive measures to mitigate risks and prevent potential losses."}/>
          <Card title={<b>"Blockchain Technology"</b>} Image={Image9} description={"Blockchain's immutable and decentralized ledger enhances transparency and security in financial transactions, making it more challenging for fraudsters to manipulate records or engage in fraudulent activities undetected."}/>
          <Card title={<b>"Natural Language Processing (NLP)"</b>} Image={Image3} description={" NLP algorithms analyze text data from various sources, such as emails, chat logs, and social media, to detect fraudulent communications or phishing attempts, thereby reducing the likelihood of falling victim to social engineering attacks."}/>
        </div>

            </div>
        </Carousel>
    )
}