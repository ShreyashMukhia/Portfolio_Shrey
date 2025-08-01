import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/Shrey_logo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Hamburger from "hamburger-react";
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="Navbar">
      <img src={logo} alt="" className="logo" />
      <div className="hamburger-icon">
        <Hamburger toggled={open} toggle={setOpen} />
      </div>
      {open && (
        <div className="unhide">
          <ul className="nav-menu">
            <AnchorLink className="anchor-link" href="#hero" offset={50}>
              {" "}
              <li onClick={() => setOpen(false)}>Home</li>
            </AnchorLink>
            <AnchorLink className="anchor-link" href="#about" offset={50}>
              {" "}
              <li onClick={() => setOpen(false)}>About Me</li>{" "}
            </AnchorLink>
            <AnchorLink className="anchor-link" href="#work" offset={50}>
              {" "}
              <li onClick={() => setOpen(false)}>Project</li>{" "}
            </AnchorLink>
            <AnchorLink className="anchor-link" href="#contact" offset={50}>
              {" "}
              <li onClick={() => setOpen(false)}>Contact</li>{" "}
            </AnchorLink>
          </ul>
        </div>
      )}

      <ul className="nav-menu hide">
        <AnchorLink className="anchor-link" href="#hero" offset={50}>
          {" "}
          <li>Home</li>{" "}
        </AnchorLink>
        <AnchorLink className="anchor-link" href="#about" offset={50}>
          {" "}
          <li>About Me</li>{" "}
        </AnchorLink>
        <AnchorLink className="anchor-link" href="#work" offset={50}>
          {" "}
          <li>Project</li>{" "}
        </AnchorLink>
      </ul>
      <div className="nav-connect hide">
        <AnchorLink className="anchor-link" href="#contact" offset={50}>
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
}

export default Navbar;
