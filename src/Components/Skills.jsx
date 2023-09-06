import React from "react";
// import {
//   motion,
//   useScroll,
//   useSpring,
//   useTransform,
//   useMotionValue,
//   useVelocity,
//   useAnimationFrame,
// } from "framer-motion";
// import { wrap } from "@motionone/utils";

import "./skills.css";
import bootstrap from "./images/bootstrap.png";
import html from "./images/html.png";
import css from "./images/css.png";
import js from "./images/js.png";
import tailwind from "./images/tailwind.png";
import react from "./images/react.png";
import node from "./images/node.png";
import express from "./images/express.png";
import mongodb from "./images/mongodb.png";
import git from './images/git.png'
import PostgreSQL from './images/postgreSQL.png'
import { Tilt } from "react-tilt";

// function ParallaxText({ children, baseVelocity = 1000 }) {
//   const baseX = useMotionValue(0);
//   const { scrollY } = useScroll();
//   const scrollVelocity = useVelocity(scrollY);
//   const smoothVelocity = useSpring(scrollVelocity, {
//     damping: 50,
//     stiffness: 400,
//   });
//   const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
//     clamp: false,
//   });
//   /**
//    * This is a magic wrapping for the length of the text - you
//    * have to replace for wrapping that works for you or dynamically
//    * calculate
//    */
//   const x = useTransform(baseX, (v) => `${wrap(-123, -300, v)}%`);
//   const directionFactor = useRef(1);
//   useAnimationFrame((t, delta) => {
//     let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
//     /**
//      * This is what changes the direction of the scroll once we
//      * switch scrolling directions.
//      */
//     if (velocityFactor.get() < 0) {
//       directionFactor.current = -1;
//     } else if (velocityFactor.get() > 0) {
//       directionFactor.current = 1;
//     }
//     moveBy += directionFactor.current * moveBy * velocityFactor.get();
//     baseX.set(baseX.get() + moveBy);
//   });
//   /**
//    * The number of times to repeat the child text should be dynamically calculated
//    * based on the size of the text and viewport. Likewise, the x motion value is
//    * currently wrapped between -20 and -45% - this 25% is derived from the fact
//    * we have four children (100% / 4). This would also want deriving from the
//    * dynamically generated number of children.
//    */
//   return React.createElement(
//     "div",
//     { className: "parallax" },
//     React.createElement(
//       motion.div,
//       { className: "scroller", style: { x } },
//       React.createElement("span", null, children, " ")
//     )
//   );
// }

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 70, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};
const Skills = () => {
  return (
      <div id="Skills" className="scroll-area">
        <div className="text-9xl skill link">Skills</div>
          <div className="container">
            <Tilt options={defaultOptions}>
              <div className="card link">
                <div className="css">
                  <img src={html} alt="" />
                  <h2>HTML</h2>
                </div>
              </div>
            </Tilt>
            <Tilt options={defaultOptions}>
              <div className="card link">
                <div className="css">
                  <img src={css} alt="" />
                  <h2>CSS</h2>
                </div>
              </div>
            </Tilt>
            <Tilt options={defaultOptions}>
              <div className="card link">
                <div className="css">
                  <img src={js} alt="" />
                  <h2>JAVASCRIPT</h2>
                </div>
              </div>
            </Tilt>

            <Tilt options={defaultOptions}>
              <div className="card link">
                <div className="css">
                  <img src={bootstrap} alt="" />
                  <h2>Bootstrap-Css</h2>
                </div>
              </div>
            </Tilt>
            <Tilt options={defaultOptions}>
              <div className="card link">
                <div className="css">
                  <img src={tailwind} alt="" />
                  <h2>Tailwind-Css</h2>
                </div>
              </div>
            </Tilt>
            <Tilt options={defaultOptions}>
              <div className="card link">
                <div className="css">
                  <img src={react} alt="" />
                  <h2>React.js</h2>
                </div>
              </div>
            </Tilt>

            <Tilt options={defaultOptions}>
              <div className="card link">
                <div className="css">
                  <img src={node} alt="" />
                  <h2>Node.js</h2>
                </div>
              </div>
            </Tilt>
            <Tilt options={defaultOptions}>
              <div className="card link">
                <div className="css">
                  <img src={git} alt="" className="git"/>
                  <h2>Git and Github</h2>
                </div>
              </div>
            </Tilt>
            <Tilt options={defaultOptions}>
              <div className="card link">
                <div className="css">
                  <img src={express} alt="" />
                  <h2>Express.js</h2>
                </div>
              </div>
            </Tilt>
            <Tilt options={defaultOptions}>
              <div className="card link">
                <div className="css">
                  <img src={mongodb} alt="" />
                  <h2>mongoDB</h2>
                </div>
              </div>
            </Tilt>
            <Tilt options={defaultOptions}>
              <div className="card link">
                <div className="css">
                  <img src={PostgreSQL} alt="" />
                  <h2>PostgreSQL</h2>
                </div>
              </div>
            </Tilt>
          </div>
       
   </div>
  );
};

export default Skills;
