// firebase.js
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';

// Register a new user function
function registerUser(email, password) {
  const auth = getAuth();

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      // Now save user data to Firebase Database
      writeUserData(user.uid, email, email);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Error:', errorCode, errorMessage);
    });
}

// Function to save data to the database
function writeUserData(userId, name, email) {
  const db = getDatabase();
  const userRef = ref(db, 'users/' + userId);

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

// Export the registerUser function to be used in other files
export { registerUser };
