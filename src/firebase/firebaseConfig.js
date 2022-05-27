import { initializeApp } from "firebase/app";
import {  getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBMczUqfKk7ARuKCQeWAK2sV_WkCM97jsw",
  authDomain: "ecommerce-coder-3a522.firebaseapp.com",
  projectId: "ecommerce-coder-3a522",
  storageBucket: "ecommerce-coder-3a522.appspot.com",
  messagingSenderId: "940212617295",
  appId: "1:940212617295:web:6e9d3022039a207848ea3a"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
