import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

export const SignIn = (email: string, password: string) => {
	
	const auth = getAuth()
	createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			const user = userCredential.user
		})
		.catch((error) => {
			const errorCode = error.code
			const errorMessage = error.message
			console.log(errorCode + errorMessage)
		})
}
