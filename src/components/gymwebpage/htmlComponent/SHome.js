import React from "react";
import "../cssComponent/SHome.css";
const SHome = () => {
  return (
    <>
      <section className="home" id="home">
        <div className="content">
          <h3>
            fresh <span>product in </span>morning gym
          </h3>
          <p>
            Morning gym is vital to kickstart the day, replenishing energy after
            a night's rest. A healthy break, rich in nutrients like protein,
            fiber, and vitamins, improves focus and mood.
          </p>
          <a href="" className="btn">
            {" "}
            get yours now{" "}
          </a>
        </div>
      </section>
    </>
  );
};

export default SHome;
