import styled from 'styled-components'
import { ICContainer } from '../components.types'

export const CContainer = styled('div') <ICContainer>`
	background-color: var(${props => props.background});
	color: var(${props => props.color});
`