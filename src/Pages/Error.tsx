import { useRouteError } from 'react-router-dom'
import { StyledContainer, StyledPrimLink, StyledTitle } from 'components'
import { useThemeContext } from 'contexts/Theme/ThemeContext'
import styled from 'styled-components'
import { ThemeProps } from 'types'

const StyledErrorPage = styled('section')`
	background-color: var(${({theme}: ThemeProps) => theme.card});
	border-radius: 4px;
	box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
	color: var(${({theme}: ThemeProps) => theme.color});
	display: flex;
	flex-direction: column;
	gap: 20px;
	margin: auto;
	margin-top: 50%;
	padding: 20px;
	width: fit-content;
`

export const ErrorPage = () => {
  const error: any = useRouteError()

  const { theme } = useThemeContext()

  return (
		<StyledContainer theme={theme} color={theme.color} id='app-container'>
    	<StyledErrorPage theme={theme}>
				<h1></h1>
				<StyledTitle>
					Oops!
				</StyledTitle>
      	<p>Lo sentimos, ocurrio un error inesperado.</p>
      	<p>{error.message}</p>
      	<StyledPrimLink to='/'>
					Volver al inicio
				</StyledPrimLink>
			</StyledErrorPage>
		</StyledContainer>
  )
}
