import { Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"

const Contact = () => {
  return (
    <section>
        <div className={`max-w-7xl mx-auto h-fit py-8 px-10 border border-gray-200 text-black mt-20 rounded-xl shadow-md`}>
            <div className="flex md:flex-row flex-col justify-between md:place-items-end ">
            <div className="text-2xl text-sky-900">Need help? Let's Talk.</div>
            <div className="text-gray-500 text-sm">Reach MyCoreOffice through any of the channels below.</div>
            </div>
            <div className={`grid md:grid-cols-3 grid-cols-1 border-t mt-6 p-10`}>
    <div>
        <div className="flex place-items-start gap-2 font-medium text-lg"><div className="p-1 bg-gray-100 rounded-full m-1"><Phone className="text-emerald-600  p-1"/></div><h1>Call Us <div>     <Link href="tel:+918920743180" className="font-thin text-sm hover:underline hover:text-blue-600 block">+91 89207 43180</Link><span className="text-sm font-thin">Customer support · Mon–Sat: 10:00 – 6:00
</span></div></h1>
   </div>
  
    </div>
    <div>
        <div className="flex place-items-start gap-2 font-medium text-lg"><div className="p-1 bg-gray-100 rounded-full m-1"><Mail className="text-blue-600  p-1"/></div><h1>Email Us <div>     <Link href="mailto:shivanirajput2711@gmail.com" className="font-thin text-sm hover:underline hover:text-blue-600 block">shivanirajput2711@gmail.com</Link><span className="text-sm font-thin">General questions and program enquiries
</span></div></h1>
   </div>
  
    </div>
     <div>
        <div className="flex place-items-start gap-2 font-medium text-lg"><div className="p-1 bg-gray-100 rounded-full m-1"><MapPin className="text-blue-600  p-1"/></div><h1>Visit Us<div><span className="text-sm font-thin">Main office location
</span></div></h1>
   </div>
  
    </div>
    </div>
        </div>
    </section>
  )
}

export default Contact