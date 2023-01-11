import { FormEvent, useState } from 'react'
import PropTypes from 'prop-types'
import { useAuthContext } from 'contexts/AuthContext'
import { useThemeContext } from 'contexts/ThemeContext'

export const SignIn = () => {
	const { themeName } = useThemeContext()
	const { signIn } = useAuthContext()

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault()

		signIn(email, password)
	}

	return (
		<section id='signup-container'>
			<form onSubmit={(e) => handleSubmit(e)} className='grid grid-cols-4 gap-4 h-full'>
				<input type="email" className='col-span-4 text-neutral-800 p-2 rounded-sm' name="email" id="email-input" value={email} onChange={(e) => setEmail(e.target.value)}  placeholder='example@example.com' />
				<input type='password' className='col-span-4 text-neutral-800 p-2 rounded-sm' name="password" id="password-input" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='contraseña'/>
				<button className={`bg-pink-500 hover:bg-pink-600 ${themeName === 'light' ? 'border-2' : 'border-0'
					} flex w-full items-center justify-center rounded-sm border-solid border-gray-800 p-2 text-center font-medium transition-colors duration-150 ease-linear col-span-4`} type="submit">
					<p>Registrarse</p>
				</button>
			</form>
		</section>
	)
}

SignIn.propTypes = {}
