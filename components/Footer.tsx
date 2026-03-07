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
              <h1 className="text-black font-semibold mb-2 text-sm">Working Hours</h1>
              <p className="text-black text-sm">Monday – Friday</p>
              <p className="text-black text-sm">9:00 AM – 6:00 PM</p>
            </div>
    
            
          </div>

          {/* For Entrepreneurs */}
          <div className="space-y-6">
            <h1 className="text-white font-semibold text-lg flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-red-500" />
              For Entrepreneurs
            </h1>
            <nav className="space-y-3">
              <Link href="/#virtual-office" className="block text-white hover:text-white transition-colors text-sm">
               Virtual Offices
              </Link>
              <Link href="/#virtual-office" className="block text-white hover:text-white transition-colors text-sm">
               Co-Working Spaces
              </Link>
              <Link href="/#virtual-office" className="block text-white hover:text-white transition-colors text-sm">
               Meeting Rooms
              </Link>
              <Link href="/#browse" className="block text-white hover:text-white transition-colors text-sm">
                Browse
              </Link>
              <Link href="/#objective" className="block text-white hover:text-white transition-colors text-sm">
                Objective
              </Link>
            </nav>
            <Link
              href="/#virtual-office"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-red-900 hover:text-white px-4 py-3 rounded-lg text-black font-medium text-sm transition-colors w-full"
            >
              <span>Explore Virtual Offices</span>
            </Link>
          </div>

          {/* Community & Network */}
          <div className="space-y-6">
            <h1 className="text-white font-bold text-lg flex items-center gap-2">
              <Users className="w-5 h-5 text-red-500" />
              Community
            </h1>
            <nav className="space-y-3">
              <Link href="/About-Us" className="block text-white hover:text-white transition-colors text-sm">
                About  MyCoreOffice
              </Link>
              <Link href="/About-Us" className="block text-white hover:text-white transition-colors text-sm">
                Life at  MyCoreOffice
              </Link>
                <Link href="/" className="block text-white hover:text-white transition-colors text-sm">
                GST Related Services
              </Link>
              <Link href="/" className="block text-white hover:text-white transition-colors text-sm">
                Company Registration
              </Link>
              <Link href="/" className="block text-white hover:text-white transition-colors text-sm">
                Job Portal
              </Link>
            
            </nav>
 {/* WhatsApp CTA */}
            <Link
              href="https://wa.me/918920743180"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 bg-green-700  px-4 py-3 rounded-lg text-white font-medium text-sm transition-colors w-full"
            >
              <FaWhatsapp size={18} />
              <span>Connect on WhatsApp</span>
            </Link>
   
          </div>

          {/* Contact & Location */}
          <div className="space-y-6">
            <h1 className="text-white font-bold text-lg flex items-center gap-2">
              <Building2 className="w-5 h-5 text-red-500" />
              Get in Touch
            </h1>
            
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
              <h1 className="text-white place-items-end   text-sm  text-center"> Follow Us </h1>
              <div className="flex gap-3 place-content-center">
                <Link
                  href="https://facebook.com" aria-label="Twitter"
                  target="_blank"
                  className="p-2 rounded-lg   hover:bg-blue-600 transition-colors"
                >
                  <Facebook className="w-5 h-5 text-white hover:text-white" />
                </Link>
                <Link
                  href="https://twitter.com" aria-label="Twitter"
                  target="_blank"
                  className="p-2 rounded-lg   hover:bg-sky-500 transition-colors"
                >
                  <Twitter className="w-5 h-5 text-white hover:text-white" />
                </Link>
                <Link
                  href="/"
                  target="_blank" aria-label="Twitter"
                  className="p-2 rounded-lg   hover:bg-blue-500 transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-white hover:text-white" />
                </Link>
                <Link
                  href="/"
                  target="_blank" aria-label="Twitter"
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
              <Link href="/privacy" className="text-white hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap.xml" className="text-white hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
