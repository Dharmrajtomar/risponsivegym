import React from "react";
import "../cssComponent/SProduct.css";
import { productitem } from "./ImdData";
import { FaCartArrowDown, FaEye, FaHeart } from "react-icons/fa";
const SProduct = () => {
  return (
    <>
      <section className="products" id="products">
        <h1 className="heading">
          our <span>products</span>
        </h1>
        <div className="box-container">
          {productitem.map((item, index) => (
            <div className="box">
              <div className="icons">
                <a href="#a" className="fas fa-shopping-cart"><FaCartArrowDown /></a>
                <a href="#a" className="fas fa-heart"><FaHeart /></a>
                <a href="#a" className="fas fa-eye"><FaEye /></a>
              </div>
              <div className="image">
                <img src={item.img} alt="" />
              </div>
              <div className="content">
                <h3>fresh product</h3>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
                <div className="price">
                  $15.99 <span>@20.99</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default SProduct;
