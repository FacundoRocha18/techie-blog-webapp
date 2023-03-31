import { FormEvent, useState } from 'react'
import { useThemeContext } from 'contexts/Theme/ThemeContext'
import { RegisterUser } from 'services/TechieAPI/RegisterUser'
import {
  PrimaryButton,
  StyledSection,
  StyledInput,
  StyledLabel,
  StyledFieldset,
  StyledForm,
  StyledTitle,
  StyledRegisterContainer,
  TerciaryLink,
} from 'components'
import styled from 'styled-components'

const StyledParagraph = styled('p')`
  grid-column: span 2 / span 2;
`

export const Register = () => {
  const { theme } = useThemeContext()

  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    RegisterUser(name, username, email, password)
  }

  return (
    <StyledSection>
      <StyledRegisterContainer theme={theme}>
        <StyledTitle>Cree una nueva cuenta</StyledTitle>
        <StyledForm onSubmit={(e) => handleSubmit(e)}>
          <StyledFieldset>
            <StyledLabel htmlFor='name-input'>Ingresa tu nombre y apellido:</StyledLabel>
            <StyledInput
              theme={theme}
              type='name'
              name='name'
              id='name-input'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Jhon Doe'
            />
          </StyledFieldset>
          <StyledFieldset>
            <StyledLabel htmlFor='username-input'>Crea un nombre de usuario:</StyledLabel>
            <StyledInput
              theme={theme}
              type='name'
              name='username'
              id='username-input'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder='@jhondoe1234'
            />
          </StyledFieldset>
          <StyledFieldset>
            <StyledLabel htmlFor='email-input'>Ingresa tu email:</StyledLabel>
            <StyledInput
              theme={theme}
              type='email'
              name='email'
              id='email-input'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='john.doe@email.com'
            />
          </StyledFieldset>
          <StyledFieldset>
            <StyledLabel htmlFor='password-input'>Crea una contraseña:</StyledLabel>
            <StyledInput
              theme={theme}
              type='password'
              name='password'
              id='password-input'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='contraseña'
            />
          </StyledFieldset>
          <PrimaryButton theme={theme}>
            <p>Registrarse</p>
          </PrimaryButton>
          <StyledParagraph>¿Ya tienes una cuenta?</StyledParagraph>
          <TerciaryLink to={'#'}>
            <p>Inicia sesion aqui</p>
          </TerciaryLink>
        </StyledForm>
      </StyledRegisterContainer>
    </StyledSection>
  )
}
