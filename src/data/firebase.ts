// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from '@firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsyYOvsuiG7GCrBHj8L5aISo9wbGJK9SY",
  authDomain: "ferreteria-amk.firebaseapp.com",
  projectId: "ferreteria-amk",
  storageBucket: "ferreteria-amk.appspot.com",
  messagingSenderId: "390018406075",
  appId: "1:390018406075:web:970ff955bd943d47333b9e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)