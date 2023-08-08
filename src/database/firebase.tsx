import {initializeApp, getApps} from 'firebase/app'
import {
	GoogleAuthProvider,
	getAuth,
	signInWithPopup,
	signOut,
} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getDatabase} from 'firebase/database'

const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
	storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}
let app
if (!getApps().length) {
	app = initializeApp(firebaseConfig)
} else {
	app = getApps()[0] // if already initialized, use that one
}

const provider = new GoogleAuthProvider()
export const auth = getAuth(app)
export const db = getFirestore(app)
export const rtdb = getDatabase(app)

export const LoginWithGooglePopUp = async () => {
	try {
		await signInWithPopup(auth, provider)
	} catch (error) {
		console.log(error)
	}
}

export const LogoutFromGoogleAuth = () => signOut(auth)
