import React from "react";
import { DollarSign, Settings, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function App() {
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
            <h1 className="text-4xl font-bold mb-8">About Us</h1>
            <p className="text-[14px] text-center leading-relaxed">
              At Zenix, we're dedicated to delivering exceptional digital solutions that drive business growth. 
              With years of experience in the industry, our team of experts combines technical excellence with 
              creative thinking to provide customized services tailored to your unique needs. We believe in 
              building long-term partnerships and helping our clients navigate the ever-evolving digital landscape.
            </p>
          </div>
        </div>
      </section>
    
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
        {/* Header */}
        
        <div className=" flex flex-row mt-12 mb-4 items-center justify-center px-2 py-1 w-42 bg-white shadow-lg shadow-blue-200 rounded-2xl gap-2">
            <div className="bg-[#fe4022] text-[#fe4022] w-2 h-2 text-sm rounded-full flex items-center justify-center">
              .
            </div>
            <h3 className="text-black text-lg">Digital Agency</h3>
            <div className="bg-[#fe4022] text-[#fe4022] w-2 h-2 text-sm rounded-full flex items-center justify-center">
              .
            </div>
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
    </>
  );
}

export default App;
