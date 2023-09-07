import React, { useState } from "react";
// import MenuIcon from '@mui/icons-material/Menu';
// import { Button } from "@mui/material";

const Nav = () => {
  const [clicked, setClicked] = useState(false);

  const handdleClick = () => {
    setClicked(!clicked);
  };
  return (
    <nav>
      <div className="w-full h-7 flex justify-between p-9 fixed z-10 nav">
        <div className="flex ">
          <h1 className=" text-2xl px-8  font-light text-white hover:text-purple-300 ">
            <a href=".">.Soni</a>
          </h1>
        </div>
        <div
          className={clicked ? "#horizontal done" : "#horizontal"}
          id="horizontal"
        >
          <h1 className="px-8  font-light text-purple-400 hover:text-pink-500 ">
            <a href="#About">ABOUT</a>
          </h1>

          <h1 className="px-8  font-light text-purple-400 hover:text-pink-500 ">
            <a href="#Skills">SKILLS</a>
          </h1>
          <h1 className="px-8  font-light text-purple-400 hover:text-pink-500 ">
            <a
              target="blank"
              href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-d9f01cc5-1bcd-40c1-b38d-236c9f367099.pdf"
            >
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

        <div
          id="mobile"
          className="flex my-auto text-xl px-8 "
          onClick={handdleClick}
        >
          <i id="bar" className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
