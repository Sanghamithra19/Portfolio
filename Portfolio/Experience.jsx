import React from "react";
import "./experience.css";
// import { FontAwesomeIcon } from "@fontawesome/react-fontawesome";

const Experience = () => {
  return (
    <div>
      <h3 className="tw-text-center tw-text-white tw-py-5">My Experience</h3>
      <div class="wrapper">
        <div class="center-line">
          <a href="#" class="scroll-icon">
            <i class="fas fa-caret-up"></i>
          </a>
        </div>
        <div class="row row-1">
          <section>
            <i class="icon fas fa-home"></i>
            <div class="details">
              <span class="title">Intern as Front End Developer</span>
              <span>Present</span>
            </div>
            <p>
              Working as an Front End Developer for the past 4 months after
              successfull completion of training process, and have developed
              various simple web applications.Have also gained knowledge on the
              functionalities and requirements to enhance the user experience of
              the web applications.
            </p>
            <div class="bottom">
              <i className="tw-font-medium">
                - ReactJs,JavaScript,HTML5,CSS3,Tailwind css
              </i>
            </div>
          </section>
        </div>
        <div class="row row-2">
          <section>
            <i class="icon fas fa-globe"></i>
            <div class="details">
              <span class="title">Full Stack Web Development</span>
              <span>3 Months</span>
            </div>
            <p>
              Underwent a Full Stack Web Development internship last year and
              worked on a real time project during the period.Gained in depth
              knowledge on the main concepts.
            </p>
            <div class="bottom">
              {/* <FontAwesomeIcon icon="fa-brands fa-react" /> */}
              <i className="tw-font-medium">
                - ReactJs,JavaScript,HTML5,CSS3,Tailwind css,BootStrap,MongoDB
              </i>
            </div>
          </section>
        </div>
        <div class="row row-1">
          <section>
            <i class="icon fas fa-globe"></i>
            <div class="details">
              <span class="title">Web development Intern</span>
              <span>1 Month</span>
            </div>
            <p>
              Underwent this internship which involved basic web development
              concepts including basic html and css concepts with their
              functionalitites.
            </p>
            <div class="bottom">
              <i className="tw-font-medium">- HTML5,CSS3</i>
            </div>
          </section>
        </div>
        <div class="row row-2">
          <section>
            <i class="icon fas fa-globe"></i>
            <div class="details">
              <span class="title">3D Modelling</span>
              <span>Present</span>
            </div>
            <p>
              Learnt 3D Modelling and built few 3D Models as freelancing using
              MagicVoxel and starting to know about Blender software to enhance
              my modelling skills.
            </p>
            <div class="bottom">
              <i className="tw-font-medium">- MagicVoxel</i>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Experience;
