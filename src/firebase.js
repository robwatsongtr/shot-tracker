// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATAWngDJdHE1eLoqkeKN1TiVSYGy5aBKg",
  authDomain: "shot-tracker-ea8d2.firebaseapp.com",
  projectId: "shot-tracker-ea8d2",
  storageBucket: "shot-tracker-ea8d2.appspot.com",
  messagingSenderId: "173697030928",
  appId: "1:173697030928:web:bae4e766ab340c7ed66395"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);