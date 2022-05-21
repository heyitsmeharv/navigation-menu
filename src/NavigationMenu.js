import React, { useState } from "react";
import { BsList, BsFillQuestionSquareFill } from 'react-icons/bs';
import "./NavigationMenu.scss";

const NavigationMenu = ({ options, colour, border }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="root">
      <div className="container diamond-shape"
        style={{
          background: colour ? colour : "#14646f", border: border ? border : "2px solid #14646F",
        }}>
        <div className="diamond-icon">
          <button aria-label="menu-button" tabIndex="0" className="diamond-icon-btn" onClick={() => setOpen(!open)}>
            <BsList />
          </button>
        </div>
      </div>
      <div className={open ? "nav grow" : "nav shrink"} style={{ clipPath: isEven ? 'polygon(45% 0, 50% 25%, 55%  0, 100% 0, 100% 100%, 0 100%, 0 0)' : '' }}>
        <div className="left">
          {firstHalf?.map((nav, index) => {
            return (
              <button tabIndex="0" aria-label={nav.label} style={{ margin: isEven && index === firstHalf.length - 1 ? "20px 70px 20px 20px" : "20px" }} className="nav-option-button" key={index}>
                {nav.icon ? nav.icon : <BsFillQuestionSquareFill />}
                <div className='nav-option-button-label'>
                  {nav.label}
                </div>
              </button>
            )
          })}
        </div>
        <div className="right">
          {secondHalf?.map((nav, index) => {
            return (
              <button tabIndex="0" aria-label={nav.label} onClick={nav.onClick} style={{ margin: isEven && index === 0 ? "20px 20px 20px 70px" : "20px" }} className="nav-option-button" key={index}>
                {nav.icon ? nav.icon : <BsFillQuestionSquareFill />}
                <div className='nav-option-button-label'>
                  {nav.label}
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default NavigationMenu;