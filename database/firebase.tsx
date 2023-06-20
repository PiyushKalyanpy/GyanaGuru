import { initializeApp, getApps } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyBL2Lpv5Z2QBO7H4yanXlA-VYMDVsFA8Q4",
  authDomain: "gyanaguru-29a96.firebaseapp.com",
  projectId: "gyanaguru-29a96",
  storageBucket: "gyanaguru-29a96.appspot.com",
  messagingSenderId: "655532417161",
  appId: "1:655532417161:web:b6401d4c5c48e392d26658",
  measurementId: "G-Z96574Y43S"
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
