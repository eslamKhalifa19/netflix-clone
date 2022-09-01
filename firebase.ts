import { getFirestore } from "firebase/firestore";
import { getApps, getApp, initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "netflix-37210.firebaseapp.com",
  projectId: "netflix-37210",
  storageBucket: "netflix-37210.appspot.com",
  messagingSenderId: "908931748232",
  appId: "1:908931748232:web:75bbe69584857bb6a82a3d",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
