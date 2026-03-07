"use client";
import { montserrat } from "@/lib/fontS";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, Building2, Users, Lightbulb, UserPlus } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className=" text-white bg-black" id="contact">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="place-items-center">
              {/* <Image 
                src="/Logo1.webp"
                alt=" MyCoreOffice Logo"
                width={180}
                height={90}
                className="object-contain mb-4"
              /> */}
              <Link href="/">
  <h1
    className={`${montserrat.className}  text-3xl tracking-wide  text-white`}
  >
    MyCoreOffice
  </h1>
</Link>
              <p className="text-gray-200 text-sm mt-5 text-justify md:leading-relaxed">
                Empowering Innovation, Nurturing Startups.  MyCoreOffice is a virtual office provider
                fostering entrepreneurial excellence and driving technological advancement.
              </p>
            </div>
            
      
                     {/* Working Hours */}
            <div className=" rounded-lg p-4 bg-white">
              <h4 className="text-black font-semibold mb-2 text-sm">Working Hours</h4>
              <p className="text-black text-sm">Monday – Friday</p>
              <p className="text-black text-sm">9:00 AM – 6:00 PM</p>
            </div>
    
            
          </div>

          {/* For Entrepreneurs */}
          <div className="space-y-6">
            <h3 className="text-white font-bold text-lg flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-red-500" />
              For Entrepreneurs
            </h3>
            <nav className="space-y-3">
              <Link href="/incubatees" className="block text-white hover:text-white transition-colors text-sm">
                Incubatees
              </Link>
              <Link href="/services" className="block text-white hover:text-white transition-colors text-sm">
                Incubation Services
              </Link>
              <Link href="/mentor" className="block text-white hover:text-white transition-colors text-sm">
                Mentorship Program
              </Link>
              <Link href="/courses" className="block text-white hover:text-white transition-colors text-sm">
                Training & Courses
              </Link>
              <Link href="/New_Proposals" className="block text-white hover:text-white transition-colors text-sm">
                Apply for Incubation
              </Link>
            </nav>
            <Link
              href="/#virtual-offices"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-red-900 hover:text-white px-4 py-3 rounded-lg text-black font-medium text-sm transition-colors w-full"
            >
              <span>Explore Virtual Offices</span>
            </Link>
          </div>

          {/* Community & Network */}
          <div className="space-y-6">
            <h3 className="text-white font-bold text-lg flex items-center gap-2">
              <Users className="w-5 h-5 text-red-500" />
              Community
            </h3>
            <nav className="space-y-3">
              <Link href="/About" className="block text-white hover:text-white transition-colors text-sm">
                About  MyCoreOffice
              </Link>
              <Link href="/life- MyCoreOffice" className="block text-white hover:text-white transition-colors text-sm">
                Life at  MyCoreOffice
              </Link>
              <Link href="/career" className="block text-white hover:text-white transition-colors text-sm">
                Careers
              </Link>
              <a href="/start-job" className="block text-white hover:text-white transition-colors text-sm">
                Job Portal
              </a>
              <a href="/start-job" className="block text-white hover:text-white transition-colors text-sm">
                GST Related Services
              </a>
            </nav>
 {/* WhatsApp CTA */}
            <Link
              href="https://wa.me/918920743180"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-3 rounded-lg text-white font-medium text-sm transition-colors w-full"
            >
              <FaWhatsapp size={18} />
              <span>Connect on WhatsApp</span>
            </Link>
   
          </div>

          {/* Contact & Location */}
          <div className="space-y-6">
            <h3 className="text-white font-bold text-lg flex items-center gap-2">
              <Building2 className="w-5 h-5 text-red-500" />
              Get in Touch
            </h3>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-white">
                  <p className="text-white font-medium mb-1">Address</p>
                  
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-red-500" />
                <div className="text-sm">
                  <p className="text-white font-medium">Contact</p>
                  <Link href="tel:+918920743180" className="text-white hover:text-white transition-colors">
                    +91 89207 43180
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-red-500" />
                <div className="text-sm">
                  <p className="text-white font-medium">Email</p>
                  <Link href="mailto:shivanirajput2711@gmail.com" className="text-white hover:text-white transition-colors">
                  shivanirajput2711@gmail.com
                  </Link>
                </div>
              </div>
            </div>



            {/* Social Media */}
            <div>
              <h4 className="text-white place-items-end   text-sm  text-center"> Follow Us </h4>
              <div className="flex gap-3 place-content-center">
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  className="p-2 rounded-lg   hover:bg-blue-600 transition-colors"
                >
                  <Facebook className="w-5 h-5 text-white hover:text-white" />
                </Link>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  className="p-2 rounded-lg   hover:bg-sky-500 transition-colors"
                >
                  <Twitter className="w-5 h-5 text-white hover:text-white" />
                </Link>
                <Link
                  href="/"
                  target="_blank"
                  className="p-2 rounded-lg   hover:bg-blue-500 transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-white hover:text-white" />
                </Link>
                <Link
                  href="/"
                  target="_blank"
                  className="p-2 rounded-lg   hover:bg-pink-500 transition-colors"
                >
                  <Instagram className="w-5 h-5 text-white hover:text-white" />
                </Link>
         
              </div>
            </div>

           
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className=" border-gray-200 ">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-center text-white">
              © {new Date().getFullYear()} MyCoreOffice | All Rights Reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="/privacy" className="text-white hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-white hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="/sitemap.xml" className="text-white hover:text-white transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
