// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLBMfdWlFLlKvBeFIU1xt-tqdIIZOWkls",
  authDomain: "dropbox-316fa.firebaseapp.com",
  projectId: "dropbox-316fa",
  storageBucket: "dropbox-316fa.appspot.com",
  messagingSenderId: "177379172392",
  appId: "1:177379172392:web:27789e1d1b16c98d0c951d",
  measurementId: "G-CPP89HSXPB"
};

// Initialize Firebase
!getApps().length ? initializeApp(firebaseConfig) : getApp();
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const storage = getStorage();
const provider = new GoogleAuthProvider();
const firestoreCollection = collection(db, "users");

export default db;
export const database = getAuth(app);
export { auth, storage, provider, firestoreCollection, db };
