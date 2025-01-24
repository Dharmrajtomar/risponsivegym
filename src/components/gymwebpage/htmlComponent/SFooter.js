import React from "react";
import "../cssComponent/SFooter.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaTwitter } from "react-icons/fa";
const SFooter = () => {
  return (
    <>
      <section className="footer">
        <div className="share">
          <a href="#a" className="fab fa-facebook-f "><FaFacebook /></a>
          <a href="#a" className="fab fa-twitter "><FaTwitter /></a>
          <a href="#a" className="fab fa-instagram "><FaInstagram /></a>
          <a href="a" className="fab fa-linkedin "><FaLinkedin /></a>
          <a href="a" className="fab fa-pinterest"><FaPinterest /></a>
        </div>
        <div className="links">
          <a href="#home">home</a>
          <a href="#about">about us</a>
          <a href="#menu">menu</a>
          <a href="#product">products</a>
          <a href="#review">review</a>
          <a href="#contact">contact</a>
          <a href="#blogs">blogs</a>
        </div>
        <div className="credit">
          created by <span>prince tomar</span>
        </div>
      </section>
    </>
  );
};

export default SFooter;
