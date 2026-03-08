"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";


export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },

    {
      name: "About Us",
      href:"/About-Us"
    },

{ name: "Virtual Offices", href: "/#virtual-office" },

    {
      name: "Services",
      dropdown: [
        { name: "GST", href: "/" },
        { name: "Company Registration", href: "/" },
      ],
    },

    
    { name: "Contact", href: "/Contact" },
  ];

  const socials = [
    {
      href: "",
      icon: "/linkedin.svg",
    },
    { href: "", icon: "/instagram.svg" },
  ];

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href;

  return (
 <nav className={` w-full bg-white text-black border-b border-gray-100 sticky top-0 z-50`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
        {/* Logo */}
<Link href="/">
  <h1
    className={`   text-3xl tracking-wide  text-red-900`}
  >
    MyCoreOffice
  </h1>
</Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex space-x-6  items-center relative">
          {navItems.map((item) =>
            item.dropdown ? (
              <li key={item.name} className="relative group">
                <div className="flex items-center cursor-pointer hover:text-red-800">
                  {item.name}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
  <path  fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
</svg>
                </div>

                {/* Dropdown */}
                <div className="absolute left-0 top-full mt-2 w-48 bg-white shadow-xl rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      className="block px-4 py-3 hover:bg-red-50 rounded-md  text-sm"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              </li>
            ) : (
              <li key={item.name}>
                <Link
                  href={item.href!}
                  className={`transition-colors ${
                    isActive(item.href!)
                      ? "font-medium text-red-900"
                      : "hover:text-red-800"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            )
          )}

          {/* Social Icons */}
          <li className="flex space-x-4 ml-4">
            {socials.map(({ href, icon: Icon }, i) => (
              <Link key={i} href={href} target="_blank" aria-label="Twitter">
                <img src={Icon} className="w-5 h-5 hover:text-red-800 transition" />
              </Link>
            ))}
          </li>
        </ul>

        {/* Mobile Toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 border rounded-md"
          >
            {mobileOpen ? "X" : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg>}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white shadow-lg flex flex-col p-4 space-y-2">
          {navItems.map((item) =>
            item.dropdown ? (
              <div key={item.name}>
                <button
                  onClick={() =>
                    setMobileDropdown(
                      mobileDropdown === item.name ? null : item.name
                    )
                  }
                  className="flex justify-between w-full py-2 font-semibold"
                >
                  {item.name}
      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
</svg>
                </button>

                {mobileDropdown === item.name && (
                  <div className="pl-4">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="block py-2 text-sm hover:text-red-800"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href!}
                className="py-2 border-b"
              >
                {item.name}
              </Link>
            )
          )}

          <div className="flex space-x-4 pt-4">
            {socials.map(({ href, icon: Icon }, i) => (
              <Link key={i} href={href} target="_blank">
                <img src={Icon} className="w-5 h-5 hover:text-red-800 transition" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}