import React from "react";
import img from "../assets/bg2.jpg";
import build from "../assets/build.png";
import GurukulResearchFoundation from "./HomeInside";

const Home = () => {
  return (
    <div>
      <div className="relative">
        <img className="w-screen" src={img} alt="" />
        <p className="absolute top-1/2 -translate-y-1/2 left-0 w-full text-center text-white md:text-6xl text-2xl font-bold">
          <p>WELCOME TO </p>
          <p>GURUKUL RESEARCH FOUNDATION</p>
       
        </p>
      </div>
      <GurukulResearchFoundation/>
    </div>
  );
};

export default Home;
