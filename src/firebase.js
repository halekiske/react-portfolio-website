
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAhREJiGMHHT-o0a33rKzKnqfjvboKk4s8",
  authDomain: "react-portfolio-6cf05.firebaseapp.com",
  projectId: "react-portfolio-6cf05",
  storageBucket: "react-portfolio-6cf05.appspot.com",
  messagingSenderId: "826046987161",
  appId: "1:826046987161:web:077c8027868804e267f108"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);