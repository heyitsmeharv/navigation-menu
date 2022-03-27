import React from "react";
import "./NavigationMenu.css";

const NavigationMenu = ({ label, icon }) => {
  return (
    <nav className="nav">
      {icon}
      <button>
        {label}
      </button>
    </nav>
  );
}

export default NavigationMenu;