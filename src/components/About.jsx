import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        I love building stuff. I started playing with computers when I was 11 years-old. 
        Since then I have been tinkering with all sorts of technologies that in some way or 
        another led me to work on music, designing, computer programming, electric engineering, 
        automation, photography, videography, video editing, VR and AR games.
        </p>

        <br />

        <p className="text-xl">
          In the last few years, I have been increasingly working on software development. 
          I’ve been lucky to have worked alongside senior developers and designers, who have taught me what’s expected from a 
          quality product.
          <br/>
          <br/>
          I’m excited to work on new projects, because I learn something new every time. I’m excited for the next challenge!
        </p>
      </div>
    </div>
  );
};

export default About;