"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
// import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <div className="flex flex-col min-h-screen">
      <header
        style={{ }}
        className="fixed top-0 left-0 w-full bg-gray-900 text-white py-6 z-50"
      >
        <div className="container mx-auto flex items-center justify-between px-6">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" passHref>
              <Image
                src="/images/logo.png"
                alt="Zenix Logo"
                width={120}
                height={40}
                priority
                className="cursor-pointer w-auto h-auto"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <nav
            style={{ fontSize: "16px" }}
            className="hidden md:flex space-x-6 font-medium"
          >
            <div>
              <Link href="/" passHref>
                Home
              </Link>
            </div>
            <div>
              <Link href="/about" passHref>
                About
              </Link>
            </div>
            <div>
              <Link href="/services" passHref>
                Services
              </Link>
            </div>
            <div>
              <Link href="/portfolio" passHref>
                Portfolio
              </Link>
            </div>
            <div>
              <Link href="/contactus" passHref>
                Contact us
              </Link>
            </div>
          </nav>

          {/* Social Icons & Search */}
          <div className="flex items-center space-x-4">
            <div>
              <Link  href="https://www.facebook.com/profile.php?id=61553447804011&mibextid=ZbWKwL">
                <i className="ri-facebook-circle-fill text-white text-xl  hover:bg-[#ed3519] p-1 rounded-full "></i>
              </Link>
            </div>
            <div>
              <Link href="https://www.linkedin.com/in/hameed-gul-408453269/">
                <i className="ri-linkedin-fill text-white text-xl  hover:bg-[#ed3519] p-1 rounded-full "></i>
              </Link>
            </div>
            <div>
              <Link href="https://github.com/hameedgul12345">
                <i className="ri-github-fill text-white text-xl hover:bg-[#ed3519] p-1 rounded-full "></i>
              </Link>
            </div>
            <div>
              <Link  href="https://www.instagram.com/hameedgulfirebase31590/">
                <i className="ri-instagram-line  text-white text-xl  hover:bg-[#ed3519] p-1 rounded-full "></i>
              </Link>
            </div>

            {/* Get a Quote Button */}
            <Link
              href="/get-quote"
              className="bg-[#fe4022] hidden md:block text-sm hover:bg-red-600 text-white font-semibold py-1.5 px-5 rounded-full"
              passHref
            >
              Get Started
            </Link>
          </div>
          <button
            className="md:hidden p-3 text-white rounded"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
          {/* Menu Toggle Button (for mobile) */}

          {/* Aside Menu */}
          <aside
            className={` fixed top-0 left-0 h-full bg-black text-white transform ${
              isMounted && isOpen ? "w-0 overflow-hidden" : "w-full"
            } transition-[width] duration-300 ease-in-out  md:translate-x-0  md:hidden md:w-1/5`}
          >
            <div className="p-6">
              {/* Close Button (Mobile) */}
              <div
                style={{ fontSize: "16px" }}
                className="flex justify-between items-center  py-4 flex-row"
              >
                <Link href="/" passHref>
                  <Image
                    src="/images/logo.png"
                    alt="Zenix Logo"
                    width={120}
                    height={40}
                    priority
                    className="cursor-pointer w-auto h-auto"
                  />
                </Link>
                <button
                  className="md:hidden text-white text-sm"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  ✖
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="mt-10  space-y-4 text-lg">
                <div>
                  <Link href="/" passHref>
                    Home
                  </Link>
                </div>
                <div>
                  <Link href="/about" passHref>
                    About
                  </Link>
                </div>
                <div>
                  <Link href="/services" passHref>
                    Services
                  </Link>
                </div>
                <div>
                  <Link href="/portfolio" passHref>
                    Portfolio
                  </Link>
                </div>
                <div>
                  <Link href="/contactus" passHref>
                    Contact us
                  </Link>
                </div>
              </nav>
            </div>
          </aside>
        </div>
      </header>

      <main className="flex-grow pt-24">{children}</main>
      
      <footer className="bg-gray-900 text-white py-10">
        <div className="max-w-6xl mx-auto px-5 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Brand & Socials */}
          <div className="flex justify-between items-center md:items-start flex-col gap-4">
          <div className="flex items-center">
            <Link href="/" passHref>
              <Image
                src="/images/logo.png"
                alt="Zenix Logo"
                width={120}
                height={40}
                priority
                className="cursor-pointer w-auto h-auto"
              />
            </Link>
          </div>
            <p className="text-gray-400 text-sm mb-6">
              We help businesses with web development, SEO, and branding. Our
              team is dedicated to creating innovative digital solutions that
              drive success. Whether you need a new website, improved search
              rankings, or a fresh brand identity, we’re here to help!
            </p>
            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              <div>
                <Link href="https://facebook.com">
                  <i className="ri-facebook-circle-fill text-white text-xl  bg-[#ed3519] p-1 rounded-full "></i>
                </Link>
              </div>
              <div>
                <Link href="https://linkedin.com">
                  <i className="ri-linkedin-fill text-white text-xl  bg-[#ed3519] p-1 rounded-full "></i>
                </Link>
              </div>
              <div>
                <Link href="https://twitter.com">
                  <i className="ri-twitter-fill  text-white text-xl bg-[#ed3519] p-1 rounded-full "></i>
                </Link>
              </div>
              <div>
                <Link href="https://twitter.com">
                  <i className="ri-instagram-line  text-white text-xl  bg-[#ed3519] p-1 rounded-full "></i>
                </Link>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2 flex flex-row md:flex-col gap-2 justify-center">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  News & Articles
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Legal Notice
                </a>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 flex flex-row md:flex-col gap-2 justify-center">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Help Center
                </a> 
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="flex flex-col items-start md:items-start gap-3">
              <p className="text-gray-400 flex items-center  justify-center md:justify-start">
                <i className="ri-map-pin-line text-white text-xl bg-[#ed3519] p-1 rounded-full w-8 h-8 flex items-center justify-center mr-2"></i>
                Dalazak Road Daman Hindki, Peshawar Pakistan
              </p>
              <p className="text-gray-400 flex items-center justify-center md:justify-start">
                <i className="ri-phone-line text-white text-xl bg-[#ed3519] p-1 rounded-full w-8 h-8 flex items-center justify-center mr-2"></i>
                0310-5362665
              </p>
              <p className="text-gray-400 flex items-center justify-center md:justify-start">
                <i className="ri-mail-line text-white text-xl bg-[#ed3519] p-1 rounded-full w-8 h-8 flex items-center justify-center mr-2"></i>
                hamidkhan31590@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm mt-8 border-t border-gray-700 pt-4">
          © 2023 zonix tech solutions. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Layout;

// import Link from "next/link";
// import Image from "next/image";
// import { useState } from "react";

// function Layout({ children }) {
//   const [isOpen, setIsOpen] = useState(false); // State for mobile menu toggle

//   return (
//     <div>
//       {/* Fixed Header */}
//       <header style={{ backgroundColor: "black", opacity: 0.9 }} className="fixed top-0 left-0 w-full text-white py-6 z-50">
//         <div className="container mx-auto flex items-center justify-between px-6">

//           {/* Logo */}
//           <div className="flex items-center">
//             <Link href="/" passHref>
//               <Image
//                 src="/images/logo.png"
//                 alt="Zenix Logo"
//                 width={120}
//                 height={40}
//                 priority
//                 className="cursor-pointer"
//               />
//             </Link>
//           </div>

//           {/* Desktop Navigation (Hidden on Mobile) */}
//           <nav className="hidden md:flex space-x-6 text-lg font-medium">
//             <Link href="/" passHref className="hover:text-gray-400">Home ▼</Link>
//             <Link href="/about" passHref className="hover:text-gray-400">About</Link>
//             <Link href="/pages" passHref className="hover:text-gray-400">Pages ▼</Link>
//             <Link href="/blog" passHref className="hover:text-gray-400">Blog ▼</Link>
//             <Link href="/contact" passHref className="hover:text-gray-400">Contact</Link>
//           </nav>

//           {/* Mobile Menu Button (Hamburger Icon) */}
//           <button
//             className="md:hidden text-xl"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             ☰
//           </button>

//           {/* Mobile Navigation (Hidden by Default) */}
//           {isOpen && (
//             <div className="absolute top-16 left-0 w-full bg-black bg-opacity-90 p-4 flex flex-col space-y-4 md:hidden">
//               <Link href="/" passHref className="text-white text-lg hover:text-gray-400">Home ▼</Link>
//               <Link href="/about" passHref className="text-white text-lg hover:text-gray-400">About</Link>
//               <Link href="/pages" passHref className="text-white text-lg hover:text-gray-400">Pages ▼</Link>
//               <Link href="/blog" passHref className="text-white text-lg hover:text-gray-400">Blog ▼</Link>
//               <Link href="/contact" passHref className="text-white text-lg hover:text-gray-400">Contact</Link>
//             </div>
//           )}

//           {/* Search & Get a Quote Button */}
//           <div className="hidden md:flex items-center space-x-4">
//             <button className="text-lg hover:text-gray-400">🔍</button>
//             <Link href="/get-quote" className="bg-[#ed3519] hover:bg-red-600 text-white font-bold py-2 px-5 rounded-full" passHref>
//               GET A QUOTE
//             </Link>
//           </div>
//         </div>
//       </header>

//       {/* Main Content (Padding Added to Prevent Overlap) */}
//       <main className="pt-20">
//         {children}
//         <div
//           className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
//           style={{ backgroundImage: "url('/images/home-bg.jpg')" }}
//         ></div>
//       </main>
//     </div>
//   );
// }

// export default Layout;
