import React from 'react'
import Hero from './components/Hero'
import AboutPage from './components/About'
import Features from './components/Features'
import ProductsPage from './components/services'
import FAQSection from './components/FAQ'
import Objective from './components/Objective'

const page = () => {
  return (
  <>
  <Hero/>
  <AboutPage/>
  <Features/>
  <ProductsPage limit={6}/>
  <Objective/>
  <FAQSection/>
  </>
  )
}

export default page