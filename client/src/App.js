import "./App.css";
import React, { useState, useEffect } from "react";
import Preloader from "./components/preloader/Pre";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Login from "./components/LogIn/login"
import LoginFirst from "./components/LogIn/loginfirst"
import LoginExist from "./components/LogIn/loginexist"
import LoginForm from "./components/LogIn/loginform"
import LoginOtp from "./components/LogIn/loginotp"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/loginfirst" element={<LoginFirst />} />
          <Route path="/loginexist" element={<LoginExist />} />
          <Route path="/loginform" element={<LoginForm />} />
          <Route path="/loginotp" element={<LoginOtp />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
