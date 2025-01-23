import React from "react";
import "../cssComponent/SAbout.css";
import AboutImg from "../pics/c-b.jpg";
const SAbout = () => {
  return (
    <>
      <section className="about" id="about">
        <h1 className="heading">
          <span>about</span>us
        </h1>
        <div className="row">
          <div className="image">
            <img src={AboutImg} alt="" />
          </div>
          <div className="content">
            <h3>What Makes Our Gym Special?</h3>
            <p>
              Gym becomes special through its ability to evoke memories, connect
              people, and celebrate culture. The flavors, textures, and aromas
              create unique experiences, making every meal a moment of joy and
              connection.
            </p>
            <p>
              Special food often carries personal significance, tied to
              traditions, celebrations, or shared moments, making it
              irreplaceable.
            </p>
            <a href="" className="btn">
              Learn More
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default SAbout;
