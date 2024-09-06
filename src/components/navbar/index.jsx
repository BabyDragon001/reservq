import React from "react";
import { HiMiniEnvelopeOpen } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { FaCartPlus } from "react-icons/fa6";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <HiMiniEnvelopeOpen size={30} />
        <h1>ReservQ</h1>
      </div>
      <ul className="list">
        <li>
          Home <div className="hh"></div>
        </li>
        <li>
          Menu <div className="hh"></div>
        </li>
        <li>
          Pages <div className="hh"></div>
        </li>
        <li>
          Dashboard <div className="hh"></div>
        </li>
      </ul>
      <div className="search">
        <div className="searchbtn">
          <input className="sinput" type="text" placeholder="Search food" />
          <CiSearch className="sicon" />
        </div>
        <div className="feat">
          <div className="round">
            <CiHeart className="ricon" />
            <div className="littlecircle">8</div>
          </div>
          <div className="round">
            <FaCartPlus className="ricon" />
            <div className="littlecircle">4</div>
          </div>
        </div>
      </div>
      <div className="buttons">
        <div className="btn login">Login</div>
        <div className="btn">Sign up</div>
      </div>
    </div>
  );
};

export default Navbar;
