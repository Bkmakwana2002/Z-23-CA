import { isValidElement } from "react";
import { useState } from "react";
import "./css/profile-main-styles.css";
import Image from "./css/profile.webp";
import Leaderboard from "./Leaderboard";
import Profile from "./Profile";

const Profile_main = () => {
  const values = [
    { id: 1, text: "PROFILE" },
    { id: 2, text: "LEADERBOARD" },
    { id: 3, text: "CA GUIDE" },
  ];
  const [isActive, setActive] = useState(1);
  return (
    <div className="profile-main">
      <div className="profile-card">
        <div className="profile-tabs">
          {values.map((val) => (
            <button
              onClick={() => setActive(val.id)}
              className={`${isActive === val.id ? "active" : ""}`}
            >
              {val.text}
            </button>
          ))}
        </div>
        <div className="main-content">
          <div className="profile-data-main">
            <div className={`${isActive === values[0].id ? "yes" : "no"}`}>
              <Profile />
            </div>
            <div className={`${isActive === values[1].id ? "yes1" : "no1"}`}>
              <Leaderboard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile_main;
