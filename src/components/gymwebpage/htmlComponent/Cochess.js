import React from "react";
import cdd from "../pics/c-d.jpg";
import caa from "../pics/c-a.jpg";
import cbb from "../pics/c-b.jpg";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "../cssComponent/Cochess.css";
const Cochess = () => {
  return (
    <>
      <div className="cochess-main" id="trainers">
        <div className="coches-about">
          <div className="cochess-header">
            <h3>
              OUR <span>FITNESS</span> COCHESS
            </h3>
          </div>
          <div className="coches-disc">
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              exercitationem amet, numquam, quod repudiandae placeat, ratione
              quo nesciunt incidunt aliquam tenetur rerum tempora esse. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Alias
              voluptates omnis, nemo expedita quisquam amet a officia officiis
              quae. Repellat, reprehenderit corrupti? Fuga quisquam numquam
              quaerat? Ab et quaerat dolore temporibus accusantium consequatur
              magnam ducimus sed dolorum tenetur, veritatis ratione hic enim
              voluptatibus quas deserunt.
            </p>
          </div>
          <div className="coches-all-img">
            <div className="cochess-img-sec">
              <div className="coches-corse-title">
                <p className="coches-name">Marn buliyank</p>
                <p className="coches-disp">fitnescohes</p>
              </div>
              <div className="coches-icon-and-img">
                <div className="coches-img-icon">
                  <div className="c-facebook">
                    <div className="c-c-f">
                      <FaFacebook />
                    </div>
                  </div>
                  <div className="c-facebook">
                    <FaWhatsapp />
                  </div>
                  <div className="c-facebook">
                    <FaInstagram />
                  </div>
                  <div className="c-facebook">
                    <FaXTwitter />
                  </div>
                </div>
                <img src={cbb} alt="" />
              </div>
            </div>

            <div className="cochess-img-sec">
              <div className="coches-corse-title">
                <p className="coches-name">mr. boxer</p>
                <p className="coches-disp">boxer</p>
              </div>
              <div className="coches-icon-and-img">
                <div className="coches-img-icon">
                  <div className="c-facebook">
                    <div className="c-c-f">
                      <FaFacebook />
                    </div>
                  </div>
                  <div className="c-facebook">
                    <FaWhatsapp />
                  </div>
                  <div className="c-facebook">
                    <FaInstagram />
                  </div>
                  <div className="c-facebook">
                    <FaXTwitter />
                  </div>
                </div>
                <img src={caa} alt="" />
              </div>
            </div>
            <div className="cochess-img-sec">
              <div className="coches-corse-title">
                <p className="coches-name">miss. rubeena</p>
                <p className="coches-disp">strechesh</p>
              </div>
              <div className="coches-icon-and-img">
                <div className="coches-img-icon">
                  <div className="c-facebook">
                    <div className="c-c-f">
                      <FaFacebook />
                    </div>
                  </div>
                  <div className="c-facebook">
                    <FaWhatsapp />
                  </div>
                  <div className="c-facebook">
                    <FaInstagram />
                  </div>
                  <div className="c-facebook">
                    <FaXTwitter />
                  </div>
                </div>
                <img src={cdd} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cochess;
