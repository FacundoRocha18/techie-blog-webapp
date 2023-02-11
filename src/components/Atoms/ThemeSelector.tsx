import React from 'react'
import PropTypes from 'prop-types'
import styled from "styled-components"
import { useThemeContext } from 'contexts/Theme/ThemeContext'
import { IStyledComponent } from 'components/components.types'
import { ThemeProps } from 'types'
import { StyledIcon } from './Icon'


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
	const { theme, changeTheme } = useThemeContext()

	return (
		<>
			<label htmlFor="theme-select">Tema: </label>
			<StyledSelector theme={theme} name="theme-select" id='theme-select' onChange={(e) => changeTheme(e.target.value)}>
				<option value={theme.name} title='Seleccione un tema'>&#127763;</option>
				<option value="light" title='Tema claro' className={theme.name === 'light' ? 'selected' : ''}>&#127774;</option>
				<option value="dark" title='Tema oscuro' className={theme.name === 'dark' ? 'selected' : ''}>&#127771;</option>
			</StyledSelector>
		</>
	)
}

ThemeSelector.propTypes = {}
