import styled from 'styled-components'
import { IStyledComponent } from '../components.types'

export const CContainer = styled('div') <IStyledComponent>`
	background-color: var(${({ theme }) => theme.background});
	color: var(${props => props.color});
`