
import Hero from './components/Hero'
import AboutPage from './components/About'
import Features from './components/Features'
import ProductsPage from './components/virtual-offices'
import FAQSection from './components/FAQ'
import Objective from './components/Objective'
import Categories from './components/Categories'
import Hero2 from './components/hero2'
import { domAnimation, LazyMotion } from "framer-motion";
import Reviews from './components/Reviews'
import { GST } from './components/gst'
import ServicesSection from './components/services'
import GetStarted from './components/GetStarted'
import VirtualOfficeBenefits from './components/benefits'
import AddOnServices from './components/Addon'
import { OurBenefits } from './components/OurBenefits'
import { PvtCompanyBenefits } from './company-registration/benefits'
import { Process } from './company-registration/process'
import { DocumentsRequired } from './company-registration/documents'
import Helpdesk from './About-Us/helpdesk'
import ContactUs from './Contact/contactform'
const page = () => {
  return (
    <>
      <LazyMotion features={domAnimation}>
        <Hero />
        <AboutPage />
        <Features />
        <GST/>
        <ServicesSection/>
        <VirtualOfficeBenefits/>
        <GetStarted/>
        <ProductsPage limit={8} />
        <Process/>
        <DocumentsRequired/>
        <Helpdesk/>
        <Objective />
        <OurBenefits/>
        <FAQSection />
        <Categories />
        <Reviews/>
        <AddOnServices/>
        {/* <Hero2 /> */}
        <ContactUs/>
      </LazyMotion>
    </>
  )
}

export default page