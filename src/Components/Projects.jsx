import React from "react";
import Clock from "./images/Project-Screen-shot/Clock.png";
import CWH from "./images/Project-Screen-shot/CWH-clone.png";
import Earth from "./images/Project-Screen-shot/Earth.png";
import Face from "./images/Project-Screen-shot/Face-detection.png";
import Photography from "./images/Project-Screen-shot/Photography.png";
import Joke from "./images/Project-Screen-shot/Joke.png";
import Robo from "./images/Project-Screen-shot/simple-search-Robo-friends.png";
import To from "./images/Project-Screen-shot/To-do-list.png";
import "./Projects.css";
const Projects = () => {
  return (
    <div className="pro  m-auto justify-center scroll-area" id="Projects">
      <div className="text-9xl project link">Projects</div>
      <div className="my-gird">
        <div className="image-box left-side link">
          <div className="Proimage ">
            <img src={Clock} alt="" />
          </div>
          <div className="text">
            <p>Clock</p>
            <span>
              A Digital and Analoge Clock . Build on Plain Html , Css and
              Javascript{" "}
            </span>
          </div>
        </div>
        <div className="image-box link">
          <div className="Proimage">
            <img src={CWH} alt="" />
          </div>
          <div className="text">
            <p>Code-With-harry</p>
            <span>
              Clone Website of{" "}
              <a className=" underline " href="https://www.codewithharry.com/">
                {" "}
                CodeWithharry
              </a>{" "}
              using html and plain Css{" "}
            </span>
          </div>
        </div>
        <div className="image-box left-side link">
          <div className="Proimage ">
            <img src={Earth} alt="" />
          </div>
          <div className="text">
            <p>Earth</p>
            <span>
              Our mother Earth need special attention , using Html and css I
              have build simple webite dadicated to our mother earth
            </span>
          </div>
        </div>
        <div className="image-box link">
          <div className="Proimage">
            <img src={Face} alt="" />
          </div>
          <div className="text">
            <p>Face-Detection</p>
            <span>
              It detects a face of give image by using ClarifaiAPI and also has
              signIn and Register page It is build on React and have backend too
              . I have used Express.js for this project and has some nice
              intreactivity{" "}
            </span>
          </div>
        </div>
        <div className="image-box link left-side">
          <div className="Proimage ">
            <img src={Photography} alt="" />
          </div>
          <div className="text">
            <p>Photography</p>
            <span>
              A simple PhotoGallery/Photography website with a responsive design
              and suttle transitions
            </span>
          </div>
        </div>
        <div className="image-box link">
          <div className="Proimage">
            <img src={Joke} alt="" />
          </div>
          <div className="text">
            <p>Random-Joke</p>
            <span>
              A random-joke generator give a random-joke on a single click
            </span>
          </div>
        </div>
        <div className="image-box link left-side">
          <div className="Proimage ">
            <img src={Robo} alt="" />
          </div>
          <div className="text">
            <p>Robo-Friends</p>
            <span>
              Its a simple searching app of some random robots , Basically a
              filteration in React is Demonstrated by this project
            </span>
          </div>
        </div>
        <div className="image-box link">
          <div className="Proimage">
            <img src={To} alt="" />
          </div>
          <div className="text">
            <p>To-Do-list</p>
            <span>
              We can make a list of what to do in all day and it can save the
              data in the local storage . We can also edit the data once listed
              and put a tick mark the tasks that is done once
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
