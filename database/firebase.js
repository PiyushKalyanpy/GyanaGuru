import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import firebase from "firebase/app";

let app;
if (!getApps().length) {
  app = initializeApp(
    {
      apiKey: "AIzaSyAdVOcxv8zrMm1tar-d5RLUluA9WZ4Lz9c",
      authDomain: "gssoc-63f66.firebaseapp.com",
      projectId: "gssoc-63f66",
      storageBucket: "gssoc-63f66.appspot.com",
      messagingSenderId: "712012005660",
      appId: "1:712012005660:web:80b77a21cf2f27ac6fbad9",
      measurementId: "G-HMX2Z8SNYZ"
    },
    "gyanaguru"
  );
} else {
  app = getApps()[0]; // if already initialized, use that one
}
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { app, db, auth, provider };
