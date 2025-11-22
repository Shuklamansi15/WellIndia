import React from 'react'
import HeroSection from './Hero'
import WhyChooseUs from './WhyChooseUs'
import CoreServices from './OurServices'
import ConsultationSplitBlock from './ConsultationCard'
import AutoPopupConsultation from './AutoPopupConsultation'


export default function Home() {
  return (
    // FIX: Apply container and mx-auto to center the entire page content.
    // The 'container' utility sets a max-width based on screen size, 
    // and 'mx-auto' centers that block horizontally.
    <div>
      <div className="container mx-auto px-4">
        <HeroSection/>
        <ConsultationSplitBlock/>
        <WhyChooseUs/>
        <CoreServices/>
        <AutoPopupConsultation/>
      </div>
    </div>
  )
}