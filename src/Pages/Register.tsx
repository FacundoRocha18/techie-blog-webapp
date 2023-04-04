import { FormEvent, SetStateAction, useState } from 'react'
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
  CheckUsername,
  RegisterField,
} from 'components'
import styled from 'styled-components'

const StyledParagraph = styled('p')`
  grid-column: span 2 / span 2;
`

export const Register = () => {
  const { theme } = useThemeContext()

  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    RegisterUser(name, username, email, password)
  }

  return (
    <StyledSection>
      <StyledRegisterContainer theme={theme}>
        <StyledTitle>Cree una nueva cuenta</StyledTitle>
        <StyledForm onSubmit={(e: FormEvent<Element>) => handleSubmit(e)}>
          <RegisterField
            text='Ingresa tu nombre completo:'
            placeholder='Jhon Doe'
            type='name'
            name='name'
            id='name-input'
            htmlFor='name-input'
            value={name}
            handleOnChange={(e: { target: { value: SetStateAction<string> } }) =>
              setName(e.target.value)
            }
          />
          <StyledFieldset>
            <StyledLabel htmlFor='username-input'>Crea un nombre de usuario:</StyledLabel>
            <StyledInput
              theme={theme}
              type='name'
              name='username'
              id='username-input'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder='jhondoe1234'
            />
            <CheckUsername username={username} />
          </StyledFieldset>
          <RegisterField
            text='Ingresa tu email:'
            placeholder='john.doe@email.com'
            type='email'
            name='email'
            id='email-input'
            htmlFor='email-input'
            value={email}
            handleOnChange={(e: { target: { value: SetStateAction<string> } }) =>
              setEmail(e.target.value)
            }
          />
          <RegisterField
            text='Ingresa tu email:'
            placeholder='contraseña'
            type='password'
            name='password'
            id='password-input'
            htmlFor='password-input'
            value={password}
            handleOnChange={(e: { target: { value: SetStateAction<string> } }) =>
              setPassword(e.target.value)
            }
          />
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
