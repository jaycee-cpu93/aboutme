import React, { useEffect } from "react";
import Layout from "../components/Layout";

const Contact = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <Layout>
      <div>
        <div className="h-screen mt-6 md:h-96">
        <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_l1mdtmmb.json"  background="transparent"  speed="1" loop autoplay></lottie-player>
        </div>
        <div className="w-full flex justify-center">
          <div className="md:w-11/12 w-1/2 p-10 shadow-2xl bg-gray-50 rounded-md">
            <h1 className="text-2xl font-semibold">Contact me</h1>
            <input
              type="text"
              placeholder="Name"
              className="w-full border-2 border-gray-400 outline-gray-600 rounded-md p-1 shadow-lg mt-5"
            />
            <input
              type="text"
              placeholder="Email"
              className="w-full border-2 border-gray-400 outline-gray-600 rounded-md p-1 shadow-lg mt-5"
            />
            <textarea
              type="text"
              placeholder="Query"
              className="w-full border-2 border-gray-400 outline-gray-600 rounded-md p-1 shadow-lg mt-5"
            />
            <button className="bg-green-500 rounded px-5 py-1 mt-3">
              Submit
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
