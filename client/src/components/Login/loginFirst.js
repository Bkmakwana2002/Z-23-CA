import React, { useEffect, useState } from "react";
import PreLoader from "../preloader/preloader";
import { AiOutlineGoogle } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./CSS/login-styles.css";

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
          <small
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link to={"/login"}>
              <i class="fab fa-google"></i> Or Login
            </Link>
          </small>
        </form>
      </div>
    </>
  );
}

export default LoginFirst;
