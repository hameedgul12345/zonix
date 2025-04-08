// import React from "react";

// function Home() {
//   return (
//     <>
//     {/* Hero Section */}
//       <section>
//       <div
//         className="my-20 relative"
//         style={{
//           height: "100vh", // Full viewport height
//           width: "100%", // Full width
//           backgroundImage: "url('/images/office4.jpg')",
//           backgroundPosition: "fixed", /* Center the image */
//           backgroundRepeat: "no-repeat",/* Do not repeat the image */
//           backgroundSize: "cover",
//         }}
//       >
//         <div
//           style={{

//             width: "100%",
//             height: "100vh",
//             backgroundColor: "black ",
//             opacity: 0.5,
//           }}
//         ></div>
//         <div className="md:block hidden absolute top-12 left-0 flex-col items-center justify-center gap-6 h-screen w-full">
//           <div className=" mx-auto flex flex-row items-center justify-center px-2 py-1 w-42 bg-white rounded-2xl gap-2">
//             <div className="bg-[#fe4022] text-[#fe4022] w-2 h-2 text-sm rounded-full flex items-center justify-center">
//               .
//             </div>
//             <h3 className="text-blacktext-lg">Digital Agency</h3>
//             <div className="bg-[#fe4022] text-[#fe4022] w-2 h-2 text-sm rounded-full flex items-center justify-center">
//               .
//             </div>
//           </div>
//           <h1 style={{fontSize:'42px'}} className="text-5xl mt-4 md:text-5xl text-center text-black font-extrabold leading-tight">
//             <span className="text-[#ed3519]">Digital</span> Agency You <br />
//             Can Rely Upon!
//           </h1>
//           <p style={{fontSize:'16px'}} className="mt-4 px-6 text-center text-white">
//             We help businesses with web development, SEO, and branding. Our team
//             is <br />
//             dedicated to creating innovative digital solutions that drive
//             success.
//             <br /> Whether you need a new website, improved search rankings,
//             <br /> or a fresh brand identity, we’re here to help!
//           </p>

//           <div className="mt-6 flex justify-center gap-4">
//             <button style={{fontSize:'16px'}} className="bg-[#ed3519] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-red-700 transition">
//               DISCOVER MORE
//             </button>
//             <button style={{fontSize:'16px'}} className="bg-white text-black px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-300 transition">
//               HIRE US NOW
//             </button>
//           </div>
//         </div>
// <div className="md:hidden absolute top-2 left-0 flex flex-col items-center  justify-center h-screen w-full px-4 text-center">
//   {/* Small Banner */}
//   <div className="flex flex-row items-center justify-center px-3 py-2 bg-white rounded-3xl space-x-2 mb-4">
//     <div className="bg-[#fe4022] w-2 h-2 rounded-full"></div>
//     <h3 className="text-black text-lg font-semibold">Digital Agency</h3>
//     <div className="bg-[#fe4022] w-2 h-2 rounded-full"></div>
//   </div>

//   {/* Heading */}
//   <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white">
//     <span className="text-[#ed3519]">Digital</span> Agency You{" "}
//     <br className="hidden sm:block" />
//     Can Rely Upon!
//   </h1>

//   {/* Description */}
//   <p className="mt-4 text-base sm:text-lg text-gray-300 px-2 sm:px-6">
//     We help businesses with web development, SEO, and branding. Our team
//     is dedicated to creating innovative digital solutions that drive
//     success. Whether you need a new website, improved search rankings,
//     or a fresh brand identity, we’re here to help!
//   </p>

//   {/* Buttons */}
//   <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
//     <button className="bg-[#ed3519] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition">
//       DISCOVER MORE
//     </button>
//     <button className="bg-white text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-300 transition">
//       HIRE US NOW
//     </button>
//   </div>
// </div>

//         <div></div>
//       </div>
//       </section>
// {/* Services Section */}
// <section>
//   <div className="w-full min-h-screen bg-[#292929]">
//   <div
//         className="my-20 relative"
//         style={{
//           height: "100vh", // Full viewport height
//           width: "100%", // Full width
//           backgroundImage: "url('/images/earth.png')",
//           backgroundPosition: "fixed", /* Center the image */
//           backgroundRepeat: "no-repeat",/* Do not repeat the image */
//           backgroundSize: "cover",
//         }}
//       ></div>
//   </div>
// </section>
//     </>
//   );
// }

// export default Home;
"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import {
  Code2,
  PenTool,
  LayoutDashboard,
  DraftingCompass,
  Search,
  BarChart,
  Briefcase,
  LineChart,
} from "lucide-react";
import "animate.css";
function Home() {
  const teamMembers = [
    {
      name: "Sony Madison",
      role: "CEO, Director",
      image: "/images/a.jpg",
    },
    {
      name: "Hary Warth",
      role: "Head Manager",
      image: "/images/b.jpg",
    },
    {
      name: "Jenny Hobb",
      role: "Branch Manager",
      image: "/images/c.jpg",
    },
    {
      name: "Johny Smith",
      role: "Supervisor",
      image: "/images/d.jpg",
    },
  ];

  //   {
  //     id: 1,
  //     text: "Vero id posture tempus aspernatur quaerat mollis voluptatum eveniet porro viverra libero habitasse porro.",
  //     name: "John Smith",
  //     role: "clients",
  //   },
  //   {
  //     id: 2,
  //     text: "Vero id posture tempus aspernatur quaerat mollis voluptatum eveniet porro viverra libero habitasse porro.",
  //     name: "Miley Cyrus",
  //     role: "Supervisor",
  //   },
  //   {
  //     id: 3,
  //     text: "Vero id posture tempus aspernatur quaerat mollis voluptatum eveniet porro viverra libero habitasse porro.",
  //     name: "Thomas Wolter",
  //     role: "Customer",
  //   },
  // ];
  const reviews = [
    {
      id: 1,
      name: "John Smith",
      role: "Client",
      text: "Vero id posuere tempus aspernatur quaerat mollis voluptatum eveniet porro viverra libero habitasse porro.",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Customer",
      text: "Vero id posuere tempus aspernatur quaerat mollis voluptatum eveniet porro viverra libero habitasse porro.",
    },
    {
      id: 3,
      name: "Michael Brown",
      role: "Client",
      text: "Vero id posuere tempus aspernatur quaerat mollis voluptatum eveniet porro viverra libero habitasse porro.",
    },
  ];
  const [hover, setHover] = useState(false);
  const myServices = [
    {
      title1: "Website",
      title2: "Development",
      icon: <Code2 size={48} className="text-blue-500 mb-4" />,
    },
    {
      title1: "Graphic",
      title2: "Designing",
      icon: <PenTool size={48} className="text-red-500 mb-4" />,
    },
    {
      title1: "UI/UX",
      title2: "Designing",
      icon: (
        <LayoutDashboard
          size={48}
          className="text-purple-500 mb-4 text-center"
        />
      ),
    },
    {
      title1: "Sketch",
      title2: "Designing",
      icon: <DraftingCompass size={48} className="text-green-500 mb-4" />,
    },
    {
      title1: "SEO & Content",
      title2: "Writing",
      icon: <Search size={48} className="text-yellow-500 mb-4" />,
    },
    {
      title1: "Digital Market",
      title2: "Planning",
      icon: <BarChart size={48} className="text-pink-500 mb-4" />,
    },
    {
      title1: "Business",
      title2: "Management",
      icon: <Briefcase size={48} className="text-indigo-500 mb-4" />,
    },
    {
      title1: "Market Data",
      title2: "Analyzing",
      icon: <LineChart size={48} className="text-teal-500 mb-4" />,
    },
  ];const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      {/* Hero Section */}
      <section>
        <div
          className="relative"
          style={{
            height: "100vh", // Full viewport height
            width: "100%", // Full width
            backgroundImage: "url('/images/office4.jpg')",
            backgroundPosition: "center" /* Center the image */,
            backgroundRepeat: "no-repeat" /* Do not repeat the image */,
            backgroundSize: "cover",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100vh",
              backgroundColor: "black",
              opacity: 0.5,
            }}
          ></div>
          <div className="md:block hidden absolute top-20 left-0 flex-col items-center justify-center gap-6 h-screen w-full">
            <div className="mx-auto mt-16 flex flex-row items-center justify-center px-2 py-1 w-42 bg-white rounded-2xl gap-2">
              <div className="bg-[#fe4022] text-[#fe4022] w-2 h-2 text-sm rounded-full flex items-center justify-center">
                .
              </div>
              <h3 className="text-black text-lg">Digital Agency</h3>
              <div className="bg-[#fe4022] text-[#fe4022] w-2 h-2 text-sm rounded-full flex items-center justify-center">
                .
              </div>
            </div>
            <h1
              style={{ fontSize: "36px" }}
              className="text-5xl mt-4 md:text-5xl text-center text-white font-extrabold leading-tight"
            >
              <span className="text-[#ed3519]">Digital</span> Agency You <br />
              Can Rely Upon!
            </h1>
            <p
              style={{ fontSize: "16px" ,lineHeight:'18px'}}
              className="mt-4 px-6 text-center text-white"
            >
              We help businesses with web development, SEO, and branding. Our
              team is <br />
              dedicated to creating innovative digital solutions that drive
              success.
              <br /> Whether you need a new website, improved search rankings,
              <br /> or a fresh brand identity, we’re here to help!
            </p>

            <div className="mt-6 flex justify-center gap-4">
              <button
                style={{ fontSize: "14px" }}
                className="bg-[#ed3519] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-red-700 transition"
              >
                DISCOVER MORE
              </button>
              <button
                style={{ fontSize: "14px" }}
                className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-300 transition"
              >
                HIRE US NOW
              </button>
            </div>
          </div>
        </div>
        <div className="md:hidden mt-20 absolute top-2 left-0 flex flex-col items-center  justify-center min-h-full w-full px-4 text-center">
          {/* Small Banner */}
          <div className="flex flex-row items-center justify-center px-3 py-2 bg-white rounded-3xl space-x-2 mb-4">
            <div className="bg-[#fe4022] w-2 h-2 rounded-full"></div>
            <h3 className="text-black text-lg font-semibold">Digital Agency</h3>
            <div className="bg-[#fe4022] w-2 h-2 rounded-full"></div>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white">
            <span className="text-[#ed3519]">Digital</span> Agency You{" "}
            <br className="hidden sm:block" />
            Can Rely Upon!
          </h1>

          {/* Description */}
          <p className="mt-4 text-base sm:text-lg text-gray-300 px-2 sm:px-6">
            We help businesses with web development, SEO, and branding. Our team
            is dedicated to creating innovative digital solutions that drive
            success. Whether you need a new website, improved search rankings,
            or a fresh brand identity, we’re here to help!
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-[#ed3519] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition">
              DISCOVER MORE
            </button>
            <button className="bg-white text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-300 transition">
              HIRE US NOW
            </button>
          </div>
        </div>
      </section>

   
      <section className="w-full bg-[#101828] py-8">
        <div className="max-w-6xl pt-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {myServices.map((service, index) => (
              <div
                key={index}
                className={`p-8 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group relative
                  animate__animated ${isHovered ? 'animate__pulse' : ''}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => {
                  setIsHovered(false);
                  setTimeout(() => setIsHovered(null), 50);
                }}
              >
                <div className="text-orange-500 text-6xl flex flex-row justify-center items-center">
                  {service.icon}
                </div>
                <div className="space-y-0">
                  <h3 className="text-2xl font-bold text-white">
                    {service.title1}
                  </h3>
                  <h3 className="text-2xl font-bold text-white">
                    {service.title2}
                  </h3>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="text-center py-12 bg-white">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center px-2">
          <div className=" flex flex-row items-center justify-center px-2 py-1 w-42 bg-white shadow-lg shadow-blue-200 rounded-2xl gap-2">
            <div className="bg-[#fe4022] text-[#fe4022] w-2 h-2 text-sm rounded-full flex items-center justify-center">
              .
            </div>
            <h3 className="text-black text-lg">Digital Agency</h3>
            <div className="bg-[#fe4022] text-[#fe4022] w-2 h-2 text-sm rounded-full flex items-center justify-center">
              .
            </div>
          </div>
          <h2 className="text-3xl font-bold mt-3">
            <span className="text-red-500">Activities</span> We Completed
          </h2>
          <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
            Sint nascetur facere, delectus conubia consequuntur, nonummy
            distinctio! Non officiis, id natus non nisi provident justo.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 max-w-5xl mx-auto">
          {/* Portfolio Items */}
          {[
            {
              img: "/images/a.jpg",
              title: "Digital Marketing",
            },
            { img: "/images/b.jpg", title: "Web Development" },
            { img: "/images/c.jpg", title: "Planning And Development" },
            { img: "/images/d.jpg", title: "Group Meeting" },
            { img: "/images/e.jpg", title: "Plan Implementation" },
            { img: "/images/f.jpg", title: "Business Management" },
          ].map((item, index) => (
            <div
              key={index}
              className="relative group rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              {item.title && (
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0)", // Default transparent
                    transition: "background-color 0.75s ease-in-out",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      "rgba(0, 0, 0, 0.5)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0)")
                  }
                  className="absolute inset-0  flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
                >
                  <div className="text-white text-center p-4">
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p className="text-sm">
                      Ullam aliquet metus dignissim scelerisque. Anim
                      exercitation officiis, accusamus.
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="bg-gray-100 py-12 px-6 text-center">
          <div className="mx-auto mt-16 flex flex-row items-center justify-center px-2 py-1 w-42 bg-white rounded-2xl gap-2">
            <div className="bg-[#fe4022] text-[#fe4022] w-2 h-2 text-sm rounded-full flex items-center justify-center">
              .
            </div>
            <h3 className="text-black text-lg">Digital Agency</h3>
            <div className="bg-[#fe4022] text-[#fe4022] w-2 h-2 text-sm rounded-full flex items-center justify-center">
              .
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mt-2">
            <span className="text-red-500">Team</span> Members
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mt-4">
            Sint nascetur facere, delectus conubia consequuntur, nonummy
            distinctio! Non officiis, id natus non nisl provident justo.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white min-h-[320px] rounded-lg relative shadow-lg "
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-60 object-cover rounded-md mb-4"
                />
                <div className="flex flex-col justify-center  bg-[#F94C30] w-46 h-18 items-center absolute top-50 left-[25%] md:left-12  rounded-xl">
                  <h3 className="text-lg font-bold text-white">
                    {member.name}
                  </h3>
                  <p className="text-white font-semibold">{member.role}</p>
                </div>
                {/* Social Icons & Search */}
                <div className="flex items-center absolute top-70 left-[25%] md:left-12  space-x-4">
                  <div>
                    <Link href="https://www.facebook.com/profile.php?id=61553447804011&mibextid=ZbWKwL">
                      <i className="ri-facebook-circle-fill  text-black text-xl  hover:bg-[#F94C30] hover:text-white p-1 rounded-full "></i>
                    </Link>
                  </div>
                  <div>
                    <Link href="https://www.linkedin.com/in/hameed-gul-408453269/">
                      <i className="ri-linkedin-fill text-black text-xl   hover:bg-[#F94C30] hover:text-white p-1 rounded-full "></i>
                    </Link>
                  </div>
                  <div>
                    <Link href="https://github.com/hameedgul12345">
                      <i className="ri-github-fill text-black text-xl hover:bg-[#F94C30] hover:text-white p-1 rounded-full "></i>
                    </Link>
                  </div>
                  <div>
                    <Link href="https://www.instagram.com/hameedgulfirebase31590/">
                      <i className="ri-instagram-line  text-black text-xl  hover:bg-[#F94C30] hover:text-white p-1 rounded-full "></i>
                    </Link>
                  </div>

                  {/* Get a Quote Button */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 w-[100%] px-4 overflow-hidden sm:px-6 lg:px-8 bg-black  relative">
      <div className="flex mx-auto w-[100%] flex-col md:flex-row justify-center items-start pb-2 gap-4 md:gap-16">
            <div className="flex flex-col md:w-[33%] w-[100%] justify-between items-start">
              <div className=" md:mt-16 flex flex-row items-center justify-center py-1 w-42 bg-white rounded-2xl gap-2">
                <div className="bg-[#fe4022] text-[#fe4022] w-2 h-2 text-sm rounded-full flex items-center justify-center">
                  .
                </div>
                <h3 className="text-black text-sm">CLIENT REVIEWS</h3>
                <div className="bg-[#fe4022] text-[#fe4022] w-2 h-2 text-sm rounded-full flex items-center justify-center">
                  .
                </div>
              </div>

              <div className="flex flex-row justify-center items-center gap-4">
                <h1
                  style={{ fontSize: "34px" }}
                  className="text-[#ed3519] text-lg md:mt-4 md:text-5lg font-semibold leading-tight"
                >
                  Review's
                </h1>
                <h1
                  style={{ fontSize: "34px" }}
                  className="text-lg md:mt-4 md:text-sm text-white font-semibold leading-tight"
                >
                  Of Clients
                </h1>
              </div>
            </div>
            <div className="md:w-[33%] w-[100%] text-white md:mt-16">
              <p>
                Vero id posuere tempus aspernatur quaerat mollis voluptatum
                eveniet porro viverra libero habitasse porro fames quos pharetra
                diam cupidatat ligula reet.
              </p>
            </div>
            <div className="md:w-[25%] w-[100%]">
              <div className=" md:mt-16 flex flex-row items-center justify-center px-2 py-4 w-42 bg-white rounded-4xl gap-2">
                <div className="bg-[#fe4022] text-[#fe4022] w-2 h-2 text-sm rounded-full flex items-center justify-center">
                  .
                </div>
                <h3 className="text-black text-sm">VIEW MORE</h3>
                <div className="bg-[#fe4022] text-[#fe4022] w-2 h-2 text-sm rounded-full flex items-center justify-center">
                  .
                </div>
              </div>
            </div>
          </div>
          <div className="w-[100%] mx-auto flex flex-col md:flex-row justify-center items-center md:mt-2 mt-4  gap-12">
            <div className="md:w-[33%] w-[50%S] relative ">
              {/* Image positioned above the box */}
              <div className="absolute -top-0 left-14 transform -translate-x-1/2 z-10">
                <Image
                  src="/images/profile.webp"
                  alt="John Smith"
                  width={60}
                  height={60}
                  className="border-4 border-white rounded-full"
                />
              </div>

              {/* Dark box positioned below */}
              <div className="mt-8 rounded-xl text-white pt-8 px-6 pb-2  bg-gray-800  hover:bg-gray-700">
                <div>
                  <p className="text-sm pt-2">
                    Vero id posuere tempus aspernatur quaerat mollis voluptatum
                    eveniet porro viverra libero habitasse porro.
                  </p>
                </div>
                <hr  className="text-[#292929] mt-2"/>
                <div className="flex flex-row justify-between items-start gap-4">
                  <div className="flex flex-col py-2 justify-center items-start gap-1">
                    <h1>John Smith</h1>
                    <h3 className="text-sm">Customer</h3>
                  </div>
                  <div className="flex flex-row justify-center items-center py-2 gap-2">
                  <i className="ri-star-fill text-yellow-300 text-sm"></i>
                  <i className="ri-star-fill text-yellow-300 text-sm"></i>
                  <i className="ri-star-fill text-yellow-300 text-sm"></i>
                  <i className="ri-star-fill text-yellow-300 text-sm"></i>
                  <i className="ri-star-fill text-yellow-300 text-sm"></i>
                  
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-[33%] w-[50%S] relative ">
              {/* Image positioned above the box */}
              <div className="absolute -top-0 left-14 transform -translate-x-1/2 z-10">
                <Image
                  src="/images/profile.webp"
                  alt="John Smith"
                  width={60}
                  height={60}
                  className="border-4 border-white rounded-full"
                />
              </div>

              {/* Dark box positioned below */}
              <div className="mt-8 rounded-xl text-white pt-8 px-6 pb-2  bg-gray-800  hover:bg-gray-700">
                <div>
                  <p className="text-sm pt-2">
                    Vero id posuere tempus aspernatur quaerat mollis voluptatum
                    eveniet porro viverra libero habitasse porro.
                  </p>
                </div>
                <hr  className="text-[#292929] mt-2"/>
                <div className="flex flex-row justify-between items-start gap-4">
                  <div className="flex flex-col py-2 justify-center items-start gap-1">
                    <h1>John Smith</h1>
                    <h3 className="text-sm">Customer</h3>
                  </div>
                  <div className="flex flex-row justify-center items-center py-2 gap-2">
                  <i className="ri-star-fill text-yellow-300 text-sm"></i>
                  <i className="ri-star-fill text-yellow-300 text-sm"></i>
                  <i className="ri-star-fill text-yellow-300 text-sm"></i>
                  <i className="ri-star-fill text-yellow-300 text-sm"></i>
                  <i className="ri-star-fill text-yellow-300 text-sm"></i>
                  
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-[33%] w-[50%S] relative ">
              {/* Image positioned above the box */}
              <div className="absolute -top-0 left-14 transform -translate-x-1/2 z-10">
                <Image
                  src="/images/profile.webp"
                  alt="John Smith"
                  width={60}
                  height={60}
                  className="border-4 border-white rounded-full"
                />
              </div>

              {/* Dark box positioned below */}
              <div className="mt-8 rounded-xl text-white pt-8 px-6 pb-2  bg-gray-800  hover:bg-gray-700">
                <div>
                  <p className="text-sm pt-2">
                    Vero id posuere tempus aspernatur quaerat mollis voluptatum
                    eveniet porro viverra libero habitasse porro.
                  </p>
                </div>
                <hr  className="text-[#292929] mt-2"/>
                <div className="flex flex-row justify-between items-start gap-4">
                  <div className="flex flex-col py-2 justify-center items-start gap-1">
                    <h1>John Smith</h1>
                    <h3 className="text-sm">Customer</h3>
                  </div>
                  <div className="flex flex-row justify-center items-center py-2 gap-2">
                  <i className="ri-star-fill text-yellow-300 text-sm"></i>
                  <i className="ri-star-fill text-yellow-300 text-sm"></i>
                  <i className="ri-star-fill text-yellow-300 text-sm"></i>
                  <i className="ri-star-fill text-yellow-300 text-sm"></i>
                  <i className="ri-star-fill text-yellow-300 text-sm"></i>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
    </>
  );
}

export default Home;

