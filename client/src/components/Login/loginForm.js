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
        <form className="custom-form" noValidate>
          <h3>Register-2/2</h3>
          <input type="text" placeholder="Full name" id="name" required />
          <input
            type="text"
            placeholder="College name"
            id="college name"
            required
          />
          <div className="gender">
            <div>Gender :</div>
            <input
              type="radio"
              id="html"
              name="fav_language"
              value="HTML"
              required
            />{" "}
            <label for="html">Male</label>
            <br />
            <input
              type="radio"
              id="css"
              name="fav_language"
              value="CSS"
              required
            />{" "}
            <label for="css">Female</label>
            <br />{" "}
            <input
              type="radio"
              id="javascript"
              name="fav_language"
              value="JavaScript"
              required
            />
            <label for="javascript">Other</label>
          </div>
          <input type="text" placeholder="State" id="state" required />
          <input
            type="text"
            placeholder="6 digit refferal code(if any)"
            id="refferal_code"
          />
          <label for="file">ID Card</label>
          <input type="file" id="id_card" name="id_card" required />
          <button type="submit"> Finish </button>{" "}
          {/* <small>
            <Link to={"/profile"}>Varify Later</Link>
          </small> */}
        </form>
      </div>
    </>
  );
}

export default LoginForm;
