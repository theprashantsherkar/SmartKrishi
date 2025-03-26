import Navbar from '@/components/custom/Navbar'
import React from 'react'

import Hero from './Hero'
import Features from './Features'
import Footer from '@/components/custom/Footer'

function Landing() {
  return (
    <>
    
      <div className="min-h-screen bg-green-50 flex flex-col">

      <Navbar />
      <Hero />
      <Features />
      <Footer/>
      </div>
    </>
  )
}

export default Landing