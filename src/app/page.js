"use client";
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function HomePage() {
  return (
    <div
      className="min-h-screen bg-white px-6 sm:px-12 py-12 flex flex-col items-center justify-center"
      style={{ fontFamily: "'Poppins', Arial, sans-serif" }}
    >
      {/* Hero Section */}
      <section
        id="home"
        className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-6xl gap-8 mt-12 md:mt-24"
      >
        {/* Text Section */}
        <div className="text-left flex-1 md:pl-8 md:mt-16">
          <h1 className="text-6xl font-bold text-gray-900 mb-4 whitespace-nowrap">
            Software Engineer
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-md">
            Hey, I'm Ahmed Abdullah. Computer Scientist, Full Stack Developer
            and a Robot enthusiast from Pakistan.
          </p>
          <div className="flex gap-4 text-5xl">
            <a
              href="https://www.linkedin.com/in/ahmed-abdullah-451188264/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 transform transition-transform duration-300 hover:scale-110"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/AhmedAndullah"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-black transform transition-transform duration-300 hover:scale-110"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div
            className="w-[350px] h-[450px] overflow-hidden shadow-lg blob-shape bg-cover bg-center"
            style={{ backgroundImage: "url('/PP.jpg')" }}
          ></div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mt-20 w-screen text-center bg-[#f9f9f9] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-bold mb-12 text-4xl" style={{ fontSize: "40px" }}>
            Skills
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              "cplusplus",
              "java",
              "python",
              "html5",
              "javascript",
              "css3",
              "react",
              "nodejs",
              "flutter",
              "android",
              "tailwindcss",
            ].map((icon) => (
              <div
                key={icon}
                className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center p-2 transition-transform duration-300 hover:scale-110"
              >
                <Image
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-original.svg`}
                  alt={icon}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section
        id="about"
        className="w-full bg-white flex justify-center items-center px-[50px] py-[50px]"
      >
        <div
          className="flex flex-row items-center justify-center gap-[32px]"
          style={{ fontFamily: "'Poppins', sans-serif", width: "1166px" }}
        >
          <div className="transition-transform duration-300 hover:scale-105 cursor-pointer">
            <Image
              src="/DesktopImage.jpg"
              alt="Desk Setup Illustration"
              width={400}
              height={300}
              className="object-contain"
            />
          </div>
          <div
            className="flex-1 about-info-container flex flex-col gap-[10px]"
            style={{ maxWidth: "400px" }}
          >
            <h3 className="text-2xl font-bold text-[#3f51b5]">About Me</h3>
            <p className="text-base text-[#333] leading-relaxed">
              A Full-Stack Developer with profound skills in Java, HTML, CSS,
              JavaScript, React , Python and Node Js. With more than 3 years of
              experience in programming, I design and create stunning responsive
              applications with outstanding performance and efficiency. I
              prioritise user experience and utilise advance tools and
              techniques for coding and development.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="w-screen bg-[#f9f9f9] py-20">
        <div className="max-w-6xl mx-auto px-6 sm:px-12 flex flex-col gap-12 items-center">
          <h2 className="text-5xl font-bold text-center">Portfolio</h2>

          {[
            {
              title: "Book Store",
              desc: "Online book store for kids activity books. A variety of activity books for different age groups.",
              image: "/BookStoreImage.png",
              stack: ["nodejs", "javascript", "css3"],
              github: "https://github.com/AhmedAndullah",
              live: "https://emotional-roxine-bigbyte-49fe8e8d.koyeb.app",
            },
            {
              title: "DFWCZ",
              desc: " The contruction company web app to manage toolbox talk , assign work assignment to their workers , manage divison , equipment and announcement.",
              image: "/DFWCZ.png",
              stack: ["react", "html5", "tailwindcss"],
              github: "https://github.com/AhmedAndullah",
              live: "https://app.dfwcz.com",
            },
          ].map((project, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row items-center bg-white shadow-md hover:shadow-xl transition-shadow duration-300 rounded-2xl p-4 md:p-6 gap-6 w-[750px]"
            >
              <div className="w-[350px] h-[350px] overflow-hidden rounded-xl relative group shadow">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute top-0 left-0 w-full transition-transform duration-[5000ms] ease-in-out group-hover:-translate-y-[50%]"
                />
              </div>
              <div className="w-[350px] flex flex-col gap-4">
                <h3 className="text-xl font-bold text-black">
                  {project.title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  {project.desc}
                </p>
                <div className="flex gap-3 mt-2">
                  {project.stack.map((tech) => (
                    <img
                      key={tech}
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-original.svg`}
                      alt={tech}
                      width={40}
                      height={40}
                    />
                  ))}
                </div>
                <div className="flex gap-10 items-center text-base mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-black hover:text-blue-500 transition-colors duration-300"
                  >
                    <i className="fab fa-github text-xl"></i>
                    <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-black hover:text-blue-500 transition-colors duration-300"
                  >
                    <i className="fas fa-up-right-from-square text-sm"></i>
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
          <Link
            href="/portfolio"
            className="bg-[#4F46E5] text-white px-8 py-3 rounded-full shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            Show More
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="w-full bg-white py-20 flex flex-col items-center justify-center"
      >
        <h2 className="text-5xl font-bold text-[#4F46E5] mb-12">Contact</h2>
        <div className="flex flex-col md:flex-row gap-16 items-center justify-center">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full shadow-lg mb-4 text-[#4F46E5] text-3xl">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h4 className="text-xl font-bold">Location</h4>
            <p className="text-base text-gray-600">Lahore, Pakistan</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full shadow-lg mb-4 text-[#4F46E5] text-3xl">
              <i className="fas fa-envelope"></i>
            </div>
            <h4 className="text-xl font-bold">Email</h4>
            <p className="text-base text-gray-600">
              ahmed.abdullah9797@gmail.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
