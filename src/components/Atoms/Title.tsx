import { IStyledComponent } from 'components/components.types'
import styled from 'styled-components'

export const StyledTitle = styled('h2')<IStyledComponent>`
	background-color: var(${props => props.background});
	color: ${props => props.color};
	font-size: 30px;
	font-weight: 300;
	grid-row: span 1 / span 1;
`

export const StyledSubtitle = styled('h2')<IStyledComponent>`
	background-color: var(${props => props.background});
	color: ${props => props.color};
	font-size: 25px;
	font-weight: 300;
	grid-row: span 1 / span 1;
`