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
// Import Firebase Auth functions
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

// Register a new user function
function registerUser(email, password) {
  const auth = getAuth(); // Get the Firebase Auth instance

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // User registered successfully
      const user = userCredential.user;
      console.log('User registered:', user);
    })
    .catch((error) => {
      // Handle registration errors
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Error:', errorCode, errorMessage);
    });
}
// Import Firebase Database functions
import { getDatabase, ref, set } from 'firebase/database';

// Write data to the database
function writeUserData(userId, name, email) {
  const db = getDatabase(); // Get the Firebase Database instance
  const userRef = ref(db, 'users/' + userId); // Create a reference for the user

  // Set data in the database
  set(userRef, {
    username: name,
    email: email,
  })
    .then(() => {
      console.log('User data saved successfully');
    })
    .catch((error) => {
      console.error('Error writing data:', error);
    });
}
function registerUser(email, password) {
  const auth = getAuth();

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // User registered successfully
      const user = userCredential.user;

      // Now save user data to Firebase Database
      writeUserData(user.uid, email, email); // Use the user’s UID as the userId
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Error:', errorCode, errorMessage);
    });
}


