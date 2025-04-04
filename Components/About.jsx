import React from "react";
import { DollarSign, Settings, Users } from "lucide-react";
import Image from "next/image";

function App() {
  return (
    <>
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
        {/* Header */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-2 h-2 rounded-full bg-red-500"></div>
          <span className="text-gray-700 uppercase font-medium">About us</span>
          <div className="w-2 h-2 rounded-full bg-red-500"></div>
        </div>

        {/* Title */}
        <div className="flex flex-row justify-between w-[100%] items-start">
          <div className="w-[35%]">
            <h1 className="text-4xl font-bold mb-6">
              <span className="text-red-500">Introduction</span>{" "}
              <span className="text-[#1e2851]">To Best Digital Agency!</span>
            </h1>
          </div>
          <div className="text-gray-600 flex flex-row justify-between gap-4 items-start w-[65%] space-y-4">
            <p className="text-justify">
              At Zonix, we specialize in transforming brands through innovative
              and results-driven digital solutions. Our goal is to help
              businesses establish a strong online presence, boost engagement,
              and maximize revenue through cutting-edge marketing strategies.
            </p>
            <p className="text-justify">
              With a dedicated team of digital experts, we combine creativity,
              technology, and data-driven insights to craft tailored solutions
              that drive measurable success. Whether you need branding, web
              development, or social media marketing, we’ve got you covered!
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Feature 1 */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
            <div className="bg-red-500 rounded-full p-4">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-lg mt-4">
              Best Price Guaranteed
            </h3>
            <p className="text-gray-600 text-sm">
              We offer high-quality digital services at competitive rates,
              ensuring you get the best value for your investment without
              compromising on excellence.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
            <div className="bg-[#1e2851] rounded-full p-4">
              <Settings className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-lg mt-4">Finance Analysis</h3>
            <p className="text-gray-600 text-sm">
              Our data-driven approach helps businesses make informed financial
              decisions, optimizing budgets for the best marketing returns. We
              provide deep insights to enhance your digital growth.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
            <div className="bg-red-500 rounded-full p-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-lg mt-4">Professional Team</h3>
            <p className="text-gray-600 text-sm">
              Our experienced and passionate team of strategists, designers, and
              developers work together to deliver outstanding results tailored
              to your brand’s unique needs.
            </p>
          </div>
        </div>
      </section>

      <section className="relative flex flex-col md:flex-row items-center justify-between gap-6 pb-8 px-16">
        {/* Left Image */}
        <div className="relative w-full md:w-2/3 rounded-xl overflow-hidden">
          <Image
            src="/images/b.jpg" // Change to actual image path
            alt="Team Meeting"
            width={700}
            height={400}
            className="rounded-xl"
          />
        </div>

        <div className="absolute right-32 top-16">
          <div className="">
            <Image
              src="/images/a.jpg" // Change to actual image path
              alt="Office Work"
              width={500}
              height={350}
              className="rounded-xl border-8 border-white"
            />
          </div>
        </div>

      
      </section>
    </>
  );
}

export default App;
