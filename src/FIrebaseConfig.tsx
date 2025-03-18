import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { FIREBASE_CONFIG } from "./config";


const firebaseConfig = {
  apiKey: FIREBASE_CONFIG.apiKey,
  authDomain: FIREBASE_CONFIG.authDomain,
  projectId: FIREBASE_CONFIG.projectId,
  storageBucket: FIREBASE_CONFIG.storageBucket,
  messagingSenderId: FIREBASE_CONFIG.messagingSenderId,
  appId: FIREBASE_CONFIG.appId
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };