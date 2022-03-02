import React from "react";
import { Card } from "react-bootstrap";

const Projects = () => {
  return (
    <div className="tw-bg-black ">
      <h3 className="tw-text-white tw-p-10 tw-text-center">Projects</h3>
      <div className="tw-flex ">
        <div class="card tw-w-60 tw-mx-5 tw-mb-5">
          <div class="card-body">
            <h5 class="card-title">Dynamic Form</h5>
            <p class="card-text">
              Developed a form using state concepts in React which enables
              dynamically creating the labels and input fields according to the
              user requirement and display the entire form on submit.
            </p>
          </div>
        </div>
        <div class="card tw-w-60 tw-mx-5 tw-mb-5">
          <div class="card-body">
            <h5 class="card-title">Quiz Application</h5>
            <p class="card-text">
              Built a basic app for Quiz wherein the canditate can log in with
              their id and password and select their department,course on which
              they intend to take up the test.This was developed using basic
              html and css
            </p>
          </div>
        </div>
        <div class="card tw-w-60 tw-mx-5 tw-mb-5">
          <div class="card-body">
            <h5 class="card-title">Online Compiler</h5>
            <p class="card-text">
              Worked on designing an online compiler for HTML,CSS and JS using
              tailwind css and also incorporated monaco editor for additional
              features that helps involving the Vs Code menus,error detections
              etc.,
            </p>
          </div>
        </div>
        <div class="card tw-w-60 tw-mx-5 tw-mb-5">
          <div class="card-body">
            <h5 class="card-title">Designings </h5>
            <p class="card-text">
              Designed an entire web page for online clothing shopping site
              using tools like Invision,Adobe XD .
            </p>
            <p>
              Hands-on designing for the various authentication screens using
              Adobe-XD
            </p>
          </div>
        </div>
        <div class="card tw-w-60 tw-mx-5 tw-mb-5">
          <div class="card-body">
            <h5 class="card-title">Shopping Cart</h5>
            <p class="card-text">
              A simple project using basic HTML,CSS,JS and SQL Database with
              Xaamp platform to understand the ways of desigining the a webpage
              and functionalities like adding items to cart,deleting placing
              orders which affects the stock value in the database.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
