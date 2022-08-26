// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKJB2Ga2Z5s6YLqGpeu1mvUIqckeeCl38",
  authDomain: "search-find-8c8d8.firebaseapp.com",
  projectId: "search-find-8c8d8",
  storageBucket: "search-find-8c8d8.appspot.com",
  messagingSenderId: "683491397693",
  appId: "1:683491397693:web:d336bb1f632a71f839da54"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore
export const db = getFirestore(app)
