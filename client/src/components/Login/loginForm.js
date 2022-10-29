import React, { useEffect, useState } from "react";
import PreLoader from "../preloader/preloader";
import { AiOutlineGoogle } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./CSS/login-styles.css";

function LoginForm() {
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
          <h3>Register-3/3</h3>
          <input type="text" placeholder="full name" id="name" />
          <input type="text" placeholder="college name" id="college name" />
          <input type="text" placeholder="city" id="city" />
          <input type="text" placeholder="state" id="state" />
          <input
            type="text"
            placeholder="6 digit refferal code(if any)"
            id="refferal_code"
          />
          <Link to={"/login"}>Register</Link>
          <small>
            <Link to={"/signup"}>Back</Link>
          </small>
        </form>
      </div>
    </>
  );
}

export default LoginForm;
