import React from 'react'
import { HiArrowNarrowRight } from "react-icons/hi";
import { useParallax } from 'react-scroll-parallax';

const Home = () => {
   

  return (
      <div name="home" className="w-full h-screen bg-backg">
          {/* Contenedor */}
          <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
              <p className="text-rose">Hi, my name is</p>
              <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
                  Axel
              </h1>
              <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
                  I'm a Junior Developer
              </h2>
              <p className="text-[#8892b0] py-4 max-w-[700px]">
                  Completed Full Stack Web Development course focusing on both
                  fundamental front-end languages and server-side languages.
                  Currently, I’m focused on building responsive full-stack web
                  applications.
              </p>
              <div>
                  <button className="text-textl group border-2 px-6 py-3 my-2 flex items-center hover:bg-rose hover:border-rose">
                      View Work
                      <span className="group-hover:rotate-90 duration-300">
                          <HiArrowNarrowRight className="ml-3 " />
                      </span>
                  </button>
              </div>
          </div>
      </div>
  );
}

export default Home;