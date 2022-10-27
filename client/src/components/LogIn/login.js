import React, { useEffect, useState } from "react";
import PreLoader from "../preloader/preloader";
import { AiOutlineGoogle } from "react-icons/ai";
import { Link } from "react-router-dom";

function Login() {
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
    <div class="w-full max-w-lg">
    <form class="bg-gradient-to-r from-gray-500 to-black-500/5 rounded shadow-lg px-8 pt-6 pb-8 mb-4 w-full">
      <div class=" text-center mb-4">
        <label class="block text-white text-lg font-bold mb-2" for="username">
        Existing User?
        </label>
        <Link as={Link} to="/loginexist" style={{textDecoration: 'none'}} class="text-white">
        <button class="bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Log IN
        </button>
        </Link>
        <div class="inline m-3 block text-white text-sm mb-2">
          Or
        </div>
        <button class="bg-blue-500 hover:bg-blue-700 text-white text-base font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
          <AiOutlineGoogle style={{ position: "relative", fontSize: "1.1em"}}/>Log in
        </button>
        </div>
        <div class="h-0.5 bg-white m-3"></div>
      <div class="mb-6">
        <label class="block text-white text-lg font-bold mb-2 text-center" for="password">
          New User?
        </label>
      </div>
      <div class="flex items-center justify-center">
      <Link as={Link} to="/loginfirst" style={{textDecoration: 'none'}} class="text-white">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Sign Up
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

export default Login;
