import React from "react";
import "font-awesome/css/font-awesome.min.css";
import "./skills.css";
// import { FontAwesomeIcon } from "@fontawesome/react-fontawesome";

const Skills = () => {
  return (
    <div className="tw-bg-white ">
      <div className="tw-flex ">
        <img src="" />

        <div className="tw-flex tw-p-5">
          <h5 className="">HTML</h5>
          <div className="tw-px-1">
            <span class="fa fa-star checked "></span>
            <span class="fa fa-star checked "></span>
            <span class="fa fa-star checked "></span>
            <span class="fa fa-star checked "></span>
            <span class="fa fa-star checked "></span>
          </div>
        </div>
        <div className="tw-flex tw-p-5">
          <h5 className="">CSS</h5>
          <div className="tw-px-2">
            <span class="fa fa-star checked "></span>
            <span class="fa fa-star checked "></span>
            <span class="fa fa-star checked "></span>
            <span class="fa fa-star checked "></span>
            <span class="fa fa-star checked "></span>
          </div>
        </div>
        <div className="tw-flex tw-p-5">
          <h5 className="">JS</h5>
          <div className="tw-px-2">
            <span class="fa fa-star checked "></span>
            <span class="fa fa-star checked "></span>
            <span class="fa fa-star checked "></span>
            <span class="fa fa-star checked "></span>
            <span class="fa fa-star"></span>
          </div>
        </div>

        <div className="tw-flex tw-p-5">
          <h5 className="">REACT</h5>
          <div className="tw-px-2">
            <span class="fa fa-star checked "></span>
            <span class="fa fa-star checked "></span>
            <span class="fa fa-star checked "></span>
            <span class="fa fa-star checked "></span>
            <span class="fa fa-star"></span>
          </div>
        </div>
        <div className="tw-flex tw-p-5">
          <h5 className="">TAILWIND</h5>
          <div className="tw-px-2">
            <span class="fa fa-star checked "></span>
            <span class="fa fa-star checked "></span>
            <span class="fa fa-star checked "></span>
            <span class="fa fa-star checked "></span>
            <span class="fa fa-star"></span>
          </div>
        </div>

        <div className=" tw-flex tw-p-5 ">
          <h5 className="">BOOTSTRAP</h5>
          <div className="tw-px-2">
            <span class="fa fa-star checked "></span>
            <span class="fa fa-star checked "></span>
            <span class="fa fa-star checked "></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
          </div>
        </div>

        {/* <img
          className="tw-w-20 tw-25"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png"
        />
        <img
          className="tw-w-25 tw-h-20"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
        />
        <img
          className="tw-w-27 tw-h-20"
          src="data:image/png;base64,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"
        />
        <img
          className="tw-w-20 tw-h-15"
          src="data:image/png;base64,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"
        /> */}
      </div>
    </div>
  );
};

export default Skills;
