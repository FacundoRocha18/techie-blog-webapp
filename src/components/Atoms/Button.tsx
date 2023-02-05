import { IStyledComponent } from 'components/components.types'
import styled from 'styled-components'
import { ThemeProps } from 'types'

export const StyledButton = styled('button') <IStyledComponent>`
	align-items: center;
	background-color: rgb(236 72 153);
	border: 2px solid var(${({ theme }: ThemeProps) => theme.name === 'light' ? '--black' : theme.translucent});
	border-radius: 2px;
	font-weight: 500;
	display: flex;
	justify-content: center;
	grid-column: span 4 / span 4;
	padding: 8px;
	text-align: center;
	transition: background-color .3s ease;

	&:hover {
		background-color: rgb(219 39 119);
	}
	`
