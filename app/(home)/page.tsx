
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
        <Objective />
        <FAQSection />
        <Categories />
        <Reviews/>
        <Hero2 />
      </LazyMotion>
    </>
  )
}

export default page