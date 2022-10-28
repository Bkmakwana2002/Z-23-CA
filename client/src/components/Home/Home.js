import React, { useEffect, useState } from "react";
import Home3 from "./Home3";
import Home2 from "./home2";
import "./home-style.css";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";

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
            <Link to={"/signup"}>Register</Link>
          </div>
        </div>
      </div>
      <Home2 />
      <Home3 />
    </section>
  );
}

export default Home;
