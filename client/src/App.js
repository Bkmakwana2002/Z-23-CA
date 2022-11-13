import "./App.css";
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Preloader from "./components/preloader/Pre";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PreLoader from "./components/preloader/preloader";
import Login from "./components/Login/login";
import LoginFirst from "./components/Login/loginFirst";
import LoginForm from "./components/Login/loginForm";
import LoginOtp from "./components/Login/fillOtp";
import { app } from "./firebase-config";
import { getAuth } from "firebase/auth";

import ForgotPassowrd from "./components/Login/forgotPassword";
import Profile_main from "./components/Profile/Profile-main";

function App(props) {
  const [load, upadateLoad] = useState(true);
  const [email, setEmail] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log("userAuth", userAuth);
        setEmail(userAuth.email);
      } else {
        setEmail("");
      }
    });
    return unsubscribe;
  }, []);
  return (
    <Router>
      <Preloader load={load} />
      {/* <PreLoader /> */}
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar email={email} setEmail={setEmail} />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home email={email} />} />{" "}
          {(() => {
            if (!email) {
              return (
                <>
                  <Route path="/login" element={<Login />} />{" "}
                  <Route path="/signup" element={<LoginFirst />} />{" "}
                  <Route path="/signup-step-2" element={<LoginOtp />} />{" "}
                  <Route path="/forgot-password" element={<ForgotPassowrd />} />{" "}
                </>
              );
            }
          })()}
          {(() => {
            if (email) {
              return (
                <>
                  <Route
                    path="/profile"
                    element={<Profile_main email={email} />}
                  />{" "}
                </>
              );
            }
          })()}
          <Route path="/signup-step-3" element={<LoginForm email={email} />} />{" "}
          <Route path="*" element={<Navigate to="/" />} />{" "}
        </Routes>{" "}
        <Footer />
      </div>{" "}
    </Router>
  );
}

export default App;
