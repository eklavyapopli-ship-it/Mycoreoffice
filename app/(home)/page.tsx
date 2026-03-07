import React from 'react'
import Hero from './components/Hero'
import AboutPage from './components/About'
import Features from './components/Features'
import ProductsPage from './components/services'
import FAQSection from './components/FAQ'
import Objective from './components/Objective'
import Categories from './components/Categories'
import Hero2 from './components/hero2'

const page = () => {
  return (
  <>
  <Hero/>
  <AboutPage/>
  <Features/>
  <ProductsPage limit={8}/>
  <Objective/>
  <FAQSection/>
  <Categories/>
<Hero2/>
  </>
  )
}

export default page