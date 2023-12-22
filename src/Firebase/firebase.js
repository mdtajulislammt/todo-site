// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnEmw3kTDeENvUNqiKL-lFRVFiQGHI4O4",
  authDomain: "todo-site-96f30.firebaseapp.com",
  projectId: "todo-site-96f30",
  storageBucket: "todo-site-96f30.appspot.com",
  messagingSenderId: "108262110585",
  appId: "1:108262110585:web:c5f3af8fee4f3a0ff86ba8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
 export default auth ;