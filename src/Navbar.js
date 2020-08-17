import React, { useEffect, useState } from "react";
import "./Navbar.css";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
function Navbar() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://avatarfiles.alphacoders.com/114/114539.png"
        alt="Logo"
      />
      <PersonRoundedIcon
        className="nav_avatar"
        color="secondary"
        style={{ fontSize: 50 }}
      />
    </div>
  );
}

export default Navbar;
