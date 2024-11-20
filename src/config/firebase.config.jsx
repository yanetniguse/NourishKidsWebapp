// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAUv5skErlpVU8MsPDWvIGkSbvQyDU8gpE",
    authDomain: "nourishkids-7bdf8.firebaseapp.com",
    projectId: "nourishkids-7bdf8",
    storageBucket: "nourishkids-7bdf8.firebasestorage.app",
    messagingSenderId: "127340846520",
    appId: "1:127340846520:web:39b050d00253fb3402834d",
};

const app = initializeApp(firebaseConfig);
export const googleProvider = new GoogleAuthProvider();
export const auth = getAuth(app);
export const db = getFirestore(app);
