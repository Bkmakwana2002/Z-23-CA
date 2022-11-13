import React, { useEffect, useState } from "react";
import PreLoader from "../preloader/preloader";
import { AiOutlineGoogle } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./CSS/login-styles.css";
import { getAuth } from "firebase/auth";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ForgotPassowrd() {
  const auth = getAuth();
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState(null);
  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Fill required field first");
    } else {
      toast.info("Email has been sent");
      setLoading(false);
      await sendPasswordResetEmail(email);
    }
  };
  if (resetError) {
    toast.error("Something went wrong");
    setLoading(false);
  }
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="form-container">
        {" "}
        {(() => {
          if (sending) {
            return <PreLoader />;
          }
        })()}{" "}
        <form className="custom-form" noValidate onSubmit={handleResetPassword}>
          <h3> Forgot Password </h3>{" "}
          <input
            type="text"
            placeholder="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />{" "}
          <button type="submit"> Send Email </button>{" "}
          <small>
            <Link to={"/login"}> Login </Link>{" "}
          </small>{" "}
        </form>{" "}
      </div>{" "}
    </>
  );
}

export default ForgotPassowrd;
