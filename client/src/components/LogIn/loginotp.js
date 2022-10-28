import React, { useEffect, useState } from "react";
import PreLoader from "../preloader/preloader";
import { Link } from "react-router-dom";

function LoginOtp() {
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <section> 
        {loading ? <PreLoader /> : 
    <div class="min-h-screen p-6 bg-black flex items-center justify-center">
    <div class="w-full max-w-xs">
    <form class="bg-gradient-to-r from-gray-500 to-black-500/5 rounded shadow-lg px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-white text-sm font-bold mb-2 text-center" for="message">
          OTP Sent Successfully!
        </label>
     </div>
      <div class="mb-6">
        <label class="block text-white text-sm font-bold mb-2 text-center" for="otp">
          Enter OTP
        </label>
        <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="XXXX" />
      </div>
      <div class="flex items-center justify-center">
      <Link as={Link} to="/loginform" style={{textDecoration: 'none'}} class="text-white">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
          Submit
        </button>
      </Link>
      </div>
    </form>
  </div>
  </div>
    }   
      
    </section>
  );
}

export default LoginOtp;
