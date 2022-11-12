import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCyGg32Zr9tLMsjjjxIxss97FNRm5XIxZQ",
    authDomain: "z-23-registeration.firebaseapp.com",
    projectId: "z-23-registeration",
    storageBucket: "z-23-registeration.appspot.com",
    messagingSenderId: "930940459",
    appId: "1:930940459:web:d08dfb61dc21170d4d0c6e",
    measurementId: "G-LWX72YV5G3"
};
const provider = new GoogleAuthProvider();
const app = initializeApp(firebaseConfig);
export { app, provider };