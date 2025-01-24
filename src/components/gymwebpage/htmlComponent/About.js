import React, { useState } from "react";
import GymReadmore from "./GymReadmore";
import g1 from "../pics/g-1.jpg";
import g2 from "../pics/g-2.jpeg";
import g3 from "../pics/g-3.webp";
import "../cssComponent/About.css";
const About = () => {
  const [readmore, setreadmore] = useState(false);
  return (
    <>
      <section className="section-about" id="about">
        <div className="about-box">
          <h2 className="heading-2">
            About <span>M</span>Fitness
          </h2>
          <p>
            Fitness is a holistic approach to maintaining and improving physical
            health through a combination of regular exercise, balanced
            nutrition, and adequate rest. It encompasses various components,
            including cardiovascular endurance, strength training, flexibility,
            and balance, all of which contribute to overall well-being.
            including cardiovascular endurance, strength training, flexibility,
            and balance, all of which contribute to overall well-being.
          </p>

          <span className="span-about-btn" onClick={() => setreadmore(true)}>
            {" "}
            readmore
          </span>
        </div>
        <figure className="about-img-section">
          <img src={g1} alt="" width="350" height="233" />
          <img src={g2} alt="" width="350" height="233" />
          <img src={g3} alt="" width="350" height="233" />
        </figure>
      </section>
      {readmore && <GymReadmore setreadmore={setreadmore} />}
    </>
  );
};

export default About;
