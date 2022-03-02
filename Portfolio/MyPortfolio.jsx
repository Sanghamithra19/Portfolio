import React from "react";
import { Card } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import Experience from "./Experience";
import "./portfolio.css";
import Projects from "./Projects";
import Skills from "./Skills";

// import { FontAwesomeIcon } from "@fontawesome/react-fontawesome";

const MyPortfolio = () => {
  return (
    <div className="tw-h-full tw-bg-black tw-overflow-x-hidden">
      <div className="tw-space-x-5 tw-py-3 tw-px-4 tw-text-right tw-text-white">
        <button
          data-toggle="modal"
          data-target="#exampleContact"
          className="hover:tw-line-through tw-font-qs"
        >
          CONTACT
        </button>
        <div
          class="modal fade"
          id="exampleContact"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleContactLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog " role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5
                  class="modal-title tw-text-center tw-text-black"
                  id="exampleContactLabel"
                >
                  Contact Details
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body tw-text-left">
                <div className="tw-flex">
                  <i class="fa-solid fa-phone  tw-py-5 tw-text-black"></i>
                  <h6 className="tw-px-1 tw-py-5 tw-text-black">
                    +91 9025724496
                  </h6>
                  <i class="fa-solid fa-envelope tw-px-5 tw-py-5 tw-text-black"></i>
                  <h6 className="tw-px-1 tw-py-5 tw-text-black">
                    sanghamithra.r19@gmail.com
                  </h6>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tw-bg-white tw-font-qs tw-text-black tw-flex tw-flex-col tw-justify-center tw-items-center tw-h-96">
        <h1 className="tw-font-semibold">I am Sanghamithra Rajasekar</h1>
        <h6>
          Student . Passion: Web Developement . Currently: Intern as Front End
          Developer
        </h6>
        <div className="tw-p-5">
          <a
            target="_blank"
            className="tw-text-white tw-px-2 tw-py-3 tw-rounded-md hover:tw-text-gray-500  tw-bg-black tw-decoration-transparent tw-font-medium"
            href="https://www.linkedin.com/in/sanghamithra-rajasekar/"
          >
            Linkedin Profile
          </a>
        </div>
        {/* <div className="row tw-m-0 tw-p-0 tw-bg-black "></div> */}
      </div>

      <div className="row about">
        <div className="col-6 tw-p-10  tw-bg-white tw-text-center">
          <p className="tw-font-semibold tw-text-left">
            Hello! I currently pursue my final year of engineering in Computer
            Science department (CSE) from{" "}
            <a
              className="tw-text-black tw-decoration-transparent"
              href="http://www.msec.edu.in/"
            >
              "Meenakshi Sundararrajan Engineering College (MSEC), Kodambakkam"
            </a>
          </p>
          <p className="tw-font-semibold tw-text-left">
            I have always had a great passion towards Web Developement and i
            have been practising and learning more about UI/UX designs in
            detail.
          </p>
          <p className="tw-font-semibold tw-text-left">
            Also I have been having hands-on experience on developing simple web
            applications which has enhanced my knowledge and interest towards
            this field. And I am currently working as Intern under the role of
            Front End Developer
          </p>

          <button
            data-toggle="modal"
            data-target="#exampleModal"
            className="tw-font-semibold hover:tw-line-through "
          >
            MY WORKS!
          </button>
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog " role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title tw-text-center" id="exampleModalLabel">
                    Simple Hands-on works!
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body tw-text-left">
                  <li>Redux - counter programs</li>
                  <li>Simple Userforms</li>
                  <li>Online Product Displays</li>
                  <li>Task Management Web page</li>
                  <li></li>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 ">
          <img
            className="tw-px-10 tw-mt-5"
            src="https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
        </div>
      </div>
      <div>
        <Experience />
      </div>
      <div>
        <Skills />
      </div>

      <div>
        <Projects />
      </div>
    </div>
  );
};

export default MyPortfolio;
