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

  // const reviews = [
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
              style={{ fontSize: "32px" }}
              className="text-5xl mt-4 md:text-5xl text-center text-white font-extrabold leading-tight"
            >
              <span className="text-[#ed3519]">Digital</span> Agency You <br />
              Can Rely Upon!
            </h1>
            <p
              style={{ fontSize: "14px" }}
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

      {/* Services Section */}
      <section>
        <div className="w-full bg-[#121111]">
          <div
            className="relative"
            style={{
              minHeight: "100vh", // Full viewport height
              width: "100%", // Full width
              backgroundImage: "url('/images/earth.png')",
              backgroundPosition: "center" /* Center the image */,
              backgroundRepeat: "no-repeat" /* Do not repeat the image */,
              backgroundSize: "cover",
            }}
          >
            <div className="flex flex-col md:flex-row justify-around items-center py-4 gap-4">
              <div className="flex flex-col justify-between items-start px-6">
                <div className=" mt-16 flex flex-row items-center justify-center px-2 py-1 w-42 bg-white rounded-2xl gap-2">
                  <div className="bg-[#fe4022] text-[#fe4022] w-2 h-2 text-sm rounded-full flex items-center justify-center">
                    .
                  </div>
                  <h3 className="text-black text-lg">Digital Agency</h3>
                  <div className="bg-[#fe4022] text-[#fe4022] w-2 h-2 text-sm rounded-full flex items-center justify-center">
                    .
                  </div>
                </div>
                <h1
                  style={{ fontSize: "42px" }}
                  className="text-5xl mt-4 md:text-5xl  text-white font-extrabold leading-tight"
                >
                  <span className="text-[#ed3519]">Services</span> We Can
                  <br />
                  Help You With !
                </h1>
                <p className="text-white mt-2">
                  We help businesses with web development, SEO, and branding.
                  Our team is dedicated to creating innovative digital solutions
                  that drive success.
                </p>
                <ul className="text-white mt-2 list-inside">
                  <li>
                    ✅ Custom Website Development for a strong online presence.
                  </li>
                  <li>✅ Effective SEO strategies to boost search rankings.</li>
                  <li>
                    ✅ User-friendly UI/UX design for seamless experiences.
                  </li>
                  <li>
                    ✅ Digital marketing planning to enhance brand visibility.
                  </li>
                </ul>
                <div className="flex flex-row items-center justify-between gap-6 mt-4">
                  {/* Profile Section */}
                  <div className="flex flex-row justify-between gap-2 items-start">
                    <img
                      src="https://via.placeholder.com/50"
                      alt="Profile"
                      className="w-14 h-14 rounded-full border-2 border-red-500"
                    />
                    <div className="flex flex-col items-start justify-center">
                      <h2 className="text-lg text-white font-semibold">
                        Hameed Gul
                      </h2>
                      <p className="text-gray-400 text-sm">Owner of Zonix</p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-10 w-px bg-gray-600"></div>

                  {/* Button */}
                  <button className="bg-red-500 text-white font-semibold px-6 py-2 rounded-full hover:bg-red-600 transition">
                    MORE SERVICES
                  </button>
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-6 mt-8">
                <div className="bg-gray-800  ml-12 md:mr-0 p-6 rounded-lg text-center w-95 h-90 md:w-65 md:h-60">
                  <div className="text-red-500 text-8xl mb-2">
                    <i className="ri-webhook-line"></i>
                  </div>
                  <h3 className="font-semibold text-white text-lg">
                    Website <br /> Development
                  </h3>
                </div>
                <div className="bg-gray-800   md:mr-0 ml-12   p-6 rounded-lg text-center w-95 h-90 md:w-65 md:h-60">
                  <div className="text-red-500 text-8xl mb-2">
                    <i className="ri-sketching"></i>
                  </div>
                  <h3 className="font-semibold text-lg text-white">
                    Graphic & Sketch <br /> Designing
                  </h3>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg text-center w-95 h-90 md:w-65 md:h-60">
                  <div className="text-red-500 text-8xl mb-2">✍️</div>
                  <h3 className="font-semibold text-white text-lg">
                    SEO & Content <br /> Writing
                  </h3>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg text-center w-95 h-90 md:w-65 md:h-60">
                  <div className="text-red-500 text-8xl mb-2">
                    <i className="ri-bar-chart-2-line"></i>
                  </div>
                  <h3 className="font-semibold text-white text-lg">
                    Digital Market <br /> Planning
                  </h3>
                </div>
              </div>
            </div>
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

      <section className="py-16 px-4 overflow-hidden sm:px-6 lg:px-8 bg-gray-900  relative">
        <div
        className=""
          style={{
            backgroundImage: "url('/images/earth.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100vw",
            minHeight: "60vh",
           
          }}
        >
          <div className="flex mx-auto w-[80%] flex-col md:flex-row justify-center items-start pb-2 gap-4 md:gap-16">
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
          <div className="w-[80%] mx-auto flex flex-col md:flex-row justify-center items-center md:mt-2 mt-4  gap-12">
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
              <div className="mt-8 rounded-xl text-white pt-8 px-6 pb-2 bg-[#171717]">
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
              <div className="mt-8 rounded-xl text-white pt-8 px-6 pb-2 bg-[#171717]">
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
              <div className="mt-8 rounded-xl text-white pt-8 px-6 pb-2 bg-[#171717]">
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
        </div>
      </section>
    </>
  );
}

export default Home;
