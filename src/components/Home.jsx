import React from "react";
import HeroImage from "../assets/hero-image2.png";
import Github from "../assets/icons/github2.png";
import LinkedIn from "../assets/icons/linkedin2.png";
import Twitter from "../assets/icons/twitter2.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl mt-36 md:mt-0 sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have 3 years of experience building and desgining software.
            Currently, I love to work on web application using technologies like
            React, Tailwind, Next JS and Mongodb.
          </p>

          <div className="flex">
            <a href="https://github.com/Shubhayu-Bhowmick/" target="_blank" rel="noreferrer"><img src={Github} alt="github-link" className="bg-white rounded-full w-10 h-10" /></a>
            <a href="https://www.linkedin.com/in/shubhayu-bhowmick-0a423722a/" target="_blank" rel="noreferrer"><img src={LinkedIn} alt="linkedin-link" className="bg-white rounded-full mx-4 w-10 h-10" /></a>
            <a href="https://twitter.com/kinda_shub" target="_blank" rel="noreferrer"><img src={Twitter} alt="twitter-link" className="bg-white rounded-full w-10 h-10"/></a>              
          </div>

          <div className="flex my-10">

            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-green-400 to-green-600 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;