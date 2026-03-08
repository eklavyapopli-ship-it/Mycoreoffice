import Helpdesk from "../About-Us/helpdesk"
import Categories from "../components/Categories"
import { PvtCompanyBenefits } from "./benefits"
import { DocumentsRequired } from "./documents"
import Hero from "./hero"
import { Process } from "./process"

const page = () => {
  return (
    <>
    <Hero/>
    <PvtCompanyBenefits/>
    <Process/>
    <DocumentsRequired/>
    <Helpdesk/>
    <Categories/>
    </>
  )
}

export default page