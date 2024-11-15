// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDi84OXV8hKagWpr_leQTpksuxjD-Vdnus",
    authDomain: "react-task-management-b3baf.firebaseapp.com",
    databaseURL: "https://react-task-management-b3baf-default-rtdb.firebaseio.com/",
    projectId: "react-task-management-b3baf",
    storageBucket: "react-task-management-b3baf.firebasestorage.app",
    messagingSenderId: "945227594695",
    appId: "1:945227594695:web:3f1f594436ca91492f37e2"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
