import styled from 'styled-components'
import { ThemeProps } from 'types'
import { IStyledComponent } from '../components.types'

export const StyledContainer = styled('div') <IStyledComponent>`
	background-color: var(${({ theme }: ThemeProps) => theme.background});
	color: var(${({ theme }: ThemeProps) => theme.color});
`