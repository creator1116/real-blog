// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaJd9G7UtfLst8PWHPMstMyqX6z5970nA",
  authDomain: "blog-f063a.firebaseapp.com",
  projectId: "blog-f063a",
  storageBucket: "blog-f063a.firebasestorage.app",
  messagingSenderId: "938246648940",
  appId: "1:938246648940:web:1d2bad14e430d125d1d449",
  measurementId: "G-XV024RCFED"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);