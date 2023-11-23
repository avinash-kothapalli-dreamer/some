// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEiURS_LSuQ5fG5WT8x02E0e7_ukyfb4s",
  authDomain: "wired-record-395406.firebaseapp.com",
  projectId: "wired-record-395406",
  storageBucket: "wired-record-395406.appspot.com",
  messagingSenderId: "1036753522345",
  appId: "1:1036753522345:web:6a4959c1201867bf78e3b8",
  measurementId: "G-0Y1G3TNVHK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;