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
//           <h1 style={{fontSize:'42px'}} className="text-5xl mt-4 md:text-5xl text-center text-white font-extrabold leading-tight">
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
import React from "react";

function Home() {
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
          <div className="md:block hidden absolute top-12 left-0 flex-col items-center justify-center gap-6 h-screen w-full">
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
              style={{ fontSize: "42px" }}
              className="text-5xl mt-4 md:text-5xl text-center text-white font-extrabold leading-tight"
            >
              <span className="text-[#ed3519]">Digital</span> Agency You <br />
              Can Rely Upon!
            </h1>
            <p
              style={{ fontSize: "16px" }}
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
                style={{ fontSize: "16px" }}
                className="bg-[#ed3519] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-red-700 transition"
              >
                DISCOVER MORE
              </button>
              <button
                style={{ fontSize: "16px" }}
                className="bg-white text-black px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-300 transition"
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
            <div className="flex flex-col md:flex-row justify-around items-center gap-4">
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
                  <li>✅ Custom Website Development for a strong online presence.</li>
                  <li>✅ Effective SEO strategies to boost search rankings.</li>
                  <li>✅ User-friendly UI/UX design for seamless experiences.</li>
                  <li>✅ Digital marketing planning to enhance brand visibility.</li>
                 
                </ul>
              </div>
              <div className="flex flex-wrap justify-center gap-6 mt-8">
                <div className="bg-gray-800 p-6 rounded-lg text-center w-60">
                  <div className="text-red-500 text-4xl mb-2">💻</div>
                  <h3 className="font-semibold text-lg">Website Development</h3>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg text-center w-60">
                  <div className="text-red-500 text-4xl mb-2">🎨</div>
                  <h3 className="font-semibold text-lg">
                    Graphic & Sketch Designing
                  </h3>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg text-center w-60">
                  <div className="text-red-500 text-4xl mb-2">✍️</div>
                  <h3 className="font-semibold text-lg">
                    SEO & Content Writing
                  </h3>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg text-center w-60">
                  <div className="text-red-500 text-4xl mb-2">📊</div>
                  <h3 className="font-semibold text-lg">
                    Digital Market Planning
                  </h3>
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
