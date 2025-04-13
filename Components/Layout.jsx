"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
// import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import {
  Code2,
  PenTool,
  LayoutDashboard,
  DraftingCompass,
  Search,
  BarChart,
  Briefcase,
  LineChart,
  Info,
  Settings,
  Mail,
} from "lucide-react";
function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <div className="flex flex-col min-h-screen">
      <header
        style={{}}
        className="fixed top-0 left-0 w-full bg-gray-900 text-white py-2 z-50"
      >
        <div className="container mx-auto flex items-center justify-between px-6">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" passHref>
              <Image
                src="/images/zonixlogo.png"
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
              <Link href="https://www.facebook.com/profile.php?id=61553447804011&mibextid=ZbWKwL">
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
              <Link href="https://www.instagram.com/hameedgulfirebase31590/">
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
            className={` fixed top-0 left-0 h-full bg-gray-900 text-white transform ${
              isMounted && isOpen ? "w-0 overflow-hidden" : "w-full"
            } transition-[width] duration-300 ease-in-out  md:translate-x-0  md:hidden md:w-1/5`}
          >
            <div className="py-2">
              {/* Close Button (Mobile) */}
              <div
                style={{ fontSize: "16px" }}
                className="flex justify-between items-center  flex-row"

              >
                <Link href="/" passHref>
                  <Image
                    src="/images/zonixlogo.png"
                    alt="Zenix Logo"
                    width={120}
                    height={40}
                    priority
                    className="cursor-pointer w-auto h-auto"
                  />
                </Link>
                <button
                  className="md:hidden text-white text-[20px] border border-s-emerald-300 mr-6"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  ✖
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="space-y-4 ml-8 text-lg">
                <div>
                  <Link href="/"  onClick={() => setIsOpen(!isOpen)} passHref>
                    Home
                  </Link>
                </div>
                <div>
                  <Link href="/about"  onClick={() => setIsOpen(!isOpen)} passHref>
                    About
                  </Link>
                </div>
                <div>
                  <Link href="/services"  onClick={() => setIsOpen(!isOpen)} passHref>
                    Services
                  </Link>
                </div>
                <div>
                  <Link href="/portfolio"  onClick={() => setIsOpen(!isOpen)} passHref>
                    Portfolio
                  </Link>
                </div>
                <div>
                  <Link href="/contactus"  onClick={() => setIsOpen(!isOpen)} passHref>
                    Contact us
                  </Link>
                </div>
              </nav>
            </div>
          </aside>
        </div>
      </header>

      <main className="flex-grow">{children}</main>

      <footer className="bg-gray-900 text-white py-10">
        <div className="max-w-6xl mx-auto px-5 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Brand & Socials */}
          <div className="flex justify-between items-center md:items-start flex-col gap-4">
            <div className="flex items-start  flex-col gap-2">
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
              <hr className="text-orange-500 w-28"/>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              We help businesses with web development, SEO, and branding. Our
              team is dedicated to creating innovative digital solutions that
              drive success. Whether you need a new website, improved search
              rankings, or a fresh brand identity, we’re here to help!
            </p>
          </div>
          <div className="md:block hidden">
            <h3 className="text-lg font-semibold text-start">
              Social Links
            </h3>
            <hr className="text-orange-500 w-28"/>
            {/* Social Icons */}
            <div className="flex flex-col items-start py-4 space-y-4">
              
              <div>
                <Link href="https://twitter.com">
                  <div className="flex flex-row">
                    <div>
                      {" "}
                      <i className="ri-twitter-fill  text-white text-xl bg-[#ed3519] p-1 rounded-full "></i>
                    </div>
                    <p className="ml-1"> Twitter</p>
                  </div>
                </Link>
              </div>
              <div>
                <Link href="https://linkedin.com">
                  <div className="flex flex-row">
                    <div>
                      {" "}
                      <i className="ri-linkedin-fill text-white text-xl  bg-[#ed3519] p-1 rounded-full "></i>
                    </div>
                    <p className="ml-1"> Linkedin</p>
                  </div>
                </Link>
              </div>
              <div>
                <Link href="https://facebook.com">
                  <div className="flex flex-row">
                    <div>
                      {" "}
                      <i className="ri-facebook-circle-fill text-white text-xl  bg-[#ed3519] p-1 rounded-full "></i>
                    </div>
                    <p className="ml-1"> Facebook</p>
                  </div>
                </Link>
              </div>
              <div>
                <Link href="https://twitter.com">
                  <div className="flex flex-row">
                    <div>
                      {" "}
                      <i className="ri-instagram-line  text-white text-xl  bg-[#ed3519] p-1 rounded-full "></i>
                    </div>
                    <p className="ml-1"> Instagram</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Support Section */}
          <div className="md:block hidden">
            <h3 className="text-lg font-semibold text-start ">Go to</h3>
            <hr className="text-orange-500 w-12"/>
            <div className="flex flex-col items-start py-4 space-y-4">
              <div>
                <Link href="/">
                  <div className="flex flex-row">
                    <div>
                      {" "}
                      <i className="ri-home-9-fill w-7 h-7 text-white text-xl  bg-[#ed3519] p-1 rounded-full "></i>
                    </div>
                    <p className="ml-1"> Home</p>
                  </div>
                </Link>
              </div>
              <div>
                <Link href="/aboutus">
                  <div className="flex flex-row">
                    <div>
                      {/* <Info className="w-7 h-7 text-white text-2xl  bg-[#ed3519] p-1  rounded-full" /> */}
                      <i className="ri-information-2-line w-7 h-7 text-white text-xl  bg-[#ed3519] p-1  rounded-full"></i>
                    </div>
                    <p className="ml-1"> About us</p>
                  </div>
                </Link>
              </div>
              <div>
                <Link href="/services">
                  <div className="flex flex-row">
                    <div>
                      {" "}
                      <Settings className="w-7 h-7 text-white text-xl  bg-[#ed3519] p-1 rounded-full" />
                    </div>
                    <p className="ml-1"> Services</p>
                  </div>
                </Link>
              </div>
              <div>
                <Link href="/contactus">
                  <div className="flex flex-row">
                    <div>
                      {" "}
                      <Mail className="w-7 h-7 text-white text-xl  bg-[#ed3519] p-1 rounded-full" />
                    </div>
                    <p className="ml-1"> Contact us</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="md:hidden display flex flex-row justify-between items-center ">
            {/* Useful Links */}
            <div>
              <h3 className="text-lg font-semibold text-start mb-4">
                Social Links
              </h3>
              {/* Social Icons */}
              <div className="flex flex-col items-start space-y-4">
                <div>
                  <Link href="https://twitter.com">
                    <div className="flex flex-row">
                      <div>
                        {" "}
                        <i className="ri-twitter-fill  text-white text-xl bg-[#ed3519] p-1 rounded-full "></i>
                      </div>
                      <p className="ml-1"> Twitter</p>
                    </div>
                  </Link>
                </div>
                <div>
                  <Link href="https://linkedin.com">
                    <div className="flex flex-row">
                      <div>
                        {" "}
                        <i className="ri-linkedin-fill text-white text-xl  bg-[#ed3519] p-1 rounded-full "></i>
                      </div>
                      <p className="ml-1"> Linkedin</p>
                    </div>
                  </Link>
                </div>
                <div>
                  <Link href="https://facebook.com">
                    <div className="flex flex-row">
                      <div>
                        {" "}
                        <i className="ri-facebook-circle-fill text-white text-xl  bg-[#ed3519] p-1 rounded-full "></i>
                      </div>
                      <p className="ml-1"> Facebook</p>
                    </div>
                  </Link>
                </div>
                <div>
                  <Link href="https://twitter.com">
                    <div className="flex flex-row">
                      <div>
                        {" "}
                        <i className="ri-instagram-line  text-white text-xl  bg-[#ed3519] p-1 rounded-full "></i>
                      </div>
                      <p className="ml-1"> Instagram</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Support Section */}
            <div>
              <h3 className="text-lg font-semibold text-start mb-4">Go to</h3>
              <div className="flex flex-col items-start space-y-4">
                <div>
                  <Link href="/">
                    <div className="flex flex-row">
                      <div>
                        {" "}
                        <i className="ri-home-9-fill w-7 h-7 text-white text-xl  bg-[#ed3519] p-1 rounded-full "></i>
                      </div>
                      <p className="ml-1"> Home</p>
                    </div>
                  </Link>
                </div>
                <div>
                  <Link href="/aboutus">
                    <div className="flex flex-row">
                      <div>
                        {/* <Info className="w-7 h-7 text-white text-2xl  bg-[#ed3519] p-1  rounded-full" /> */}
                        <i className="ri-information-2-line w-7 h-7 text-white text-xl  bg-[#ed3519] p-1  rounded-full"></i>
                      </div>
                      <p className="ml-1"> About us</p>
                    </div>
                  </Link>
                </div>
                <div>
                  <Link href="/services">
                    <div className="flex flex-row">
                      <div>
                        {" "}
                        <Settings className="w-7 h-7 text-white text-xl  bg-[#ed3519] p-1 rounded-full" />
                      </div>
                      <p className="ml-1"> Services</p>
                    </div>
                  </Link>
                </div>
                <div>
                  <Link href="/contactus">
                    <div className="flex flex-row">
                      <div>
                        {" "}
                        <Mail className="w-7 h-7 text-white text-xl  bg-[#ed3519] p-1 rounded-full" />
                      </div>
                      <p className="ml-1"> Contact us</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-start ">
              Contact Information
            </h3>
            <hr className="text-orange-500 w-44"/>
            <div className="flex flex-col items-start md:items-start gap-3 py-4">
              <p className="text-gray-400 flex items-center justify-center md:justify-start">
                <i className="ri-time-fill text-white text-xl bg-[#ed3519] p-1 rounded-full w-8 h-8 flex items-center justify-center mr-2"></i>
                24/7 Availabilty
              </p>

              <p className="text-gray-400 flex items-center justify-center md:justify-start">
                <i className="ri-phone-line text-white text-xl bg-[#ed3519] p-1 rounded-full w-8 h-8 flex items-center justify-center mr-2"></i>
                0310-5362665
              </p>
              <p className="text-gray-400 flex items-center  justify-center md:justify-start">
                <i className="ri-map-pin-line text-white text-xl bg-[#ed3519] p-1 rounded-full w-8 h-8 flex items-center text-start justify-center mr-2"></i>
                Peshawar Pakistan
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
