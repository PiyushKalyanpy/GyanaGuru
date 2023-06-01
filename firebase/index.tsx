// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyeYkaPZvmMcvzaTEKKeGMup0on3msj3Y",
  authDomain: "gyan-934ec.firebaseapp.com",
  projectId: "gyan-934ec",
  storageBucket: "gyan-934ec.appspot.com",
  messagingSenderId: "478457042257",
  appId: "1:478457042257:web:4e9bf45535974f85ba6f70",
  measurementId: "G-V0LQESVYPZ"
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
