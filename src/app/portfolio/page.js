"use client";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#f9f9f9] py-5 px-4 sm:px-6" style={{ fontFamily: "'Poppins', Arial, sans-serif" }}>
      <section className="w-full bg-[#f9f9f9] py-16 sm:py-20">
        <div className="max-w-6xl mx-auto flex flex-col gap-12 items-center">
          <h2 className="text-3xl sm:text-5xl font-bold text-center">Portfolio</h2>

          {[
            {
              title: "Car Rental",
              desc: "A car booking web application to find, book and rent cars on all platforms with ease. CarHub has a great catalogue of automobile.",
              image: "/CarRental.png",
              stack: ["react", "javascript", "css3"],
              github: "https://github.com/AhmedAndullah",
              live: "https://hybridcarparts.vercel.app",
            },
            {
              title: "Fashion E-Commerce",
              desc: "Online fashion store for shopping. Trending quality products with ease of shopping and reliable payment methods.",
              image: "/Fashion E-Commerce.png",
              stack: ["html5", "css3", "javascript"],
              github: "https://github.com/AhmedAndullah",
            },
            {
              title: "Open Dot",
              desc: "Online social media platform just like Reddit with more features. Includes media and file sharing.",
              image: "/OpenDot.jpg",
              stack: ["flutter", "firebase", "android"],
              github: "https://github.com/AhmedAndullah",
              live: "https://opendot.vercel.app",
            },
            {
              title: "Green Heaven",
              desc: "E-Commerce for plants. Various indoor & outdoor plants and flowers are exhibited in the store.",
              image: "/GreenHeaven.jpg",
              stack: ["flutter", "dart"],
              github: "https://github.com/AhmedAndullah",
              live: "https://e-commerce-flutter-two.vercel.app",
            },
          ].map((project, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row items-center bg-white shadow-md hover:shadow-xl transition-shadow duration-300 rounded-2xl p-4 md:p-6 gap-6 w-full max-w-3xl"
            >
              <div className="w-full md:w-[350px] h-[250px] md:h-[350px] overflow-hidden rounded-xl relative group shadow">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-[5000ms] ease-in-out group-hover:-translate-y-[50%]"
                />
              </div>
              <div className="w-full md:w-[350px] flex flex-col gap-4">
                <h3 className="text-xl font-bold text-black">{project.title}</h3>
                <p className="text-base text-gray-600 leading-relaxed">{project.desc}</p>
                <div className="flex gap-3 mt-2 flex-wrap">
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
                <div className="flex gap-6 items-center text-base mt-4 flex-wrap">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-black hover:text-blue-500 transition-colors duration-300"
                  >
                    <i className="fab fa-github text-xl"></i>
                    <span>Code</span>
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-black hover:text-blue-500 transition-colors duration-300"
                    >
                      <i className="fas fa-up-right-from-square text-sm"></i>
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
