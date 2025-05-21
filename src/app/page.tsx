import React from 'react'
import HeroSection from './components/HeroSection'
import NavBar from './components/NavBar'
import TrustIndicators from './components/TrustIndicators'
import WhyChooseUs from './components/WhyChooseUs'
import Footer from './components/Footer'
import ServicesSection from './components/ServicesSection'
import HIPAAComplianceSection from './components/HIPAAComplianceSection'
import ProcessFlowSection from './components/ProcessFlowSection'
import TestimonialSection from './components/TestimonialSection'


const page = () => {
  return (
    <>
    <NavBar />
    <HeroSection />
    <TrustIndicators />
    <WhyChooseUs  />
    <ServicesSection />
    <HIPAAComplianceSection />
    <ProcessFlowSection />
    <TestimonialSection />  
    <Footer />
    </>
  )
}

export default page