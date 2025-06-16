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
import RCMProcess from './components/RCMProcess'
import FAQSection from './components/FAQSection'
import CoreValuesSection from './components/CoreValuesSection'
import AIBillingBenefits from './components/AIBillingBenefits' 


const page = () => {
  return (
    <>
    <NavBar />
    <HeroSection />
    <AIBillingBenefits />
    <TrustIndicators />
    <CoreValuesSection />
    <WhyChooseUs />
    <ServicesSection />
    <RCMProcess />
    <ProcessFlowSection />
    <HIPAAComplianceSection /> 
    <TestimonialSection /> 
    {/* <OurPartner />  */}
    <FAQSection />
    <Footer />
    </>
  )
}

export default page