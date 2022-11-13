import React, { useEffect, useState } from "react";
import PreLoader from "../preloader/preloader";
import { AiOutlineGoogle } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./CSS/login-styles.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function LoginForm(props) {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    name: "",
    college: "",
    gender: "",
    state: "",
    id_card: "",
    dob: "",
    phone: "",
    YearOfPassing: "",
  });
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    if (
      user.name === "" ||
      user.college === "" ||
      user.gender === "" ||
      user.state === "" ||
      user.id_card === "" ||
      user.dob === "" ||
      user.phone === "" ||
      user.YearOfPassing === ""
    ) {
      toast.error("Please fill required fields");
      setLoading(false);
    } else {
      fetch("http://localhost:5000/profile/addUser", {
        method: "POST",
        headers: { "Content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify({
          name: user.name,
          email: props.email,
          collegeName: user.college,
          gender: user.gender,
          collegeState: user.state,
          idCard: user.id_card,
          dob: user.dob,
          phone: user.phone,
          YearOfPassing: user.YearOfPassing,
        }),
      })
        .then((response) => response.json())
        .then((json) => {
          navigate("/profile");
        });
      setLoading(false);
    }
  };
  {
    (() => {
      if (loading) {
        return <PreLoader />;
      }
    })();
  }
  return (
    <>
      <div className="form-container">
        <form className="custom-form" noValidate onSubmit={handleSubmit}>
          <h3>Register-2/2</h3>
          <input
            type="text"
            placeholder="Full name"
            id="name"
            name="name"
            value={user.name}
            onChange={(e) => onInputChange(e)}
            required
          />
          <input
            type="text"
            placeholder="College name"
            id="college name"
            name="college"
            value={user.college}
            onChange={(e) => onInputChange(e)}
            required
          />
          <input
            type="text"
            placeholder="College State"
            id="state"
            value={user.state}
            name="state"
            onChange={(e) => onInputChange(e)}
            required
          />
          <input
            type="text"
            name="YearOfPassing"
            id="YearOfPassing"
            placeholder="Year Of Passing"
            value={user.YearOfPassing}
            onChange={(e) => onInputChange(e)}
          />
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Phone"
            value={user.phone}
            onChange={(e) => onInputChange(e)}
          />
          <div className="gender">
            <div>Gender :</div>
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              onChange={(e) => onInputChange(e)}
              required
            />{" "}
            <label for="gender">Male</label>
            <br />
            <input
              type="radio"
              id="gender"
              name="gender"
              value="female"
              onChange={(e) => onInputChange(e)}
              required
            />{" "}
            <label for="gender">Female</label>
            <br />{" "}
            <input
              type="radio"
              id="gender"
              name="gender"
              value="other"
              onChange={(e) => onInputChange(e)}
              required
            />
            <label for="gender">Other</label>
          </div>
          <input
            type="date"
            placeholder="D.O.B."
            id="dob"
            name="dob"
            value={user.dob}
            onChange={(e) => onInputChange(e)}
            required
          />
          <label for="file">ID Card</label>
          <input
            type="file"
            id="id_card"
            name="id_card"
            value={user.id_card}
            onChange={(e) => onInputChange(e)}
            required
          />
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
