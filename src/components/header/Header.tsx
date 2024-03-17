import React from "react";
import Navbar from "../navbar/Navbar";
import Banner from "../Banner/Banner";
import './Header.css'

export default function Header() {
  return (
    <div className="background">
      <Navbar />
      <Banner />
    </div>
  );
}
