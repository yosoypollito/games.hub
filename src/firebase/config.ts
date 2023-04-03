// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANwWz-uwrrF1QFREzSmWY3Xa0574COmRE",
  authDomain: "daif-games-hub.firebaseapp.com",
  databaseURL: "https://daif-games-hub-default-rtdb.firebaseio.com",
  projectId: "daif-games-hub",
  storageBucket: "daif-games-hub.appspot.com",
  messagingSenderId: "1038867601095",
  appId: "1:1038867601095:web:87a2bdb0458ec1358a10e2",
  measurementId: "G-G9QX1YB892",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);

