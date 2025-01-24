import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLongArrowAltRight,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";
import "../cssComponent/Footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer-section-f" id="contact">
        <div className="footer-f">
          <h1 className="footer-hading">
            <span>M</span>Fitness
          </h1>
          <p className="footer-paragraph">
            contect-9399206067 <br /> Email-dharmrajtomar43@gmail.com
          </p>
          <div className="footer-all-icon">
            <p className="footer-icon">
              {" "}
              <a href="#a">
                <FaWhatsapp />
              </a>{" "}
            </p>
            <p className="footer-icon">
              {" "}
              <a href="#a">
                <FaFacebook />{" "}
              </a>{" "}
            </p>
            <p className="footer-icon">
              {" "}
              <a href="#a">
                <FaInstagram />{" "}
              </a>{" "}
            </p>
            <p className="footer-icon">
              {" "}
              <a href="#a">
                <FaXTwitter />
              </a>{" "}
            </p>
          </div>
        </div>
        <div className="footer-s">
          <h1 className="footer-hading"> Quick Links</h1>
          <div className="footer-about">
            <p className="footer-icon">
              {" "}
              <FaLongArrowAltRight />{" "}
              <a href="#a" className="hom">
                {" "}
                Home
              </a>{" "}
            </p>

            <p className="footer-icon">
              {" "}
              <FaLongArrowAltRight /> <a href="#a">About</a>{" "}
            </p>

            <p className="footer-icon">
              {" "}
              <FaLongArrowAltRight /> <a href="#a"> Courses</a>{" "}
            </p>

            <p className="footer-icon">
              {" "}
              <FaLongArrowAltRight /> <a href="#a"> Trainers</a>{" "}
            </p>
            <p className="footer-icon">
              {" "}
              <FaLongArrowAltRight /> <a href="#a"> Contect</a>{" "}
            </p>
          </div>
        </div>
        <div className="footer-t">
          <h1 className="footer-hading"> News Letter</h1>
          <p>If you want to new apdate to send your email </p>
          <p className="input">
            {" "}
            <input type="text" placeholder=".......@Gmail.com" />{" "}
            <span>
              <IoSend />
            </span>{" "}
          </p>
        </div>
      </div>
      <div className="footer-last">
        <div className="footer-hr">
          <hr />
        </div>

        <div className="footer-discp">APP - PRINCE TOMAR</div>
      </div>
    </>
  );
};

export default Footer;
