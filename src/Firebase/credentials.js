// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCV4wfByxJc3_25TlFA405cFbOnJU9_ZO4",
    authDomain: "makefit-3e6d3.firebaseapp.com",
    projectId: "makefit-3e6d3",
    storageBucket: "makefit-3e6d3.appspot.com",
    messagingSenderId: "126060193456",
    appId: "1:126060193456:web:bc8998e6a2d0ebddbf7d75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider()
const facebook = new FacebookAuthProvider();
const db = getFirestore();

export {
    app,
    google,
    facebook,
    db
}