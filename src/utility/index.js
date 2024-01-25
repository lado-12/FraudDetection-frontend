// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATgjUuBAXNjaanmY79Z3ouIuAY_Y0tt1w",
  authDomain: "fraudynumber.firebaseapp.com",
  projectId: "fraudynumber",
  storageBucket: "fraudynumber.appspot.com",
  messagingSenderId: "999597268784",
  appId: "1:999597268784:web:df33152b7b48b3334432f5",
  measurementId: "G-8FZQKF5J2W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);