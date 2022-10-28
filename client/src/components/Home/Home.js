import React, { useEffect, useState } from "react";
import { Container, Row, Col, NavLink } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home3 from "./Home3";
import Home2 from "./home2";
import "./home-style.css";
import Tilt from "react-parallax-tilt";
import { useRef } from "react";

function Home() {
  return (
    <section>
      <div className="home-container">
        <div className="home-content">
          <div className="header">
            <h1>
              <Tilt>Zeitgeist"22</Tilt>
            </h1>
          </div>
          <div className="subheader">
            <h1> Campus Aabassador Program</h1>
          </div>
          <div className="registration-btn">
            <a href={""}>Register</a>
          </div>
        </div>
      </div>
      <Home2 />
      <Home3 />
    </section>
  );
}

export default Home;
