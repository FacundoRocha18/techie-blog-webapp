import { FormEvent, useState } from 'react'
import { useThemeContext } from 'contexts/Theme/ThemeContext'
import { RegisterUser } from 'services/TechieAPI/RegisterUser'
import { StyledButton, StyledSection, StyledInput, StyledLabel, StyledFieldset, StyledContainer, StyledForm, StyledTitle } from 'components'
import { RegisterUserSupabaseAPI } from 'services/SupabaseAPI/RegisterUserFromSupabase'

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
			<StyledContainer color={theme.color}>
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
					<StyledButton theme={theme}>
						<p>Registrarse</p>
					</StyledButton>
				</StyledForm>
			</StyledContainer>
		</StyledSection>
	)
}
