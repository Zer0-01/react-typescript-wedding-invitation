import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';


const firebaseConfig = {
    apiKey: "AIzaSyBD6fqs-h3e7nCnxi8RfeiIB7SxMLaB-AU",
    authDomain: "react-wedding-802af.firebaseapp.com",
    projectId: "react-wedding-802af",
    storageBucket: "react-wedding-802af.firebasestorage.app",
    messagingSenderId: "923009925670",
    appId: "1:923009925670:web:275431a10db18850c59ce7"
  };

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };