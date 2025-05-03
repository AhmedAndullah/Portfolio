// Updated page.js
"use client";
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white px-4 sm:px-6 py-10 flex flex-col items-center justify-center" style={{ fontFamily: "'Poppins', Arial, sans-serif" }}>
      {/* Hero Section */}
      <section id="home" className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-6xl gap-8 mt-12 md:mt-24 px-4">
        <div className="text-center md:text-left flex-1 md:pl-8 md:mt-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Software Engineer</h1>
          <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-md mx-auto md:mx-0">
            Hey, I'm Ahmed Abdullah. Computer Scientist, Full Stack Developer and a Robot enthusiast from Pakistan.
          </p>
          <div className="flex justify-center md:justify-start gap-4 text-4xl">
            <a href="https://www.linkedin.com/in/ahmed-abdullah-451188264/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:scale-110 transition-transform">
              <FaLinkedin />
            </a>
            <a href="https://github.com/AhmedAndullah" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black hover:scale-110 transition-transform">
              <FaGithub />
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="w-64 h-80 sm:w-72 sm:h-96 overflow-hidden shadow-lg blob-shape bg-cover bg-center" style={{ backgroundImage: "url('/PP.jpg')" }}></div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mt-20 w-full bg-[#f9f9f9] py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">Skills</h2>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {["cplusplus", "java", "python", "html5", "javascript", "css3", "react", "nodejs", "flutter", "android", "tailwindcss"].map(icon => (
              <div key={icon} className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center p-2 hover:scale-110 transition-transform">
                <Image src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-original.svg`} alt={icon} width={40} height={40} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="w-full bg-white py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="transition-transform hover:scale-105 cursor-pointer">
            <Image src="/DesktopImage.jpg" alt="Desk Setup" width={350} height={300} className="object-contain mx-auto" />
          </div>
          <div className="text-center md:text-left max-w-md flex flex-col gap-4">
            <h3 className="text-2xl font-bold text-[#3f51b5]">About Me</h3>
            <p className="text-gray-700 leading-relaxed">
              A Full-Stack Developer with skills in Java, HTML, CSS, JavaScript, React, Python, and Node Js. With 3+ years of experience, I design responsive apps with top-notch performance and UX.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="w-full bg-[#f9f9f9] py-20 px-4">
        <div className="max-w-6xl mx-auto flex flex-col gap-12 items-center">
          <h2 className="text-3xl sm:text-5xl font-bold text-center">Portfolio</h2>
          {[
            {
              title: "Book Store",
              desc: "Activity books for kids. A variety for all age groups.",
              image: "/BookStoreImage.png",
              stack: ["nodejs", "javascript", "css3"],
              github: "https://github.com/AhmedAndullah",
              live: "https://emotional-roxine-bigbyte-49fe8e8d.koyeb.app",
            },
            {
              title: "DFWCZ",
              desc: "Construction company web app for work assignments, equipment, and announcements.",
              image: "/DFWCZ.png",
              stack: ["react", "html5", "tailwindcss"],
              github: "https://github.com/AhmedAndullah",
              live: "https://app.dfwcz.com",
            },
          ].map((project, i) => (
            <div key={i} className="flex flex-col md:flex-row w-full bg-white shadow-md hover:shadow-xl rounded-2xl p-4 md:p-6 gap-6 max-w-3xl">
              <div className="w-full md:w-1/2 h-64 overflow-hidden rounded-xl relative group shadow">
                <img src={project.image} alt={project.title} className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-[5000ms] group-hover:-translate-y-[50%]" />
              </div>
              <div className="w-full md:w-1/2 flex flex-col gap-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-gray-600">{project.desc}</p>
                <div className="flex gap-2 flex-wrap mt-2">
                  {project.stack.map(tech => (
                    <img key={tech} src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-original.svg`} alt={tech} width={40} height={40} />
                  ))}
                </div>
                <div className="flex gap-4 text-sm mt-4 flex-wrap">
                  <a href={project.github} target="_blank" className="text-black hover:text-blue-500 flex items-center gap-1"><i className="fab fa-github"></i>Code</a>
                  <a href={project.live} target="_blank" className="text-black hover:text-blue-500 flex items-center gap-1"><i className="fas fa-up-right-from-square"></i>Live</a>
                </div>
              </div>
            </div>
          ))}
          <Link href="/portfolio" className="bg-[#4F46E5] text-white px-6 py-2 rounded-full hover:shadow-lg transition-shadow">Show More</Link>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full bg-white py-20 px-4">
        <h2 className="text-3xl sm:text-5xl font-bold text-[#4F46E5] mb-12 text-center">Contact</h2>
        <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full shadow-lg mb-4 text-[#4F46E5] text-3xl">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h4 className="text-lg font-bold">Location</h4>
            <p className="text-gray-600">Lahore, Pakistan</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full shadow-lg mb-4 text-[#4F46E5] text-3xl">
              <i className="fas fa-envelope"></i>
            </div>
            <h4 className="text-lg font-bold">Email</h4>
            <p className="text-gray-600">ahmed.abdullah9797@gmail.com</p>
          </div>
        </div>
      </section>
    </div>
  );
}
