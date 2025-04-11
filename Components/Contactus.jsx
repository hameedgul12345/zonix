import React from "react";
import { MapPin, Phone, Mail, Clock, Headphones } from "lucide-react";
import Image from "next/image";
import "animate.css";
function Contactus() {
  return (
    <>
      <section className="relative min-h-[500px] flex items-center justify-center">
        {/* Background Image with Overlay */}
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
            <h1 className="text-4xl font-bold mb-8">Contact us</h1>
            <p className="text-[14px] text-center leading-relaxed">
              Shape tomorrow's digital landscape with us. Leverage our decade of
              technical excellence to solve complex challenges. Whether
              pioneering web platforms or strategizing growth – let’s begin.
            </p>
          </div>
        </div>
      </section>

      <div className="flex flex-col items-center mt-6 justify-center px-2">
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
          <span className="text-red-500">Contact</span> & Join Together
        </h2>
        <p className="text-gray-500 mt-2 max-w-2xl text-center mx-auto">
          Whether you have a question, a project idea, or just want to say
          hello, we’re always here to talk. Reach out today and let’s start
          building your next digital success story.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center p-8 gap-8 items-center ">
        <div className="bg-white hover:animate__animated hover:animate__pulse transition-all duration-300  rounded-xl shadow-md p-6 w-full  max-w-xl text-center space-y-2">
          <div className="flex flex-row items-start justify-start gap-2">
            <MapPin className="text-[#1b2559]" size={40} />
            <div className="flex flex-col items-start justify-start">
              <h2 className="font-semibold text-[#1b2559] tracking-wide uppercase text-sm">
                Location..
              </h2>
              <h3 className="text-[#ed3519] text-lg font-bold">Office</h3>
            </div>
          </div>
          <div className="text-[#6b7280] text-start text-sm mt-2">
            <p>Peshawar, Pakistan</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 w-full  max-w-xl text-center space-y-2">
          <div className="flex flex-row items-start justify-start gap-2">
            <Phone className="text-[#1b2559]" size={40} />
            <div className="flex flex-col items-start justify-start">
              <h2 className="font-semibold text-[#1b2559] tracking-wide uppercase text-sm">
                Phone
              </h2>
              <h3 className="text-[#ed3519] text-lg font-bold">Call Us At</h3>
            </div>
          </div>
          <div className="text-[#6b7280] text-sm mt-2 flex flex-row items-center gap-4 ">
            <p> 03363223358</p>
            <p>03105362665</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6  max-w-xl w-full text-center space-y-2">
          <div className="flex flex-row items-start justify-start gap-2">
            <Mail className="text-[#1b2559]" size={40} />
            <div className="flex flex-col items-start justify-start">
              <h2 className="font-semibold text-[#1b2559] tracking-wide uppercase text-sm">
                Email
              </h2>
              <h3 className="text-[#ed3519] text-lg font-bold">Email Us At</h3>
            </div>
          </div>
          <div className="text-[#6b7280] text-sm mt-2 flex flex-col items-start ">
            <p>hamidkhan31590@gmail.com</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6  w-full text-center space-y-2">
          <div className="flex flex-row items-start justify-start gap-2">
            <Clock className="text-[#1b2559]" size={40} />
            <div className="flex flex-col items-start justify-start">
              <h2 className="font-semibold text-[#1b2559] tracking-wide uppercase text-sm">
                Availabilty
              </h2>
              <h3 className="text-[#ed3519] text-lg font-bold">
                We are available
              </h3>
            </div>
          </div>
          <div className="text-[#6b7280] flex flex-row items-center gap-4  text-sm mt-2">
            <p>24hr in day</p>
            <p>7 in a week</p>
          </div>
        </div>
      </div>

      <div className="w-[100%] overflow-x-hidden mx-auto p-6 bg-white rounded-lg flex  justify-center gap-48 md:flex-row flex-col">
        <div className="relative ">
          <div className="bg-[#F94C30] flex flex-col gap-3 justify-center items-center w-52 rounded-2xl p-4">
            <div className="bg-white p-2 w-10 rounded-full flex justify-center items-center">
              <Headphones></Headphones>
            </div>
            <h1 className="text-xl  text-white text-center font-bold">
              Chat With Live !
            </h1>
            <p className="text-[15px] text-justify text-white">
              Connect instantly with our team. We're here to answer questions,
              resolve issues, and help you 24/7. Start your conversation now!
            </p>
            <h2 className="text-[32] text-white font-semibold">LET’S CHAT</h2>
          </div>
          <Image
            src="/Images/contactgirl.png"
            width={600}
            height={300}
            alt="missing path"
            className="absolute top-0 left-44 md:w-[600px] w-[250] h-[300] md:h-[450px]"
          />
        </div>

        <div>
          <div className="mb-8">
            <div className="space-y-1">
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
                <span className="text-red-500">Reach</span> & Get In <br />{" "}
                Touch With Us !
              </h2>
            </div>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  placeholder=" Your Name*"
                  id="name"
                  required
                  className="w-full px-4 py-2 border border-gray-500 rounded-3xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="w-full px-4 border border-gray-500 rounded-3xl py-2  focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <input
                  type="tel"
                  id="number"
                  placeholder="  Number"
                  className="w-full px-4 border border-gray-500 rounded-3xl py-2  focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <input
                  type="text"
                  id="subject"
                  placeholder="Subject"
                  className="w-full border border-gray-500 rounded-3xl px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <textarea
                id="message"
                rows={4}
                placeholder=" Enter Message"
                className="w-full px-4 py-2 border border-gray-500 rounded-3xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className=" bg-[#fe4022] w-[80] text-white py-2 pr-4 pl-2 rounded-md hover:bg-blue-700 transition-colors font-medium"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contactus;
