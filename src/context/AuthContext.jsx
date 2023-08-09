'use client'

import React, {useState, useContext, useEffect} from 'react'
import {auth, db} from '../data/remote/firebase'
import {signOut, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import {doc, getDoc, setDoc} from 'firebase/firestore'
import {useRouter} from 'next/router'

export const AuthContext = React.createContext()

export function useAuth() {
	return useContext(AuthContext)
}

export function AuthProvider({children}) {
	const [currentUser, setCurrentUser] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const router = useRouter()

	const clear = async () => {
		try {
			setCurrentUser(null)
			setIsLoading(false)
		} catch (error) {
			console.error(error)
		}
	}

	const authStateChanged = async (user) => {
		setIsLoading(true)
		if (!user) {
			clear()
			return
		}
		console.log('aa')
		const userDoc = await getDoc(doc(db, 'users', user.email))
		setCurrentUser(userDoc.data())
		setIsLoading(false)
	}

	const loginWithGoogle = async () => {
		const provider = new GoogleAuthProvider()
		signInWithPopup(auth, provider).then((result) => {
			// check if user is present in user firestore database
			const docRef = doc(db, 'users', result.user.uid)
			getDoc(docRef).then((docSnap) => {
				if (docSnap.exists()) {
					// set current user
					setCurrentUser(docSnap.data())

					router.push('/courses')
				} else {
					// user does not exist
					setDoc(doc(db, 'users', result.user.email), {
						email: result.user.email,
						name: result.user.displayName,
						photoURL: result.user.photoURL,
						uid: result.user.uid,
						role: 'user',
						createdAt: new Date(),
						isVerified: result.user.emailVerified,
						isActive: false,
						isOnline: false,
					})
					router.push('/courses')
				}
			})
		})
	}

	const logout = () => {
		signOut(auth).then(() => {
			setCurrentUser(null)
			router.push('/login')
		})
	}
	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			authStateChanged(user)
		})
	}, [])

	const value = {
		loginWithGoogle,
		currentUser,
	}

	return (
		<AuthContext.Provider
			value={{
				currentUser,
				loginWithGoogle,
				logout,
				isLoading,
			}}>
			{!isLoading && children}
		</AuthContext.Provider>
	)
}
