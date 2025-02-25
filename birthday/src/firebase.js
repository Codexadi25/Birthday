// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBA7FXyPbSdMWW4jSdgOAX9sMpIl3FBC20",
  authDomain: "birthdaywish-a7a62.firebaseapp.com",
  projectId: "birthdaywish-a7a62",
  storageBucket: "birthdaywish-a7a62.firebasestorage.app",
  messagingSenderId: "201008364342",
  appId: "1:201008364342:web:10df9f527b4a017b89d197",
  measurementId: "G-V32CR9ZW61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);