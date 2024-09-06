import React from "react";
import "./deli.css";

const Deli = ({ title, icon, color, textColor }) => {
  return (
    <div
      className="debtn deli"
      style={{ backgroundColor: color, color: textColor }}
    >
      {icon}
      {title}
    </div>
  );
};

export default Deli;
