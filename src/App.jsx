import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Slider from './components/Slider'
import Navbar from './components/Navbar'
import About from './pages/About'
import Card from './components/Card'
import Footer from './components/Footer'
import Contact from './pages/Contact'

import Chat from './pages/Chat'




function App() {


  return (

    <div>
    
      <Navbar/>
       <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/card' element={<Card />} />
        <Route path='/slider' element={<Slider />} />
        
      
      </Routes>

      <Footer/>

    </div>
  )
}

export default App
