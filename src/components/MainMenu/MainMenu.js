import React from 'react';
import './MainMenu.css';

function MainMenu() {
  return (
    <nav className="main-menu">
      <ul>
        <li>Land</li>
        <li>Air</li>
        <li>Water</li>
        <li>Construction</li>
        <li>Power Tools</li>
        <li>Repair Shops</li>
        <li>Shipping</li>
        <li>
            <span>Bid/Buy</span>
            <label className="switch">
            <input type="checkbox" id="toggleSwitch"/>
            <span className="slider"></span>
            </label>
            <span>Hire</span>
        </li>
      </ul>
    </nav>
  );
}

export default MainMenu;
