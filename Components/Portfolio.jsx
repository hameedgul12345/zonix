import Image from "next/image";
import React from "react";

import { ArrowRight } from "lucide-react";
function Portfolio() {
  return (
    <>
      <section className="relative min-h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-[url('/images/b.jpg')] bg-cover bg-center"
            style={{ backgroundImage: "url('/images/c.jpg')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/50"></div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl font-bold mb-8">Portfolio & Projects</h1>
            <p className="text-[14px] text-center leading-relaxed">
              At Zonix, our portfolio reflects a legacy of innovation and
              impact. Each project we undertake is a testament to our commitment
              to delivering purposeful and high-performing digital solutions.
              Backed by over a decade of hands-on experience, our team fuses
              technical excellence with visionary design to bring bold ideas to
              life. From custom web applications to immersive brand experiences,
              our projects are tailored to solve real-world challenges and drive
              measurable results. Explore how we've helped forward-thinking
              organizations stay ahead in a fast-moving digital world.
            </p>
          </div>
        </div>
      </section>
      <div className="bg-white min-h-screen p-6 flex flex-col items-center justify-center">
        <section className=" max-w-7xl w-full py-12 px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Text Section */}
          <div>
            <p className="text-[#ED3519] font-medium mb-2">– My Portfolio</p>
            <h2 className="text-3xl md:text-4xl font-bold ">
              My Latest <span className="italic text-[#ED3519]">Projects</span>
            </h2>
          </div>

          {/* Button */}
          <button className="flex items-center rounded-full overflow-hidden shadow-md hover:scale-105 transition-transform">
            <span className="bg-[#101828] text-white px-6 py-3 font-medium rounded-l-full">
              View All Projects
            </span>
            <span className="bg-[#ED3519] w-[32] py-3.5 rounded-r-full flex items-center justify-center">
              <ArrowRight size={20} className="text-white" />
            </span>
          </button>
        </section>
        <div className="bg-[#101828] rounded-2xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6 max-w-7xl w-full shadow-lg">
          {/* Left Section */}
          <div className="text-white max-w-xl space-y-4">
            <div className="flex gap-2">
              <span className="bg-green-300 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                Web Design
              </span>
              <span className="bg-green-300 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                Landing Page
              </span>
              <span className="bg-green-300 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                Wireframe
              </span>
            </div>
            <h2 className="text-3xl font-bold leading-tight">
              Fitness App - Fitness and Workout App Landing Page
            </h2>
            <p className="text-purple-100">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="flex items-center gap-2 bg-green-300 text-green-900 px-5 py-2 rounded-full font-semibold w-max hover:bg-green-400">
              <span className="text-xl">→</span>
              View Details
            </button>
          </div>

          {/* Right Section - Image */}
          <div className="rounded-xl overflow-hidden w-full max-w-md shadow-lg">
            <Image
              src="/images/a.jpg"
              alt="Fitness App UI"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        <div className="bg-[#101828] mt-8 rounded-2xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6 max-w-7xl w-full shadow-lg">
          {/* Right Section - Image */}
          <div className="rounded-xl overflow-hidden w-full max-w-md shadow-lg">
            <Image
              src="/images/a.jpg"
              alt="Fitness App UI"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Left Section */}
          <div className="text-white max-w-xl space-y-4">
            <div className="flex gap-2">
              <span className="bg-green-300 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                Web Design
              </span>
              <span className="bg-green-300 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                Landing Page
              </span>
              <span className="bg-green-300 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                Wireframe
              </span>
            </div>
            <h2 className="text-3xl font-bold leading-tight">
              Fitness App - Fitness and Workout App Landing Page
            </h2>
            <p className="text-purple-100">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="flex items-center gap-2 bg-green-300 text-green-900 px-5 py-2 rounded-full font-semibold w-max hover:bg-green-400">
              <span className="text-xl">→</span>
              View Details
            </button>
          </div>
        </div>

        <div className="bg-[#101828] rounded-2xl mt-8 p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6 max-w-7xl w-full shadow-lg">
          {/* Left Section */}
          <div className="text-white max-w-xl space-y-4">
            <div className="flex gap-2">
              <span className="bg-green-300 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                Web Design
              </span>
              <span className="bg-green-300 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                Landing Page
              </span>
              <span className="bg-green-300 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                Wireframe
              </span>
            </div>
            <h2 className="text-3xl font-bold leading-tight">
              Fitness App - Fitness and Workout App Landing Page
            </h2>
            <p className="text-purple-100">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="flex items-center gap-2 bg-green-300 text-green-900 px-5 py-2 rounded-full font-semibold w-max hover:bg-green-400">
              <span className="text-xl">→</span>
              View Details
            </button>
          </div>

          {/* Right Section - Image */}
          <div className="rounded-xl overflow-hidden w-full max-w-md shadow-lg">
            <Image
              src="/images/a.jpg"
              alt="Fitness App UI"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        <div className="bg-[#101828] mt-8 rounded-2xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6 max-w-7xl w-full shadow-lg">
          {/* Right Section - Image */}
          <div className="rounded-xl overflow-hidden w-full max-w-md shadow-lg">
            <Image
              src="/images/a.jpg"
              alt="Fitness App UI"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Left Section */}
          <div className="text-white max-w-xl space-y-4">
            <div className="flex gap-2">
              <span className="bg-green-300 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                Web Design
              </span>
              <span className="bg-green-300 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                Landing Page
              </span>
              <span className="bg-green-300 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                Wireframe
              </span>
            </div>
            <h2 className="text-3xl font-bold leading-tight">
              Fitness App - Fitness and Workout App Landing Page
            </h2>
            <p className="text-purple-100">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="flex items-center gap-2 bg-green-300 text-green-900 px-5 py-2 rounded-full font-semibold w-max hover:bg-green-400">
              <span className="text-xl">→</span>
              View Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
