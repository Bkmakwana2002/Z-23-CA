import React, { useEffect, useState } from "react";
import PreLoader from "../preloader/preloader";
import { AiOutlineGoogle } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./CSS/login-styles.css";
import Google from "./google.svg";

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
            <Link class="fb" to={"/signup"}>
              <img src={Google} alt="" srcSet="" />
              Sign In with Google
            </Link>
          </div>
          <small>
            Don't have account? <Link to={"/signup"}>SignUp</Link>
          </small>
        </form>
      </div>
    </>
  );
}

export default Login;
