import styled from 'styled-components'
import { useThemeContext } from 'contexts/Theme/ThemeContext'
import { IStyledComponent } from 'components/components.types'
import { ThemeProps } from 'types'


const StyledSelector = styled('select') <IStyledComponent>`
	background-color: var(${({ theme }: ThemeProps) => theme.card});
	border-radius: 4px;
	box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
	font-size: var(--body-text);
	padding: 8px; 
	min-height: 30px;
	width: fit-content;
`

export const ThemeSelector = () => {
	const { theme, themeName, changeTheme } = useThemeContext()

	return (
		<>
			<label htmlFor="theme-select">Tema: </label>
			<StyledSelector theme={theme} name="theme-select" id='theme-select' defaultValue={themeName} onChange={(e) => changeTheme(e.target.value)}>
				<option
					value="light"
					title='Tema claro'
				>&#127774;</option>
				<option
					value="dark"
					title='Tema oscuro'
				>&#127771;</option>
			</StyledSelector>
		</>
	)
}
