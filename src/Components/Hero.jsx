import React from "react";
import "./Hero.css";
import profilePic from "../assets/Hero.jpg";
import resume from "../assets/Shreyash_Mukhia_Resume.pdf";
import AnchorLink from "react-anchor-link-smooth-scroll";
function Hero() {
  return (
    <div className="hero" id="hero">
      <img src={profilePic} alt="profile pic" className="hero_pic" />
      <h2>
        <span> I'm Shreyash Mukhia,</span> a Front-End Web Developer with
        hands-on experience in building responsive and user-friendly web
        interfaces using HTML, CSS, JavaScript, and ReactJS.
      </h2>
      <p>
        I’m passionate about clean code, continuous learning, and building
        products that deliver seamless user experiences.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink href="#contact" offset={50} className="anchor-link">
            Connect With Me
          </AnchorLink>
        </div>

        <button className="hero-resume">
          <a href={resume} target="_blank">
            My resume
          </a>
        </button>
      </div>
    </div>
  );
}

export default Hero;
