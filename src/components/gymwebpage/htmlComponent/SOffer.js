import React from "react";
import sog from "../pics/c-a.jpg";
import "../cssComponent/SOffer.css";
const SOffer = () => {
  return (
    <>
      <div class="soffer-m-div">
        <div class="soffer-second-div">
          <div class="soffer-header">
            <span>SPECIAL OFFER</span> THIS SUMMER GET FULL BENIFITS{" "}
            <span> FOR YEAR WITH 20% DISCOUNT.</span>
          </div>
          <div class="soffer-disc">
            Spacia offer to get access to this package to join our gim and get
            spacia package. Spacia offer to get access to this package to join
            our gim and get spacia package
            <a href="" className="so-button">
              BACOME A MEMBER
            </a>
          </div>
        </div>
        <div class="soffer-img-div">
          <img className="soffer-img" src={sog} alt="" />
        </div>
      </div>
    </>
  );
};

export default SOffer;
