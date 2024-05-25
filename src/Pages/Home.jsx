import React, { useState } from "react";
import Navbar from "../Component/Navbar/Navbar";
import "./Home.css";
import Banner from "../Component/Banner/Banner";
import { TfiMenuAlt } from "react-icons/tfi";
import Banner2 from "../Component/Banner2/Banner2";

const Home = () => {
  return (
    <>
      <div className="row">
        <div className="col-12 home-Main">
          <Navbar />
          <Banner />
          <div className="Home-content">
            <h4>Added CheckIns</h4>
            <button style={{ cursor: "pointer" }}>
              <TfiMenuAlt />
            </button>
          </div>
          <Banner2 />
        </div>
      </div>
    </>
  );
};

export default Home;
