import React, { useRef } from "react";
import "./Contact.css";
import { SiGmail } from "react-icons/si";
import { MdOutlinePhone } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_qwq935f", "template_9a9fq1v", form.current, {
        publicKey: "tcbAQ8P90CGadLZ0C",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="contact" id="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p className="contact-para">
            I'm currently avaliable to take on new projects, so feel free to
            send me a messege about anything that you want me to work on. You
            can contact me anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <SiGmail />
              <p> mukhiashreyash99@gmail.com</p>
            </div>
            <div className="contact-detail">
              <MdOutlinePhone />
              <p> +91-9641309572</p>
            </div>
            <div className="contact-detail">
              <FaLinkedin />
              <a
                href="https://www.linkedin.com/in/shreyash-mukhia-42771b241/"
                target="_blank"
              >
                Shreyash_Mukhia_Linkedin
              </a>
            </div>
            <div className="contact-detail">
              <FaGithub />
              <a href="https://github.com/ShreyashMukhia" target="_blank">
                Shreyash_Mukhia_GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <h1>Send me an email</h1>
          <form ref={form} onSubmit={sendEmail}>
            <label>Your Name</label>
            <input
              type="text"
              name="user_name"
              className="name"
              placeholder="  Your Full Name"
            />
            <label>Your Email</label>
            <input
              type="email"
              name="user_email"
              className="email"
              placeholder="  Your Email ID"
            />
            <label>Write your message here</label>
            <textarea
              name="message"
              className="message"
              placeholder=" Enter your message"
            />
            <input type="submit" value="Send" className="send" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
