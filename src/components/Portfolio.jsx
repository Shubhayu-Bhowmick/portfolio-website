import React from "react";
import BusinessLandingPage from "../assets/business-landing-page.png"
import Restuarent from "../assets/restuarant.png"
import Ecommerce from "../assets/ecommerce.png"
import Passwordgenerator from "../assets/password-generator.png"
import Tasklist from "../assets/tasklist.png"
import Movie from "../assets/movie.png"

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Ecommerce,
      link: "https://github.com/Shubhayu-Bhowmick/",
    
    },
    {
      id: 2,
      src: BusinessLandingPage,
      link: "https://github.com/Shubhayu-Bhowmick/Business-Landing-page",
    },
    {
      id: 3,
      src: Restuarent,
      link: "https://github.com/Shubhayu-Bhowmick/React-Menu-App",
    },
    {
      id: 4,
      src: Passwordgenerator,
      link: "https://github.com/Shubhayu-Bhowmick/Password-Generator",
    },
    {
      id: 5,
      src: Tasklist,
      link: "https://github.com/Shubhayu-Bhowmick/Todo-list",
    },
    {
      id: 6,
      src: Movie,
      link: "https://github.com/Shubhayu-Bhowmick/Movie-search",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white h-full"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 mt-36 md:mt-0">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="project-img"
                className="rounded-md duration-200 hover:scale-105 h-48 object-cover w-full"
              />
              <div className="">
                <button className="w-1/2 text-xs py-2 duration-200 hover:scale-105">
                  <a href={link} target="_blank" rel="noreferrer">Github link</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;