import React from "react";
import About from "./About";
import "../cssComponent/SidePage.css";
import OurCourses from "./OurCourses";
import SOffer from "./SOffer";
import Cochess from "./Cochess";
import Footer from "./Footer";
const SidePage = () => {
  return (
    <>
      <div className="sidepage">
        <About />
        <OurCourses />
        <SOffer />
        <Cochess />
        <Footer />
      </div>
    </>
  );
};

export default SidePage;
