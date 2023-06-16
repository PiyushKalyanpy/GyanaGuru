import { initializeApp, getApps } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyDZ-bX1CGTf0QACA89FG17SlwjD9oPEYrw",
  authDomain: "gyanaguru-8711e.firebaseapp.com",
  projectId: "gyanaguru-8711e",
  storageBucket: "gyanaguru-8711e.appspot.com",
  messagingSenderId: "310952359370",
  appId: "1:310952359370:web:626d36d3751852219a8b33",
  measurementId: "G-EMQS3VX9NT"
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
