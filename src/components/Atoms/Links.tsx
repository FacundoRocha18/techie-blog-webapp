import { IStyledComponent } from 'components/components.types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ThemeProps } from 'types'

export const StyledPrimLink = styled(Link) <IStyledComponent>`
	align-items: center;
	background-color: rgb(236 72 153);
	border: 2px solid var(${({ theme }: ThemeProps) => theme.name === 'light' ? '--black' : theme.translucent});
	border-radius: 2px;
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

export const StyledSecLink = styled(Link) <IStyledComponent>`
 	display: inline-block;
	color: inherit;
	height: 100%;
	padding: 6px 12px;
	width: 100%;
`