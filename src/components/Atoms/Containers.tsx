import styled from 'styled-components'
import { ThemeProps } from 'types'
import { IStyledComponent } from '../components.types'

export const StyledContainer = styled('div') <IStyledComponent>`
	background-color: var(${({ theme }: ThemeProps) => theme.background});
	color: var(${({ theme }: ThemeProps) => theme.color});
`

export const StyledGridContainer = styled(StyledContainer) <IStyledComponent>`
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	gap: 32px;
`

export const StyledRegisterContainer = styled(StyledContainer) <IStyledComponent>`
	min-width: 100%;
`