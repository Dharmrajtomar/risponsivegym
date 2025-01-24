import React from "react";
import sog from "../pics/c-a.jpg";
import "../cssComponent/SOffer.css";
const SOffer = () => {
  return (
    <>
      <div className="soffer-m-div">
        <div className="soffer-second-div">
          <div className="soffer-header">
            <span>SPECIAL OFFER</span> THIS SUMMER GET FULL BENIFITS{" "}
            <span> FOR YEAR WITH 20% DISCOUNT.</span>
          </div>
          <div className="soffer-disc">
            Spacia offer to get access to this package to join our gim and get
            spacia package. Spacia offer to get access to this package to join
            our gim and get spacia package
            <a href="#a" className="so-button">
              BACOME A MEMBER
            </a>
          </div>
        </div>
        <div className="soffer-img-div">
          <img className="soffer-img" src={sog} alt="" />
        </div>
      </div>
    </>
  );
};

export default SOffer;
