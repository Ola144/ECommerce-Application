// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIKYy97TvmPXDIeeBZETi9fjHUebJOGMk",
  authDomain: "ecommerce-application-81bf8.firebaseapp.com",
  projectId: "ecommerce-application-81bf8",
  storageBucket: "ecommerce-application-81bf8.firebasestorage.app",
  messagingSenderId: "936786175992",
  appId: "1:936786175992:web:e9350ca36c11a39da1d80d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);

const auth = getAuth(app);

export { auth, fireDB };
