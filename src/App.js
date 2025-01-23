import React from "react";
import Navebaar from "../src/components/gymwebpage/htmlComponent/Navebaar.js";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Loginform from "./components/gymwebpage/htmlComponent/Loginform.js";
import SellingItem from "./components/gymwebpage/htmlComponent/SellingItem.js";
const App = () => {
  return (
    <>
    {/* basename="/risponsive-gym-front-web" */}
      <BrowserRouter >
        <Routes>
          <Route index element={<Navebaar />} />
          <Route path="join" element={<Loginform />} />
          <Route path="sell" element={<SellingItem />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
