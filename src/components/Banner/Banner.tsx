import React from "react";
import "./Banner.css";

export default function Banner() {
  return (
    <div className="banner-container">
      <p>Welcome to BD Screens</p>
      <h1>Download Unlimited Movies, Drama, Music Video and More Content.</h1>
      <p className="light-content">
        Enjoy exclusive Music Video popular movies and Live shows. Subscribe BD
        Screen now
      </p>

      <div className="block ">
        <div className="left-input">+880</div>
        <input placeholder="Enter mobile number" className="phone-input"></input>
        <button className="register-button">Subscribe</button>
      </div>
    </div>
  );
}
