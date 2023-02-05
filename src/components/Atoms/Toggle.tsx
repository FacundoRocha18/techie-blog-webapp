import { useThemeContext } from 'contexts/Theme/ThemeContext'
import styled from 'styled-components'
import { StyledIcon } from 'components'
import { IStyledComponent } from '../components.types'
import { ThemeProps } from 'types'

const Switch = styled('button') <IStyledComponent>`
	align-items: center;
	background-color: var(${({ theme }: ThemeProps) => theme.card});
	border: solid 2px var(${({ theme }: ThemeProps) => theme.border});
	border-radius: 9999px;
	display: flex;
	justify-content: ${({ theme }: ThemeProps) => theme.name === 'light' ? 'flex-end' : 'flex-start'};
	width: 64px;
`

export const CToggle = () => {
	const { theme, themeName, toggleTheme } = useThemeContext()

	return (
		<Switch theme={theme} onClick={() => toggleTheme()}>
			<StyledIcon className='material-icons'>
				{themeName === 'light' ? 'dark_mode' : 'light_mode'}
			</StyledIcon>
		</Switch>
	)
}
