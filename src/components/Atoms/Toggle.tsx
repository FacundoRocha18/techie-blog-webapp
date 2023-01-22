import { useThemeContext } from 'contexts/ThemeContext'
import styled from 'styled-components'
import { CIcon } from 'components'
import { ICToggle } from '../components.types'


const CToggle = styled('button')<ICToggle>`
	align-items: center;
	background-color: ${props => props.toggleBackground};
	border-radius: 9999px;
	display: flex;
	justify-content: ${props => props.theme === 'light' ? 'flex-start' : 'flex-end'};
	width: 4rem; /* 64px */
`

export const Toggle = () => {
	const { theme, themeName, toggleTheme } = useThemeContext()

	return (
		<CToggle toggleBackground={theme.background} theme={themeName} onClick={() => toggleTheme()}>
			<CIcon className='material-icons slider round'>
				{themeName === 'light' ? 'light_mode' : 'dark_mode'}
			</CIcon>
		</CToggle>
	)
}
