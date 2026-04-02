import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav">
        <div className="nav-content">
          <button className="navbtn">home</button>
          <button className="navbtn">projects</button>
          <button className="navbtn">about me</button>
          <button className="navbtn">course</button>
          <button className="navbtn">education</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
