import styled from 'styled-components'
import { ICContainer } from '../components.types'

export const CContainer = styled.div<ICContainer>`
	align-items: ${props => props.align};
	background-color: var(${props => props.background});
	color: var(${props => props.color});
	display: ${props => props.display};
	gap: ${props => props.gap}px;
	justify-content: ${props => props.justify};
	flex-direction: ${props => props.direction};
	grid-template-columns: repeat(${props => props.columns}, minmax(0, 1fr));
	grid-template-rows: repeat(${props => props.rows}, minmax(0, 1fr));
	height: ${props => props.height};
	width: ${props => props.width};
`