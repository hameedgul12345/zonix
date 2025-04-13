"use client";
import React, { useState } from "react";
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
function Services() {
  const myServices = [
    {
      title1: "Website",
      title2: "Development",
      icon: <Code2 size={48} className="text-blue-500 mb-4" />,
      para:'We build fast, responsive, and user-friendly websites tailored to your brand, ensuring a strong digital presence and customer engagement.'
    
    },
    {
      title1: "Graphic",
      title2: "Designing",
      icon: <PenTool size={48} className="text-red-500 mb-4" />,
      para:'We design creative, eye-catching visuals that reflect your brand identity and captivate your audience across digital and print platforms.'
    
    },
    {
      title1: "UI/UX",
      title2: "Designing",
      icon: <LayoutDashboard size={48}className="text-purple-500 mb-4 text-center"/>,
      para:'We design intuitive, user-friendly interfaces that enhance user experience, increase engagement, and ensure smooth interaction across all devices.'
    },
    {
      title1: "Sketch",
      title2: "Designing",
      icon: <DraftingCompass size={48} className="text-green-500 mb-4" />,
      para:'We create clean, scalable designs in Sketch, ideal for modern UI/UX workflows, ensuring precision, consistency, and design-ready development handoffs.'
    },
    {
      title1: "SEO & Content",
      title2: "Writing",
      icon: <Search size={48} className="text-yellow-500 mb-4" />,
      para:'We create SEO-optimized content that boosts search rankings, drives traffic, and engages your audience with clear, compelling messaging.'
    },
    {
      title1: "Digital Market",
      title2: "Planning",
      icon: <BarChart size={48} className="text-pink-500 mb-4" />,
      para:'We help you grow online through SEO, social media, and targeted campaigns that boost visibility, traffic, and business results.'
    },
    {
      title1: "Business",
      title2: "Management",
      icon: <Briefcase size={48} className="text-indigo-500 mb-4" />,
      para:'We craft strategic plans and develop solutions that align with your goals, ensuring structured growth and long-term business success.'
    },
    {
      title1: "Market Data",
      title2: "Analyzing",
      icon: <LineChart size={48} className="text-teal-500 mb-4" />,
      para:''
    },
  ];
  const [isHovered, setIsHovered] = useState(false);
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
            <h1 className="text-4xl font-bold mb-8">Services</h1>
            <p className="text-[14px] text-center leading-relaxed">
              At Zenix, we specialize in crafting transformative digital
              solutions that propel business growth and innovation. Leveraging
              our decade-long industry expertise, our seasoned team merges
              cutting-edge technical prowess with creative problem-solving to
              deliver tailor-made services that align perfectly with your
              specific business objectives. From bespoke web development to
              strategic digital marketing, we focus on building enduring
              partnerships that help organizations successfully adapt to and
              thrive in today's rapidly evolving digital ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* <section className="py-10 px-4 bg-black">
        <div className="flex flex-col items-center ">
          <div className=" mt-8 flex flex-row items-center justify-center px-2 py-1 w-42 bg-white rounded-2xl gap-2">
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
            className="text-5xl mt-4 md:text-5xl text-center text-white  font-extrabold leading-tight"
          >
            <span className="text-[#ed3519]">Best Services </span> We Can <br />
            Offer For You !
          </h1>
        </div>
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
                // Force animation restart on next hover
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
      </section> */}

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
          <h1
            style={{ fontSize: "32px" }}
            className="text-5xl mt-4 md:text-5xl text-center text-black  font-extrabold leading-tight"
          >
            <span className="text-[#ed3519]">Best Services </span> We Can <br />
            Offer For You !
          </h1>
          <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
            From web development and UI/UX design to branding and digital
            marketing, our services are tailored to meet your unique business
            needs. With a focus on quality, innovation, and results, we ensure
            every service we offer helps you grow, engage, and succeed in the
            digital world.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 mt-8 gap-6 px-6 max-w-5xl mx-auto">
          {/* Portfolio Items */}
          {[
  {
    img: "/images/a.jpg",
    title: "Digital Marketing",
    para: "We help you grow online through SEO, social media, and targeted campaigns that boost visibility, traffic, and business results."
  },
  {
    img: "/images/b.jpg",
    title: "Web Development",
    para: "We build fast, responsive, and user-friendly websites tailored to your brand, ensuring a strong digital presence and customer engagement."
  },
  {
    img: "/images/c.jpg",
    title: "Planning And Development",
    para: "We craft strategic plans and develop solutions that align with your goals, ensuring structured growth and long-term business success."
  },
  {
    img: "/images/d.jpg",
    title: "Group Meeting",
    para: "We design intuitive, user-friendly interfaces that enhance user experience, increase engagement, and ensure smooth interaction across all devices."
  },
  {
    img: "/images/e.jpg",
    title: "Plan Implementation",
    para: "We create clean, scalable designs in Sketch, ideal for modern UI/UX workflows, ensuring precision, consistency, and design-ready development handoffs."
  },
  {
    img: "/images/f.jpg",
    title: "Business Management",
    para: "We craft strategic plans and develop solutions that align with your goals, ensuring structured growth and long-term business success."
  }
]
.map((item, index) => (
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
                     {item.para}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Services;
