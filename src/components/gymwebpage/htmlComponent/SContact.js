import React from "react";
import "../cssComponent/SContact.css";
const SContact = () => {
  return (
    <>
      <section className="contact" id="contact">
        <h1 className="heading">
          <span>Contact</span>us
        </h1>
        <div className="row">
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.7496279071083!2d80.5770627!3d24.7011321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398376cd5f0844c7%3A0x242819d5364881f!2sRanjana%20Tent%20House%20Singhpur!5e0!3m2!1sen!2sin!4v1737016865739!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
          <form action="">
            <h3>get in tuch</h3>
            <div className="inputBox">
              <span className="fas fa-user"></span>
              <input type="text" placeholder="name" />
            </div>
            <div className="inputBox">
              <span className="fas fa-user"></span>
              <input type="email" placeholder="email" />
            </div>
            <div className="inputBox">
              <span className="fas fa-user"></span>
              <input type="number" placeholder="number" />
            </div>
            <input type="submit" value="contact now" className="btn" />
          </form>
        </div>
      </section>
    </>
  );
};

export default SContact;
