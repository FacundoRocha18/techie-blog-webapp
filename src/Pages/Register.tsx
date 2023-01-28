import { FormEvent, useState } from 'react'
import { useThemeContext } from 'contexts/ThemeContext'
import { RegisterUser } from 'services/TechieAPI/RegisterUser'
import { CButton, CSection, CInput, CLabel, CFieldset, CContainer, CForm, StyledTitle } from 'components'
import { RegisterUserSupabaseAPI } from 'services/Supabase/RegisterUserFromSupabase'

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
		<CSection>
			<CContainer color={theme.color}>
				<StyledTitle>Cree una nueva cuenta</StyledTitle>
				<CForm onSubmit={(e) => handleSubmit(e)}>
					<CFieldset>
						<CLabel htmlFor="name-input">Tu nombre:</CLabel>
						<CInput className={`${theme.fontColor} ${theme.card} ${theme.border}`} type='name' name='name' id='name-input' value={name} onChange={(e) => setName(e.target.value)} placeholder='Jhon Doe' />
					</CFieldset>
					<CFieldset>
						<CLabel htmlFor="email-input">Tu email:</CLabel>
						<CInput className={`${theme.fontColor} ${theme.card} ${theme.border}`} type='email' name='email' id='email-input' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='john.doe@gmail.com' />
					</CFieldset>
					<CFieldset>
						<CLabel htmlFor="password-input">Tu contraseña:</CLabel>
						<CInput className={`${theme.fontColor} ${theme.card} ${theme.border}`} type='password' name='password' id='password-input' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='contraseña' />
					</CFieldset>
					<CButton>
						<p>Registrarse</p>
					</CButton>
				</CForm>
			</CContainer>
		</CSection>
	)
}
