import React, { useEffect } from "react";
import { FaCss3, FaHtml5, FaJsSquare, FaReact, FaDownload} from "react-icons/fa";
import Layout from "../components/Layout";
import AOS from "aos";
AOS.init({
  duration: 1000,
});

const Homepage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Layout>
      <div>
        {/* introduction section */}
        <div className="h-screen bg-theme">
          <div className="grid md:grid-cols-1 grid-cols-2 h-screen md:h-5/6 items-center border-4 md:border-0 border-white transform rotate-12 md:rotate-0 mx-10 z-10 bg-theme">
            <div className="h-1/2">
              <lottie-player
                src="https://assets6.lottiefiles.com/packages/lf20_gnb0jsok.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
            <div className="font-bold text-white md:px-5">
              <h1 className="text-7xl md:text-4xl" data-aos="slide-left">
                Hey, I am Tayo
                <span className="text-blue-400 mt-2"> TOLORUNJU </span>
              </h1>
              <h1 className="text-4xl md:text-xl" data-aos="slide-right">
                Frontend <b className="text-red-500">Developer</b>
              </h1>
            </div>
          </div>
        </div>

        {/* technonologies used section */}
        <div className="mt-20">
          <h1
            className="text-4xl text-blue-500 font-bold text-center my-8"
            data-aos="slide-up"
          >
            I use these technologies below:
          </h1>
          <div className="grid md:grid-cols-1 grid-cols-4">
            <FaReact
              size={180}
              color="cyan"
              className="w-full text-center mt-20 animate-bounce"
            />
            <FaJsSquare
              size={180}
              color="#F7E118"
              className="w-full text-center mt-20"
            />
            <FaHtml5
              size={180}
              color="red"
              className="w-full text-center mt-20 animate-bounce"
            />
            <FaCss3
              size={180}
              color="blue"
              className="w-full text-center mt-20"
            />
            <img
              src="assets/tailwind-csslogo.svg"
              alt="tailwind"
              className="ml-8 text-center md:m-auto m-0 md:w-52 md:mt-20 mt-20 animate-pulse"
            />
          </div>
        </div>
        {/* javascript and animation section */}
        <div className="my-20">
          <div className="text-center h-52 bg-primary">
            <h1 className="text-4xl font-bold text-white py-10">
              It is true, i love javascript
            </h1>
          </div>
          <div className="md:mx-5 mx-32 shadow-2xl bg-gray-50 -mt-20 rounded-lg hover:bg-gray-700 hover:text-white">
            <div className="h-96" data-aos="zoom-in">
              <lottie-player
                src="https://assets6.lottiefiles.com/packages/lf20_yd8fbnml.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
            <p className="text-xl font-semibold my-5 md:px-5 px-14 py-10">
              JavaScript is one of the most top-ranked programming languages
              because of its ubiquitous use on all platforms and mass adoption.
              Main Use Cases: Web Development.
            </p>
          </div>
        </div>

        {/* dev stack section */}
        <div className="my-20">
          <div className="text-center h-52 bg-red-500">
            <h1 className="text-4xl font-bold text-white py-10">
              My dev stack
            </h1>
          </div>
          <div className="md:mx-5 mx-32 shadow-2xl bg-gray-50 -mt-20 rounded-lg hover:bg-gray-700 hover:text-white">
            <div className="h-96" data-aos="zoom-in">
              <lottie-player
                src="https://assets9.lottiefiles.com/packages/lf20_aptscmnx.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
            <div className="grid grid-cols-3 p-5">
              <div>
                <h1 className="text-xl font-bold md:text-sm">FRONT END</h1>
                <hr />
                <p className="mt-2">HTML</p>
                <p className="mt-2">CSS</p>
                <p className="mt-2">JavaScript</p>
                <p className="mt-2">React</p>
                <p className="mt-2">Redux(in view)</p>
              </div>
              <div className="text-center">
                <h1 className="text-xl font-bold md:text-sm">UI UX</h1>
                <hr />
                <p className="mt-2">BootStrap</p>
                <p className="mt-2">Tailwind CSS</p>
                <p className="mt-2">Material UI(in view)</p>
              </div>
              <div className="text-right">
                <h1 className="text-xl font-bold md:text-sm">BACK-END</h1>
                <hr />
                <p className="mt-2">Python(in view)</p>
              </div>
            </div>
          </div>
        </div>

        {/* dev information */}
        <div>
          <h1 className="text-2xl text-gray-500 text-center font-bold">
            who is TAYO JAMES
          </h1>
        </div>
        <div className="h-screen md:h-96 relative text-gray-800">
          <div className="h-full">
            <lottie-player
              src="https://assets6.lottiefiles.com/packages/lf20_ivbxluat.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold">
              Hey, I am Tolorunju
              <hr />
              <pre className="text-xl md:text-sm my-5 font-merri font-semibold">
                {JSON.stringify(
                  {name: "Tolorunju Tayo James",
                    age: null,
                    gender: "Male",
                    country: "Nigeria",},
                    null,2
                    
                )}
              </pre>
            </h1>
          </div>
        </div>
        {/* a div to show a download button for resume */}
        <div className="my-10 bg-primary flex justify-center items-center p-16">
          <a href="assets/Resume-Tolorunju-Tayo_J.pdf" download>
              <div className="flex justify-center items-center flex-row bg-theme rounded-lg p-6 hover:text-primary text-white">
                  <FaDownload  size={25} className=""/>
                  <h2 className=" ml-3 font-bold text-2xl" >Download my Resume</h2>
              </div>
            </a>
          </div>
      </div>
    </Layout>
  );
};

export default Homepage;
