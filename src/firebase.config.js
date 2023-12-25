import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import {getStorage} from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyDdro0O87-uP12Ev7Pi1kqAuSU68dktcNQ",
  authDomain: "manu-eb703.firebaseapp.com",
  projectId: "manu-eb703",
  storageBucket: "manu-eb703.appspot.com",
  messagingSenderId: "739022597825",
  appId: "1:739022597825:web:5ec03142d6484f56976e40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const  auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;