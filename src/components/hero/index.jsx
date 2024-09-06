import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdLocationPin } from "react-icons/md";
import { RiHomeHeartFill } from "react-icons/ri";
import "./hero.css";
import Deli from "../ui/deli";

const Hero = () => {
  return (
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
        <Deli
          title="Delivery"
          icon={<CiDeliveryTruck size={30} />}
          color="#f01543"
          textColor="white"
        />
        <Deli
          title="Pick Up"
          icon={<MdLocationPin size={30} />}
          color="white"
          textColor="#f01543"
        />
        <Deli
          title="In Restaurant"
          icon={<RiHomeHeartFill size={30} />}
          color="white"
          textColor="#f01543"
        />
      </div>
    </div>
  );
};

export default Hero;
