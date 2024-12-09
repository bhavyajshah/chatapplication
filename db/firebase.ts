// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApNXOvpytSK19hXZ4wE6F2QQymGQz6VHI",
  authDomain: "blog-triggers-a6n3ca.firebaseapp.com",
  projectId: "blog-triggers-a6n3ca",
  storageBucket: "blog-triggers-a6n3ca.appspot.com",
  messagingSenderId: "111340812772",
  appId: "1:111340812772:web:0d4529f9dad1525b306ff1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
export {auth}