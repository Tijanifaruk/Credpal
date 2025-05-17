import React from 'react'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Stats from "./components/Stats"
import Payment from './components/Payment'
import Crypto from './components/Crypto'
import SmartSave from './components/SmartSave'
import VirtualCard from './components/VirtualCard'
import Benefits from './components/Benefits'
import Featured from './components/Featured'
import Feedback from './components/Feedback'
import Services from './components/Services'
import CreditScore from './components/CreditScore'
import Footer from "./components/Footer"



const App = () => {
  return (
   <div className='bg-[#000] w-full overflow-hidden'>


       <Navbar />
       <Hero />
       <Stats />
       <Payment />
       <Benefits />
       <Crypto />
       <SmartSave />
       <VirtualCard /> 
       <CreditScore />
       <Services />
       <Featured />
       <Feedback />
       <Footer />
       
    </div>
  )
}

export default App
