import Helpdesk from "../About-Us/helpdesk"
import Categories from "../components/Categories"
import About from "./about"
import FAQSection from "./faq"
import Genesis from "./genesis"
import Hero from "./hero"

const page = () => {
  return (
    <>
    <Hero/>
    <Genesis/>
    <About/>
    <FAQSection/>
    <Helpdesk/>
    <Categories/>
    </>
  )
}

export default page