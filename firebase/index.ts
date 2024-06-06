import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBFLsFrGsXHwrNf7HLp70kDhV8Y6Lx8cJ4",
  authDomain: "test-f1965.firebaseapp.com",
  databaseURL: "https://test-f1965-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "test-f1965",
  storageBucket: "test-f1965.appspot.com",
  messagingSenderId: "179105684360",
  appId: "1:179105684360:web:0534272e8f0400858d383d",
  measurementId: "G-DRW8WXES82"
};
const app = initializeApp(firebaseConfig);
export const AUTH = getAuth(app);
export const DB = getFirestore(app);