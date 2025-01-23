import React from "react";
import SNavbar from "./SNavbar";
import SHome from "./SHome";
import SAbout from "./SAbout";
import SMenu from "./SMenu";
import SProduct from "./SProduct";
import SContact from "./SContact";
import SFooter from "./SFooter";
import "../cssComponent/SellingItem.css";
const SellingItem = () => {
  return (
    <>
      <SNavbar />
      <SHome />
      <SAbout />
      <SMenu />
      <SProduct />
      <SContact />
      <SFooter />
    </>
  );
};

export default SellingItem;
