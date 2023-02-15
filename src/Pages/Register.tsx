import { FormEvent, useState } from 'react'
import { useThemeContext } from 'contexts/Theme/ThemeContext'
import { RegisterUser } from 'services/TechieAPI/RegisterUser'
import { PrimaryButton, StyledSection, StyledInput, StyledLabel, StyledFieldset, StyledForm, StyledTitle, StyledRegisterContainer, TerciaryLink } from 'components'
import { RegisterUserSupabaseAPI } from 'services/SupabaseAPI/RegisterUserFromSupabase'
import styled from 'styled-components'

const StyledParagraph = styled('p')`
	grid-column: span 2 / span 2;
`

export const Register = () => {
	const { theme } = useThemeContext()

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault()

		RegisterUserSupabaseAPI(name, email, password)
	}

	return (
		<StyledSection>
			<StyledRegisterContainer theme={theme}>
				<StyledTitle>Cree una nueva cuenta</StyledTitle>
				<StyledForm onSubmit={(e) => handleSubmit(e)}>
					<StyledFieldset>
						<StyledLabel htmlFor="name-input">Tu nombre:</StyledLabel>
						<StyledInput theme={theme} type='name' name='name' id='name-input' value={name} onChange={(e) => setName(e.target.value)} placeholder='Jhon Doe' />
					</StyledFieldset>
					<StyledFieldset>
						<StyledLabel htmlFor="email-input">Tu email:</StyledLabel>
						<StyledInput theme={theme} type='email' name='email' id='email-input' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='john.doe@gmail.com' />
					</StyledFieldset>
					<StyledFieldset>
						<StyledLabel htmlFor="password-input">Tu contraseña:</StyledLabel>
						<StyledInput theme={theme} type='password' name='password' id='password-input' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='contraseña' />
					</StyledFieldset>
					<PrimaryButton theme={theme}>
						<p>Registrarse</p>
					</PrimaryButton>
					<StyledParagraph>¿Ya tienes un cuenta?</StyledParagraph>
					<TerciaryLink to={'#'}>
						<p>Inicia sesion aqui</p>
					</TerciaryLink>
				</StyledForm>
			</StyledRegisterContainer>
		</StyledSection>
	)
}
