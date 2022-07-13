import React, { useEffect } from "react";
import Layout from "../components/Layout";
import projectData from "../resourses/ProjectData";
import AOS from "aos";
AOS.init({
  duration: 1000,
});

const Projects = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <Layout>
      <div className="mt-20">
        <div className="h-screen">
          <div className="h-3/4">
            <lottie-player
              src="https://assets7.lottiefiles.com/packages/lf20_ygiuluqn.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>
          <p className="text-xl font-semibold text-center">
            Good ideas are not adopted automatically. They must be driven into
            practice with courageous patience
          </p>
          <h1
            className="text-4xl text-center font-bold mt-5"
            data-aos="slide-up"
          >
            Because
          </h1>
        </div>
        <div className="font-bold text-center bg-red-500 mx-20 p-20 text-white rounded-tl-full rounded-br-full md:mx-5">
          <h1 className="text-8xl md:text-2xl" data-aos="slide-right">
            THE GAME IS ...
          </h1>
          <h1 className="text-8xl md:text-2xl" data-aos="slide-left">
            CONSISTANCY
          </h1>
        </div>
        <div className="grid grid-cols-3 mt-20 md:grid-cols-1 items-center justify-center gap-10 mx-20 md:mx-10">
          {projectData.map((project, id) => {
            return (
              <div key={id}>
                <div className="relative p-10 border-2 border-gray-400 rounded-tr-3xl rounded-bl-3xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-52"
                  />
                  <div className="absolute inset-0 flex items-center justify-center flex-col opacity-0 hover:opacity-80 bg-black rounded-tr-3xl rounded-bl-3xl">
                    <h1 className="text-4xl font-semibold text-white">
                      {project.title}
                    </h1>
                    <button
                      className={`border-2 border-white rounded text-white hover:bg-green-500 py-2 px-5`}
                    >
                      <a target={`_blank`} href={project.website}>
                        DEMO
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
