
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
const firebaseConfig = {
  apiKey: "AIzaSyB2RFbIPgr-MpIdl5kuomLNkddG5s9YMK8",
  authDomain: "login-page-1d493.firebaseapp.com",
  projectId: "login-page-1d493",
  storageBucket: "login-page-1d493.appspot.com",
  messagingSenderId: "665070062035",
  appId: "1:665070062035:web:07a8a42222857226464726"
};


const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);
