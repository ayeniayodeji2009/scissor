//For Authentication

import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBV9q_s2TDVYh0uypuIMSAP2_THFy_TULg",
  authDomain: "scissor-4ebc9.firebaseapp.com",
  projectId: "scissor-4ebc9",
  storageBucket: "scissor-4ebc9.appspot.com",
  messagingSenderId: "973643646304",
  appId: "1:973643646304:web:e0df19c90ce53b689a8a05",
  measurementId: "G-WW39SNNZFW"
};

const app = initializeApp(firebaseConfig); // Initialize Firebase
const auth = getAuth(app); // Initialize Firebase Auth
const db = getFirestore(app);  // Initialize Firebase Firestore
const googleProvider = new GoogleAuthProvider(); // Initialize Firebase Google Auth Provider
const signInWithGoogle = async () => { // Sign in with Google
  try { // Try to sign in with Google Auth Provider
    const res = await signInWithPopup(auth, googleProvider); // Sign in with Google Auth Provider
    const user = res.user; // Get user
    const q = query(collection(db, "users"), where("uid", "==", user.uid)); // Get user data from Firestore
    const docs = await getDocs(q); // Get user data from Firestore
    if (docs.docs.length === 0) { // If user does not exist in Firestore
      await addDoc(collection(db, "users"), { // Add user to Firestore
        uid: user.uid, // User ID
        name: user.displayName, // User name
        authProvider: "google", // Authentication provider
        email: user.email, // User email
      });
    }
  } catch (err) { // If error
    console.error(err); // Log error
    alert(err.message); // Alert error message
  }
};
const logInWithEmailAndPassword = async (email, password) => { // Sign in with email and password
  try { // Try to sign in with email and password
    await signInWithEmailAndPassword(auth, email, password); // Sign in with email and password
  } catch (err) { // If error
    console.error(err); // Log error
    alert(err.message); // Alert error message
  } 
};
const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logout = () => {
  signOut(auth);
};
export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
};