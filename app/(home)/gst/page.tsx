import type { Metadata } from "next";
import Helpdesk from "../About-Us/helpdesk"
import { Process } from "../company-registration/process"
import { GST } from "../components/gst"
import About from "./about"
import FAQSection from "./faq"
import Genesis from "./genesis"
import Hero from "./hero"

export const metadata: Metadata = {
  title: "Virtual Office for GST Registration – Fast & Easy",
  description: "Get a verified virtual office address for GST registration across India. Law-compliant, prime locations, affordable pricing. Apply now!",
  alternates:{
    canonical:"https://mycoreoffice.com/gst"
  }
};

const page = () => {
  return (
    <>
    <Hero/>
    <GST/>
    <Genesis/>
    <About/>
    <Process/>
    <FAQSection/>
    <Helpdesk/>
    </>
  )
}

export default page