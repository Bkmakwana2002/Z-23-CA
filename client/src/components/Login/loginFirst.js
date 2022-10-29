import React, { useEffect, useState } from "react";
import PreLoader from "../preloader/preloader";
import { AiOutlineGoogle } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./CSS/login-styles.css";
import Google from "./google.svg";

function LoginFirst() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      <div className="form-container">
        <form className="custom-form">
          <h3>Register-1/3</h3>
          <input type="text" placeholder="Email" id="username" />
          <input type="password" placeholder="Password" id="password" />
          <input type="password" placeholder="Confirm Password" id="password" />
          <Link to="/signup-step-2">Send Otp</Link>
          <div className="seprate-div">
            <div />
            Or
            <div />
          </div>
          <div class="social">
            <Link class="fb" to={"/signup"}>
              <img src={Google} alt="" srcSet="" />
              Register with Google
            </Link>
          </div>
          <small
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Already have account? <Link to={"/login"}>Login</Link>
          </small>
        </form>
      </div>
    </>
  );
}

export default LoginFirst;
