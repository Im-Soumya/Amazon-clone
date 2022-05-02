// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXSXu_w-bYJSPLQm5DfpGKiogGFYo1qqU",
  authDomain: "react--clone-d47e4.firebaseapp.com",
  projectId: "react--clone-d47e4",
  storageBucket: "react--clone-d47e4.appspot.com",
  messagingSenderId: "491273287254",
  appId: "1:491273287254:web:7312e61235203c9d52edf7",
  measurementId: "G-DCYCXBK2YV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();

const analytics = getAnalytics(app);