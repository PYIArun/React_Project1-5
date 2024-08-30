// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdY-Nab2N_UA6f8Ph_EW591xj819Xyzfg",
  authDomain: "vite-contact-e848d.firebaseapp.com",
  projectId: "vite-contact-e848d",
  storageBucket: "vite-contact-e848d.appspot.com",
  messagingSenderId: "433532445546",
  appId: "1:433532445546:web:67a22958a7f104e71d3b13"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);