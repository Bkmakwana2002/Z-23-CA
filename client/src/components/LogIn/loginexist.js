import React, { useEffect, useState } from "react";
import PreLoader from "../preloader/preloader";
import { Link } from "react-router-dom";

function LoginExist() {
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
          Username
        </label>
        <input class="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
      </div>
      <div class="mb-6 text-center">
        <label class="block text-white text-lg font-bold mb-2 text-center" for="password">
          Password
        </label>
        <input class="shadow appearance-none border border-red-500 rounded w-1/2 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
        <p class="text-red-500 text-sm italic text-center">Password must be ---</p>
      </div>
      <div class="flex justify-center">
        <button class="m-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
          Sign In
        </button>
        <a class="mt-4 inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
          Forgot Password?
        </a>
      </div>
    </form>
  </div>
  </div>
    }   
      
    </section>
  );
}

export default LoginExist;
