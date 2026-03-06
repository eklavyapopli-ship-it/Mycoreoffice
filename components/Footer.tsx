"use client";
import { montserrat } from "@/lib/fontS";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, Building2, Users, Lightbulb } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className=" text-white" id="contact">
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
              <p className="text-gray-200 text-sm mt-2 text-center md:text-justify md:leading-relaxed">
                Empowering Innovation, Nurturing Startups.  MyCoreOffice is a premier incubation center 
                fostering entrepreneurial excellence and driving technological advancement.
              </p>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center">
                <div className=" font-bold text-xl text-gray-300">80</div>
                <div className="text-xs text-gray-400">Startups</div>
              </div>
              <div className="text-center">
                <div className=" font-bold text-xl text-gray-300">20</div>
                <div className="text-xs text-gray-400">Startups Funded</div>
              </div>
              <div className="text-center">
                <div className=" font-bold text-xl text-gray-300">₹2.65Cr+</div>
                <div className="text-xs text-gray-400">Funding</div>
              </div>
               <div className="text-center">
                <div className=" font-bold text-xl text-gray-300">13</div>
                <div className="text-xs text-gray-400">Mentors</div>
              </div>
               <div className="text-center">
                <div className=" font-bold text-xl text-gray-300">300</div>
                <div className="text-xs text-gray-400">Jobs Created</div>
              </div>
              <div className="text-center">
                <div className=" font-bold text-xl text-gray-300">15</div>
                <div className="text-xs text-gray-400">Eco System Partners</div>
              </div>
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
            </nav>

   
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
                  Room 164-165, SSCBS (University of Delhi), 
                  KN Katju Marg, Sector 16, Rohini, Delhi – 110089
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-red-500" />
                <div className="text-sm">
                  <p className="text-white font-medium">Contact</p>
                  <Link href="tel:+919577227744" className="text-white hover:text-white transition-colors">
                    +91 95772 27744
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-red-500" />
                <div className="text-sm">
                  <p className="text-white font-medium">Email</p>
                  <Link href="mailto: MyCoreOffice@sscbsdu.ac.in" className="text-white hover:text-white transition-colors">
                       MyCoreOffice@sscbsdu.ac.in
                  </Link>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className=" rounded-lg p-4 bg-black">
              <h4 className="text-white font-semibold mb-2 text-sm">Working Hours</h4>
              <p className="text-white text-sm">Monday – Friday</p>
              <p className="text-white text-sm">9:00 AM – 6:00 PM</p>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-white font-semibold mb-3 text-sm">Follow Us</h4>
              <div className="flex gap-3">
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
                  href="https://www.linkedin.com/company/sscbs-innovation-and-incubation-foundation- MyCoreOffice/?originalSubdomain=in"
                  target="_blank"
                  className="p-2 rounded-lg   hover:bg-blue-500 transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-white hover:text-white" />
                </Link>
                <Link
                  href="https://www.instagram.com/si_incubation_foundation/"
                  target="_blank"
                  className="p-2 rounded-lg   hover:bg-pink-500 transition-colors"
                >
                  <Instagram className="w-5 h-5 text-white hover:text-white" />
                </Link>
                <a
                  href="https://www.f6s.com/ MyCoreOffice/about"
                  target="_blank"
                  className="p-2 rounded-lg   hover:bg-gray-600 transition-colors"
                >
                  <Image height={80} width={80}
                    src="/f6s.png"
                    alt="F6S Logo"
                    className="h-5 w-5 object-contain"
                  />
                </a>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <Link
              href="https://wa.me/919577227744"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-3 rounded-lg text-white font-medium text-sm transition-colors w-full"
            >
              <FaWhatsapp size={18} />
              <span>Connect on WhatsApp</span>
            </Link>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="text-center mb-8">
            <h3 className="text-white font-bold text-2xl mb-3 flex items-center justify-center gap-2">
              <MapPin className="w-6 h-6 text-red-600" />
              Visit Our Innovation Hub
            </h3>
            <p className="text-white max-w-2xl mx-auto">
              Located in the heart of Delhi&apos;s educational district, our state of the art incubation facility 
              provides the perfect environment for startups to grow and thrive.
            </p>
          </div>
          <div className="w-full h-fit md:h-96 rounded-2xl overflow-hidden shadow-lg border border-gray-300 bg-gray-50">
        
            <a href="https://maps.app.goo.gl/gnJX9KyYDPnV4AmD6"><img src="https://media. MyCoreOffice.in/map MyCoreOffice.png"  alt=" MyCoreOffice" /></a>
          </div>
          
          {/* Location Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center p-4   rounded-lg">
              <div className="text-white text-xs">Rithala Metro Station</div>
            </div>
            <div className="text-center p-4   rounded-lg">
              <div className="text-white text-xs">SSCBS, University of Delhi</div>
            </div>
            <div className="text-center p-4   rounded-lg">
              <div className="text-white text-xs">On-campus parking facility</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-center text-white">
              © {new Date().getFullYear()} SSCBS Innovation & Incubation Foundation. All Rights Reserved.
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
