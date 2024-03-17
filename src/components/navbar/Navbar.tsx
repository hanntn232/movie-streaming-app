import React from "react";
import NavItem from "../navItem/NavItem";
import { ReactComponent as AppLogo } from "./logo.svg";

export default function Navbar() {
  return (
    <div>
      <div className="d-flex flex-row align-items-baseline justify-content-between">
        <div className="p-4">
          <AppLogo />
        </div>
        <div className="p-8 d-flex flex-row flex-wrap">
          <div className="p-2">
            <NavItem itemName={"Home"} iconClass={"bi bi-house-door"}></NavItem>
          </div>
          <div className="p-2">
            <NavItem itemName={"Movie"} iconClass={"bi bi-film"}></NavItem>
          </div>
          <div className="p-2">
            <NavItem itemName={"Home"} iconClass={"bi bi-house-door"}></NavItem>
          </div>
          <div className="p-2">
            <NavItem itemName={"Music"} iconClass={"bi bi-play-btn"}></NavItem>
          </div>
          <div className="p-2">
            <NavItem itemName={"Liveshow"} iconClass={"bi bi-tv"}></NavItem>
          </div>
          <div className="p-2">
            <NavItem itemName={"Comedies"} iconClass={"bi bi-easel"}></NavItem>
          </div>
        </div>
      </div>
    </div>
  );
}
