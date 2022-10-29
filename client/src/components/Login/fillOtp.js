import React, { useEffect, useState } from "react";
import PreLoader from "../preloader/preloader";
import { AiOutlineGoogle } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./CSS/login-styles.css";

function LoginOtp() {
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
          <h3>Register-2/3</h3>
          <input type="password" placeholder="4 digits otp" id="password" />
          <Link to="/signup-step-3">Verify</Link>
          <small
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link to={"/login"}>Resend OTP</Link>
          </small>
        </form>
      </div>
    </>
  );
}

export default LoginOtp;
