import React from "react";
import { menu } from "./ImdData";
import "../cssComponent/SMenu.css";
const SMenu = () => {
  return (
    <>
      <section className="menu" id="menu">
        <h1 className="heading">
          selling<span>item</span>
        </h1>
        <div className="box-container">
          {menu.map((item, index) => (
            <div className="box">
              <img src={item.img} alt="" />
              <h3>buy products</h3>
              <div className="price">
                $15.99 <span>20.99</span>
              </div>
              <a href="" className="btn">
                add to cart
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default SMenu;
