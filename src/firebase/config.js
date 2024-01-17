import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCDCkBNK0kSYYKttKD-uJSVz0ONZqqtJMA",
  authDomain: "react-journal-app-9bb7d.firebaseapp.com",
  projectId: "react-journal-app-9bb7d",
  storageBucket: "react-journal-app-9bb7d.appspot.com",
  messagingSenderId: "994184326635",
  appId: "1:994184326635:web:8a9529a491e40d7d64bdae",
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
