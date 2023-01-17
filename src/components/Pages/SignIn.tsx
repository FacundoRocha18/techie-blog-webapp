import { FormEvent, useState } from 'react'
import PropTypes from 'prop-types'
import { useAuthContext } from 'contexts/AuthContext'
import { useThemeContext } from 'contexts/ThemeContext'
import styled from 'styled-components'

const Title = styled.h2`
	color: ${props => props.color};
	grid-row: span 1 / span 1;
	font-size: 2em;
`

const Input = styled.input`
border: 2px solid ${props => props.color};
border-radius: 2px;
color: ${props => props.color};
grid-column: span 4 / span 4;
padding: 8px;
`

export const SignIn = () => {
	const { themeName, theme } = useThemeContext()
	const { signIn } = useAuthContext()

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault()

		signIn(email, password)
	}

	return (
		<section className='flex items-center justify-center' id='signup-container'>
			<div className='grid grid-cols-1 grid-rows-3 gap-8'>
				<Title color={theme.fontColor} >Cree una nueva cuenta</Title>
				<form onSubmit={(e) => handleSubmit(e)} className='grid grid-cols-4 row-span-2 gap-4 h-full w-full'>
					<Input type='email' name='email' id='email-input' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='john.doe@gmail.com' />
					<Input type='password' name='password' id='password-input' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='contraseña' />
					<button className={`bg-pink-500 hover:bg-pink-600 ${themeName === 'light' ? 'border-2' : 'border-0'
						} flex w-full items-center justify-center rounded-sm border-solid border-gray-800 p-2 text-center font-medium transition-colors duration-150 ease-linear col-span-4`} type="submit">
						<p>Registrarse</p>
					</button>
				</form>
			</div>
		</section>
	)
}

SignIn.propTypes = {}
