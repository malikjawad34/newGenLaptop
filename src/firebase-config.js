// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7i6lxJtZW5NULs8Ny_2yk8cNoBq3yTB8",
  authDomain: "new-gen-laptop.firebaseapp.com",
  projectId: "new-gen-laptop",
  storageBucket: "new-gen-laptop.appspot.com",
  messagingSenderId: "697068432493",
  appId: "1:697068432493:web:8bcec4f4800dbe223b2364"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);



