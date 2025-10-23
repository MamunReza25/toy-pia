



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDLBueq0JtFSTBrClU6IfARV87KYr765NM",
    authDomain: "toy-pia.firebaseapp.com",
    projectId: "toy-pia",
    storageBucket: "toy-pia.firebasestorage.app",
    messagingSenderId: "1000289897739",
    appId: "1:1000289897739:web:954a4e78448c0eeb0c660e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);