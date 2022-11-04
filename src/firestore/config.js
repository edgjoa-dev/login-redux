// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";


const firebaseConfig = {
    apiKey: "AIzaSyBLzCygPRCk_7ZH3BRnPZGAvOeOFmYwl_k",
    authDomain: "login-react-a3bad.firebaseapp.com",
    projectId: "login-react-a3bad",
    storageBucket: "login-react-a3bad.appspot.com",
    messagingSenderId: "181697060293",
    appId: "1:181697060293:web:28544076437636420cffac"
};


// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDB = getFirestore(firebaseApp);