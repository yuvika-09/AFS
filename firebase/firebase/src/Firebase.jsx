// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTDx81Jez78uIzzUm2WxXOYXK7QJxcZ88",
  authDomain: "fse-firebase.firebaseapp.com",
  projectId: "fse-firebase",
  storageBucket: "fse-firebase.firebasestorage.app",
  messagingSenderId: "183465516055",
  appId: "1:183465516055:web:05bb2cfd4289071c71d052"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);