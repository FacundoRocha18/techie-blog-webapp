import styled from 'styled-components'
import { ThemeProps } from 'types'

export const Author = styled('div')`
	align-items: center;
	display: grid;
	gap: 16px;
	grid-template-columns: repeat(3, auto);
	width: fit-content;
`

export const AuthorAvatar = styled('img')`
	border-radius: 100%;
	grid-column: span 1 / span 1;
	height: 40px;
	width: 40px;

	@media only screen and (min-width: 768px) {
  	& {
			height: 55px;
			width: 55px;
  	}
	}
`

export const AuthorName = styled('p')`
	grid-column: span 1 / span 1;
`

export const AuthorTag = styled('span')`
	background-color: var(${({ theme }: ThemeProps) => theme.accent});
	border-radius: 4px;
	grid-column: span 1 / span 1;
	font-size: 16px;
	padding: 2px 6px;
`