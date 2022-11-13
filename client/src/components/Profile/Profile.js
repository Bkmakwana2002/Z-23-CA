import "./css/profile.css";
import React, { useEffect, useState } from "react";
import copy from "copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import idCard from "./css/idcard.jpg";
import PreLoader from "../preloader/preloader";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Profile = (props) => {
  let navigate = useNavigate();
  const [copyText, setCopyText] = useState("2020CA_XAFTGC12");
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState();
  const [college, setCollege] = useState();
  const [gender, setGender] = useState();
  const [state, setState] = useState();
  const [id_card, setID_Card] = useState();
  const [dob, setDOB] = useState();
  const [phone, setPhone] = useState();
  const [YearOfPassing, setYearOfPassing] = useState();
  const [refferal, setRefferal] = useState();
  const handleCopyText = (e) => {
    setCopyText(e.target.value);
  };
  const copyToClipboard = () => {
    copy(refferal);
    toast.success(`Copied`);
  };
  const handleProfileData = () => {
    setLoading(true);
    const res = fetch("http://localhost:5000/profile/getUser", {
      method: "POST",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify({ id: props.email }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.name);
        setName(data.name);
        setCollege(data.collegeName);
        setDOB(data.dob);
        setGender(data.gender);
        setPhone(data.phone);
        setState(data.collegeState);
        setYearOfPassing(data.YearOfPassing);
        setRefferal(data.referral_code);
      })
      .catch((err) => {
        toast.error("Something went wrong...");
        Navigate("/");
      });
    setLoading(false);
  };
  useEffect(() => {
    return handleProfileData;
  }, []);
  if (loading) {
    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            width: "600px",
            height: "300px",
          }}
        >
          <h1>Please wait...</h1>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="profile">
        <div className="profile-left">
          <div className="profile-personal-details">
            <div className="profile-personal-details-head">
              <h1>Personal Details</h1>
            </div>
            <div className="profile-personal-details-content">
              <ul>
                <li>
                  <span className="id">Name</span>
                  <span className="value">{name}</span>
                </li>
                <li>
                  <span className="id">Gender</span>
                  <span className="value">{gender}</span>
                </li>
                <li>
                  <span className="id">College</span>
                  <span className="value">{college}</span>
                </li>
                <li>
                  <span className="id">College State</span>
                  <span className="value">{state}</span>
                </li>
                <li>
                  <span className="id">Year of Passing</span>
                  <span className="value">{YearOfPassing}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="profile-contact-info">
            <div className="profile-contact-details-head">
              <h1>Contact Details</h1>
            </div>
            <br />
            <div className="profile-contact-details-content">
              <ul>
                <li>
                  <span className="id">Phone</span>
                  <span className="value">+91-{phone}</span>
                </li>
                <li>
                  <span className="id">Email</span>
                  <span className="value">
                    {props.email}
                    <span
                      className="material-symbols-outlined"
                      style={{
                        padding: "0 5px",
                      }}
                    >
                      verified
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="profile-right">
          <div className="profile-image">
            <img
              src="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_960_720.png"
              alt=""
              srcSet=""
            />
          </div>
          <div className="profile-id-card">
            <img src={idCard} alt="" srcSet="" />
          </div>
          <div className="profile-refferal-section">
            <div className="refferal-content">
              <input
                type="text"
                className="text"
                onChange={handleCopyText}
                value={refferal}
                disabled
              />
            </div>
            <div className="refferal-copy" onClick={copyToClipboard}>
              <span className="material-symbols-outlined">content_copy</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
