// Import the necessary Firebase functions
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// import { getAnalytics } from "firebase/analytics"; // If you want analytics, uncomment this line

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnU1VXHSVP_a_EazDUPsYCM7TA6OC-S28",
  authDomain: "subjectwars-20378.firebaseapp.com",
  projectId: "subjectwars-20378",
  storageBucket: "subjectwars-20378.firebasestorage.app",
  messagingSenderId: "274651372183",
  appId: "1:274651372183:web:5678af5a689e43816e67d2",
  measurementId: "G-H6PVTFRZ71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth and Database (use these in your app)
const auth = getAuth(app);
const database = getDatabase(app);

// Optional: Initialize Firebase Analytics (uncomment if needed)
// const analytics = getAnalytics(app);

export { auth, database }; // Export the services to use in your app
