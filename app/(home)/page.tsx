
import Hero from './components/Hero'
import AboutPage from './components/About'
import Features from './components/Features'
import ProductsPage from './components/services'
import FAQSection from './components/FAQ'
import Objective from './components/Objective'
import Categories from './components/Categories'
import Hero2 from './components/hero2'
import { domAnimation, LazyMotion } from "framer-motion";
const page = () => {
  return (
    <>
      <LazyMotion features={domAnimation}>
        <Hero />
        <AboutPage />
        <Features />
        <ProductsPage limit={8} />
        <Objective />
        <FAQSection />
        <Categories />
        <Hero2 />
      </LazyMotion>
    </>
  )
}

export default page