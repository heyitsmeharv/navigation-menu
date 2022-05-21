import React, { useState } from "react";
import { BsList, BsFillQuestionSquareFill } from 'react-icons/bs';
import "./NavigationMenu.css";

const NavigationMenu = ({ options, colour = '#14646f', border = '#14646F' }) => {
  const [open, setOpen] = useState(false);
  const half = Math.ceil(options?.length / 2);
  const firstHalf = options?.slice(0, half);
  const secondHalf = options?.slice(half, options?.length);
  const isEven = options.length % 2 === 0;
  return (
    <div className="root">
      <div className="container diamond-shape"
        style={{
          background: colour, border: `2px solid ${border}`,
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