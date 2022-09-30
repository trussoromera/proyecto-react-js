// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// agregar manual el get firestores
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCLSS4unUeeY9erSxB-j_Lr7ZSxF7-1aww",
    authDomain: "ecommerce-react-russo.firebaseapp.com",
    projectId: "ecommerce-react-russo",
    storageBucket: "ecommerce-react-russo.appspot.com",
    messagingSenderId: "92763038341",
    appId: "1:92763038341:web:afd69244830c7b085e3fec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service


export const auth = getAuth(app);