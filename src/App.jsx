import "./App.css";
import { HiMiniEnvelopeOpen } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { FaCartPlus } from "react-icons/fa6";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdLocationPin } from "react-icons/md";
import { RiHomeHeartFill } from "react-icons/ri";

function App() {
  return (
    <div className="app">
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
      <div className="hero">
        <div className="topHero">
          <h1>
            Crafting your Exceptional Dining{" "}
            <span className="reserve" style={{ color: "orangered" }}>
              Reservations
            </span>
          </h1>
        </div>
        <div className="middleHero">
          Reservation is a step into a world of gastronomic wonder. Reserve your
          table today and let us paint your culinary dreams into reality.
        </div>
        <div className="delivery">
          <div className="debtn deli">
            <CiDeliveryTruck size={30} />
            Delivery
          </div>
          <div className="debtn">
            <MdLocationPin size={30} />
            <p>Pick Up</p>
          </div>
          <div className="debtn">
            <RiHomeHeartFill size={30} />
            <p>In Resturant</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
