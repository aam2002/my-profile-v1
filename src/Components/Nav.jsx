import React from "react";

const Nav = () => {
  return (
    <nav>
      <div className="w-full h-7 flex justify-center  p-9 fixed z-10 nav">
        <h1 className="px-8  font-light text-purple-400 hover:text-pink-500 ">
          <a href="#About">ABOUT</a>
        </h1>
        <h1 className="px-8  font-light text-purple-400 hover:text-pink-500 ">
          <a href="#Skills">SKILLS</a>
        </h1>
        <h1 className="px-8  font-light text-purple-400 hover:text-pink-500 ">
          <a target="blank" href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-d9f01cc5-1bcd-40c1-b38d-236c9f367099.pdf">
            CERTIFICATE
          </a>
        </h1>
        <h1 className="px-8  font-light text-purple-400 hover:text-pink-500 ">
          <a href="#Projects">PROJECTS</a>
        </h1>
        <h1 className="px-8  font-light text-purple-400 hover:text-pink-500 ">
          <a href="#Contact">CONTACT</a>
        </h1>
      </div>
    </nav>
  );
};

export default Nav;
