import React, { useEffect, useState } from "react";
import PreLoader from "../preloader/preloader";
import { AiOutlineGoogle } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./CSS/login-styles.css";

function Login() {
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
          <h3>Login Here</h3>
          <label for="username">Email</label>
          <input type="text" placeholder="Email" id="username" />

          <label for="password">Password</label>
          <input type="password" placeholder="Password" id="password" />
          <button>Log In</button>
          <div className="seprate-div">
            <div />
            Or
            <div />
          </div>
          <div class="social">
            <div class="go">
              <i class="fab fa-google"></i> Register
            </div>
            <div class="fb">
              <i class="fab fa-facebook"></i>Google
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
