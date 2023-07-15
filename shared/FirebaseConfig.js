// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASe_API,
  authDomain: "player-finder-92df9.firebaseapp.com",
  projectId: "player-finder-92df9",
  storageBucket: "player-finder-92df9.appspot.com",
  messagingSenderId: "97162760276",
  appId: "1:97162760276:web:50a23c65b911688df9ddc1",
  measurementId: "G-LM5CFBHSS7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
//const analytics = getAnalytics(app);