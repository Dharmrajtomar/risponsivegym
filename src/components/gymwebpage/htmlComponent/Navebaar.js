import React, { useRef } from "react";
import "../cssComponent/Navebaar.css";
import { RiLoginCircleLine } from "react-icons/ri";
import { SiGnuprivacyguard } from "react-icons/si";
import { FaSearch } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { Link, Outlet } from "react-router-dom";
import SidePage from "./SidePage";
const Navebaar = () => {
  const navbarRef = useRef();
  const navbarhandler = () => {
    navbarRef.current.classList.toggle("active");
  };
  return (
    <>
      <section className="navebar-section">
        <h3>
          M<span>Fitness</span>
        </h3>
        <div className="header-a" ref={navbarRef}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#courses">Courses</a>
          <a href="#trainers">Trainers</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="icons">
          <a href="#">
            <FaSearch size="2rem" />
          </a>
          <Link to="/join">
            <RiLoginCircleLine size="2rem" />
          </Link>
          <Link to="/join">
            <SiGnuprivacyguard size="2rem" />
          </Link>
          <a href="#">
            <IoMenu size="3rem" id="menu-btn" onClick={navbarhandler} />
          </a>
        </div>
      </section>
      <section className="section-hero" id="home">
        <div class="container-hero-box">
          <h3>A place for your fitness goals</h3>
          <p className="description">
            We offer Functional Training, Plyometric Boxes, Aerobics classes,
            TRX And Much More{" "}
          </p>
          <div className="btn-group">
            <Link to="/join">join us</Link>
            <a href="#courses">our services</a>
            <Link to="/sell">Brought product</Link>
          </div>
        </div>
      </section>

      <SidePage />
    </>
  );
};

export default Navebaar;
