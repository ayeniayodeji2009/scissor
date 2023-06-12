//import 'firebase/firestore';
import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import 'firebase/compat/storage';
//import * as firebase from 'firebase';
//import { initializeApp } from 'firebase/app';



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


  const firebaseApp = firebase.initializeApp(firebaseConfig);
 // export const db = firebase.firestore(app);
  const db = firebaseApp.firestore();
  // const auth = firebase.auth();
  // const storage = firebase.storage();
  // const provider = new firebase.auth.GoogleAuthProvider();

// function getFirestore(app: F) {
//     throw new Error('Function not implemented.');
// }

export { db };
//export { auth, provider, storage };