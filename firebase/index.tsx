import { initializeApp, getApps } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDRdGJJUKyqjsJgQs4fkDUpJdGKBha_9eg",
  authDomain: "gyanaguru-160d9.firebaseapp.com",
  databaseURL: "https://gyanaguru-160d9-default-rtdb.firebaseio.com",
  projectId: "gyanaguru-160d9",
  storageBucket: "gyanaguru-160d9.appspot.com",
  messagingSenderId: "942292389438",
  appId: "1:942292389438:web:c45e0e894f2406e18b8b6f",
  measurementId: "G-0CSPV2Y0Y3"
};
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0]; // if already initialized, use that one
}

const provider = new GoogleAuthProvider();
export const auth = getAuth(app);

export const LoginWithGooglePopUp = async () => {
  try {
    await signInWithPopup(auth, provider);
  } catch (error) {
    console.log(error);
  }
};

export const LogoutFromGoogleAuth = () => signOut(auth);
