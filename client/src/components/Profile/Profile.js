import "./css/profile.css";
import React, { useState } from "react";
import copy from "copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import idCard from "./css/idcard.jpg";
const Profile = () => {
  const [copyText, setCopyText] = useState("2020CA_XAFTGC12");
  const handleCopyText = (e) => {
    setCopyText(e.target.value);
  };
  const copyToClipboard = () => {
    copy(copyText);
    toast.success(`Copied`);
  };
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
                  <span className="value">Dishant</span>
                </li>
                <li>
                  <span className="id">Gender</span>
                  <span className="value">Male</span>
                </li>
                <li>
                  <span className="id">College</span>
                  <span className="value">IIT Ropar</span>
                </li>
                <li>
                  <span className="id">College State</span>
                  <span className="value">Punjab</span>
                </li>
                <li>
                  <span className="id">Year of Study</span>
                  <span className="value">2022</span>
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
                  <span className="value">+91-1234567890</span>
                </li>
                <li>
                  <span className="id">Email</span>
                  <span className="value">
                    test1234@gmail.com
                    <span
                      class="material-symbols-outlined"
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
                value={copyText}
                disabled
              />
            </div>
            <div className="refferal-copy" onClick={copyToClipboard}>
              <span class="material-symbols-outlined">content_copy</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
