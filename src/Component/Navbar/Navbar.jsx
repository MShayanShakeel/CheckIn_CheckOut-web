import React from "react";
import "./Navbar.css";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
import Profileuiu from "../../Images/Profileuiu.jpg";
import logo from "../../Images/logo.jpg";

const Navbar = () => {
  return (
    <>
      <div className="row Navbar-main">
        <div className="col-12 Navbar-Second-main">
          <div className="container-1">
            <img src={logo} alt="logo" />
          </div>
          <div className="Nabvar-right">
            <div className="container">
              <button>
                <p>FeedBack</p>
              </button>

              <IoMdNotificationsOutline />
              <IoMdInformationCircleOutline />

              <img src={Profileuiu} alt="pictuer" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
