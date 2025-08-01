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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Exercitationem minus consequatur voluptatem, quos dolor amet est
              eos magnam obcaecati delectus ea cum iusto sunt corporis a
              cupiditate labore illo in.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              officia quo saepe ex eligendi totam numquam placeat inventore
              provident unde molestiae, cum accusantium hic eum natus ab
              necessitatibus eaque vel?
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
