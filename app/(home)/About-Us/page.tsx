import type { Metadata } from "next";
import AboutPage from "../components/About"
import Features from "../components/Features"
import Hero2 from "../components/hero2"
import About from "./about"
import Helpdesk from "./helpdesk"
import WhoAreWe from "./whoAreWe"

export const metadata: Metadata = {
  title: "About MyCoreOffice – Leading Virtual Office Provider",
  description: "Discover MyCoreOffice's mission to empower entrepreneurs with trusted, professional virtual office solutions across India's leading business hubs.",
  alternates:{
    canonical:"https://mycoreoffice.com/About-Us"
  }
};

const page = () => {
  return (
  <>
  <WhoAreWe/>
  <About/>
  <Features/>
  <AboutPage/>
  <Helpdesk/>
  <Hero2/>
  </>
  )
}

export default page