import { initializeApp, getApps } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";




const firebaseConfig = {
  apiKey: "AIzaSyCkIfjYrwevcT4MRJ6U7u5jWyMM65bemS0",
  authDomain: "gyaanguru-bhavya.firebaseapp.com",
  projectId: "gyaanguru-bhavya",
  storageBucket: "gyaanguru-bhavya.appspot.com",
  messagingSenderId: "545555843403",
  appId: "1:545555843403:web:47f4bfba68158edd88c0ce",
  measurementId: "G-K67FR3FTG8"
};
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0]; // if already initialized, use that one
}

const provider = new GoogleAuthProvider();
export const auth = getAuth(app);
export const db = getFirestore(app);

export const LoginWithGooglePopUp = async () => {
  try {
    await signInWithPopup(auth, provider);
  } catch (error) {
    console.log(error);
  }
};

export const LogoutFromGoogleAuth = () => signOut(auth);
