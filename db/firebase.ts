// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

 const firebaseConfig = {
  apiKey: "AIzaSyBmlp_xd_IO_uOpR9uAvr0VfUUz0oWP5pQ",
  authDomain: "chatapplication-b5c9b.firebaseapp.com",
  projectId: "chatapplication-b5c9b",
  storageBucket: "chatapplication-b5c9b.firebasestorage.app",
  messagingSenderId: "604276754660",
  appId: "1:604276754660:web:a7c2db8980aa70ef4f84f1",
  measurementId: "G-JMQ0X1DE5F"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);