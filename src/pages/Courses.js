import React, { useEffect } from "react";
import Layout from "../components/Layout";
import AOS from "aos";
AOS.init({
  duration: 1000,
});

const Courses = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <Layout>
      <div>
        <div>
          <div className="h-screen md:h-5/6 relative">
            <div className="h-3/4 pt-20 bg-theme">
              <lottie-player
                src="https://assets3.lottiefiles.com/packages/lf20_ikvz7qhc.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
          </div>
          <div className="absolute left-0 right-0 -bottom-28 md:bottom-60">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#2a2a2a"
                fill-opacity="1"
                d="M0,192L34.3,192C68.6,192,137,192,206,176C274.3,160,343,128,411,144C480,160,549,224,617,250.7C685.7,277,754,267,823,250.7C891.4,235,960,213,1029,176C1097.1,139,1166,85,1234,85.3C1302.9,85,1371,139,1406,165.3L1440,192L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
              ></path>
            </svg>
          </div>
          <div className="mt-20 md:p-2">
            <p className="text-xl font-semibold text-center">
              when you teach something you know, you get to learn twice that
              makes you have indepth knowledge of it
            </p>
            <h1 className="text-4xl text-center font-bold my -5">Because </h1>
          </div>
          <div className="font-bold text-center bg-gray-500 mx-20 p-20 text-white rounded-tl-full rounded-br-full md:mx-5">
            <h1 className="text-8xl md:text-2xl" data-aos="slide-down">
              LEARNING IS
            </h1>
            <h1 className="text-8xl md:text-2xl" data-aos="slide-up">
              CONTINIOUS
            </h1>
          </div>
          <div className="font-bold text-center mt-10">
            <h1 className="text-8xl text-green-500 md:text-2xl">
              COMING SOON...
            </h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Courses;
