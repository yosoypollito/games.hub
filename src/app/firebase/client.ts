"use client";
import { getAuth, type User, signInAnonymously } from "firebase/auth";

import { firebaseConfig } from "./config";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";
// Initialize Firebase
const app = initializeApp(firebaseConfig, "Front-App");
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export const Auth = () => {
  const auth = getAuth(app);

  const onAuthChange = () =>
    new Promise<User | null>((resolve, reject) => {
      auth.onAuthStateChanged(async (user) => {
        if (user) {
          await user.reload();
          const token = await user.getIdToken();
          localStorage.setItem("token", token);
          return resolve(user);
        }

        resolve(null);
      });
    });

  const anonSignIn = () =>
    new Promise(async (resolve, reject) => {
      try {
        await signInAnonymously(auth);

        resolve("Account created or reloged in");
      } catch (e) {
        //TODO handle diff errors;
        reject(e);
      }
    });

  const updateToken = () =>
    new Promise(async (resolve, reject) => {
      try {
        await signInAnonymously(auth);
        await onAuthChange();
        console.log("Token Refresed");
        resolve("Token Refresed");
      } catch (e) {
        //TODO handle diff errors
        reject(e);
      }
    });

  return {
    auth,
    onAuthChange,
    anonSignIn,
    updateToken,
  };
};
