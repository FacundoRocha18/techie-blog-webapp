import { IStyledComponent } from 'components/components.types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ThemeProps } from 'types'

export const StyledPrimLink = styled(Link) <IStyledComponent>`
	align-items: center;
	background-color: var(--primary-accent);
	border: 2px solid var(${({ theme }: ThemeProps) => theme.name === 'light' ? '--black' : '--primary-accent'});
	border-radius: 2px;
	color: inherit;
	display: flex;
	font-weight: 500;
	justify-content: center;
	padding: 8px;
	width: 100%;
	transition: background-color .3s ease;

	&:hover {
		background-color: rgb(219 39 119);
	}
`

export const SecondaryLink = styled(Link) <IStyledComponent>`
 	display: inline-block;
	height: 100%;
	padding: 6px 12px;
	width: 100%;
`

export const TerciaryLink = styled(Link) <IStyledComponent> `
	color: var(--primary-accent);
	display: inline-block;
	grid-column: span 2 / span 2;
	height: 100%;
	padding: 6px 12px;
	text-align: right;
	width: 100%;
`