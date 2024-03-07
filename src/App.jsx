import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Slider from './components/Slider'
import Navbar from './components/Navbar'
import About from './pages/About'
import Card from './components/Card'
import Footer from './components/Footer'
import Contact from './pages/Contact'

import Chat from './pages/Chat'
import Dynamic from './pages/Dynamic'
import FraudDetection from './components/FraudDetection'
import Services from './pages/Services'
import Detect from './components/Detect'
import ChatBot from './components/ChatBot'


function App() {


  return (

    <div>

      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/card' element={<Card />} />
        <Route path='/slider' element={<Slider />} />
        <Route path='/frauddetection' element={<FraudDetection/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/dynamic/:id' element={<Dynamic/>}/>
        <Route path='/detect' element={<Detect/>}/>
        <Route path='/chatbot' element={<ChatBot/>}/>



      </Routes>

      <Footer />

    </div>
  )
}

export default App
