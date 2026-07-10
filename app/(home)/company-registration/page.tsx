import type { Metadata } from "next";
import Helpdesk from "../About-Us/helpdesk"
import { PvtCompanyBenefits } from "./benefits"
import { DocumentsRequired } from "./documents"
import Hero from "./hero"
import { Process } from "./process"

export const metadata: Metadata = {
  title: "Virtual Office for Company Registration India",
  description: "Register your Pvt Ltd company with a verified virtual office address. Fast documentation, lowest prices, 100% legal compliance. Get started now!",
  alternates:{
    canonical:"https://mycoreoffice.com/company-registration"
  }
};

const page = () => {
  return (
    <>
    <Hero/>
    <PvtCompanyBenefits/>
    <Process/>
    <DocumentsRequired/>
    <Helpdesk/>
    </>
  )
}

export default page