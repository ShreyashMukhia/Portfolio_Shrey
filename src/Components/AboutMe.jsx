import React from "react";
import "./AboutMe.css";
import profilePic from "../assets/AboutMe.jpeg";
function AboutMe() {
  return (
    <div className="about" id="about">
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profilePic} alt="" className="profilePic" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I'm Shreyash Mukhia, a passionate Front-End Web Developer with
              hands-on experience in building responsive and user-friendly
              interfaces using HTML, CSS, JavaScript, and ReactJS. I enjoy
              creating clean, efficient code and love turning complex problems
              into simple, beautiful designs.
            </p>
            <p>
              During my internship at B.Dreamz Global Solutions Pvt. Ltd., I
              honed my skills in creating dynamic UI components and optimizing
              mobile responsiveness to enhance user experience. I’ve worked on
              real-time applications like a Movie Search App (with debounce for
              performance) and a responsive E-commerce website, showcasing my
              focus on performance and usability.
            </p>
            <p>
              I’m always eager to learn new technologies, improve existing
              solutions, and build meaningful digital experiences.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>JavaScript</p> <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>ReactJs</p> <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>HTML & CSS</p> <hr style={{ width: "90%" }} />
            </div>
            <div className="about-skill">
              <p>Bootstrap</p> <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>TailwindCSS</p> <hr style={{ width: "70%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
