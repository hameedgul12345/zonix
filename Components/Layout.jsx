"use client";
import Link from "next/link";
import Image from "next/image";
import { useState ,useEffect} from "react";
// // import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

// function Layout({ children }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   if (!isMounted) return null;
//   return (
//     <div>
//       <header
//         style={{ backgroundColor: "black", opacity: 0.9 }}
//         className="fixed top-0 left-0 w-full text-white py-6 z-50"
//       >
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
//                 className="cursor-pointer w-auto h-auto"
//               />
//             </Link>
//           </div>

//           {/* Navigation Links */}
//           <nav className="hidden md:flex space-x-6 text-lg font-medium">
//             <Link href="/" passHref>
//               Home ▼
//             </Link>
//             <Link href="/about" passHref>
//               About
//             </Link>
//             <Link href="/pages" passHref>
//               Pages ▼
//             </Link>
//             <Link href="/blog" passHref>
//               Blog ▼
//             </Link>
//             <Link href="/contact" passHref>
//               Contact
//             </Link>
//           </nav>

//           {/* Social Icons & Search */}
//           <div className="flex items-center space-x-4">
//             {/* <Link href="https://facebook.com" passHref><a><FaFacebookF className="cursor-pointer hover:text-gray-400" /></a></Link>
//             <Link href="https://twitter.com" passHref><a><FaTwitter className="cursor-pointer hover:text-gray-400" /></a></Link>
//             <Link href="https://youtube.com" passHref><a><FaYoutube className="cursor-pointer hover:text-gray-400" /></a></Link>
//             <Link href="https://instagram.com" passHref><a><FaInstagram className="cursor-pointer hover:text-gray-400" /></a></Link> */}

//             {/* Search Icon */}
//             <button className="text-lg hidden md:block hover:text-gray-400">
//               🔍
//             </button>

//             {/* Get a Quote Button */}
//             <Link
//               href="/get-quote"
//               className="bg-[#ed3519] hidden md:block hover:bg-red-600 text-white font-bold py-2 px-5 rounded-full"
//               passHref
//             >
//               GET A QUOTE
//             </Link>
//           </div>
//           <button
//             className="md:hidden p-3 text-white rounded"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             ☰
//           </button>
//           {/* Menu Toggle Button (for mobile) */}

//           {/* Aside Menu */}
//           <aside
//             className={` fixed top-0 left-0 h-full bg-black text-white transform ${
//                 isMounted && isOpen ? "w-0 overflow-hidden" : "w-full"
//             } transition-[width] duration-300 ease-in-out  md:translate-x-0  md:hidden md:w-1/5`}
//           >
//             <div className="p-6">
//               {/* Close Button (Mobile) */}
//               <div className="flex justify-between items-center py-4 flex-row">

//               <Link href="/" passHref>
//               <Image
//                 src="/images/logo.png"
//                 alt="Zenix Logo"
//                 width={120}
//                 height={40}
//                 priority
//                 className="cursor-pointer w-auto h-auto"
//               />
//             </Link>
//               <button
//                 className="md:hidden text-white text-sm"
//                 onClick={() => setIsOpen(!isOpen)}
//               >
//                 ✖
//               </button>
//               </div>

//               {/* Navigation Links */}
//               <nav className="mt-10 space-y-4 text-lg">
//                 <Link href="/" className="block hover:text-gray-400">
//                   Home ▼
//                 </Link>
//                 <Link href="/about" className="block hover:text-gray-400">
//                   About
//                 </Link>
//                 <Link href="/pages" className="block hover:text-gray-400">
//                   Pages ▼
//                 </Link>
//                 <Link href="/blog" className="block hover:text-gray-400">
//                   Blog ▼
//                 </Link>
//                 <Link href="/contact" className="block hover:text-gray-400">
//                   Contact
//                 </Link>
//               </nav>
//             </div>
//           </aside>
//         </div>
//       </header>

      
//         {children}
       
      
//     </div>
//   );
// }

// export default Layout;



function Layout({ children }) {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div>
        <header className="fixed top-0 left-0 w-full text-white py-6 z-50" style={{ backgroundColor: "black", opacity: 0.9 }}>
          <div className="container mx-auto flex items-center justify-between px-6">
            <div className="flex items-center">
              <Link href="/">
                <Image src="/images/logo.png" alt="Zenix Logo" width={120} height={40} priority />
              </Link>
            </div>
  
            <nav className="hidden md:flex space-x-6 text-lg font-medium">
              <Link href="/">Home ▼</Link>
              <Link href="/about">About</Link>
              <Link href="/pages">Pages ▼</Link>
              <Link href="/blog">Blog ▼</Link>
              <Link href="/contact">Contact</Link>
            </nav>
  
            <div className="flex items-center space-x-4">
              <button className="text-lg hidden md:block hover:text-gray-400">🔍</button>
              <Link href="/get-quote" className="bg-[#ed3519] hidden md:block hover:bg-red-600 text-white font-bold py-2 px-5 rounded-full">
                GET A QUOTE
              </Link>
            </div>
  
            <button className="md:hidden p-3 text-white rounded" onClick={() => setIsOpen(!isOpen)}>☰</button>
  
            {/* Mobile Menu */}
            <aside className={`fixed top-0 left-0 h-full bg-black text-white transform transition-all duration-300 ease-in-out ${isOpen ? "w-full" : "w-0 overflow-hidden"}`}>
              <div className="p-6">
                <div className="flex justify-between items-center py-4">
                  <Link href="/">
                    <Image src="/images/logo.png" alt="Zenix Logo" width={120} height={40} priority />
                  </Link>
                  <button className="text-white text-sm" onClick={() => setIsOpen(false)}>✖</button>
                </div>
                <nav className="mt-10 space-y-4 text-lg">
                  <Link href="/" className="block hover:text-gray-400">Home ▼</Link>
                  <Link href="/about" className="block hover:text-gray-400">About</Link>
                  <Link href="/pages" className="block hover:text-gray-400">Pages ▼</Link>
                  <Link href="/blog" className="block hover:text-gray-400">Blog ▼</Link>
                  <Link href="/contact" className="block hover:text-gray-400">Contact</Link>
                </nav>
              </div>
            </aside>
          </div>
        </header>
  
        <main>{children}</main>
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
