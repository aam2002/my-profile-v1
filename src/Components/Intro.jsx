import React from "react";
const Intro = () => {

  return (
    <div id="About"  className="scroll-area">
      <div
        className=" w-full flex flex-col justify-top items-center  my-72"
        id="text"
      >
        <h1 className="word  text-9xl">Hello</h1>
        <h1 className="word text-9xl">Myself</h1>
        <a href="mailto: amansoni20020+work@gmail.com">
        <h1 className="link hov word text-9xl">
          <span className="1">@</span>
          <span className="2">A</span>
          <span className="3">m</span>
          <span className="4">a</span>
          <span className="5">n</span>
        </h1>
        </a>
        
      </div>
      <div className=" w-full flex flex-col justify-top items-center">
        <div className="water mb-28">
          <h1 className="text-9xl mytext1 link">I am web developer</h1>
          <h1 className="text-9xl mytext2 link">I am web developer</h1>
        </div>
      </div>
    </div>
  );
};

export default Intro;
