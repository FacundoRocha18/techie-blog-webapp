import { useThemeContext } from 'contexts/ThemeContext'
import styled from 'styled-components'
import { CIcon } from 'components'
import { ICToggle } from '../components.types'


const Toggle = styled('button')<ICToggle>`
	align-items: center;
	background-color: var(${props => props.background});
	border: solid 2px var(${props => props.border});
	border-radius: 9999px;
	display: flex;
	justify-content: ${props => props.theme === 'light' ? 'flex-end' : 'flex-start'};
	width: 4rem; /* 64px */
`

export const CToggle = () => {
	const { theme, themeName, toggleTheme } = useThemeContext()

	return (
		<Toggle background={theme.card} border={theme.color} theme={themeName} onClick={() => toggleTheme()}>
			<CIcon className='material-icons'>
				{themeName === 'light' ? 'dark_mode' : 'light_mode'}
			</CIcon>
		</Toggle>
	)
}
