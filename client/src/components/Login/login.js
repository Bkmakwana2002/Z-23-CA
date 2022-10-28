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
          <input type="text" placeholder="Username or Email" id="username" />
          <input type="password" placeholder="Password" id="password" />
          <Link to={"/login"}>Log In</Link>
          <div className="seprate-div">
            <div />
            Or
            <div />
          </div>
          <div class="social">
            <Link class="go" to={"/signup"}>
              <i class="fab fa-google"></i> Register
            </Link>
            <Link class="fb" to={"/signup"}>
              <i class="fab fa-facebook"></i>Google
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
