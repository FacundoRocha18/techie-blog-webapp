import styled from 'styled-components'
import { ICContainer } from '../components.types'

export const CContainer = styled.div<ICContainer>`
	align-items: ${props => props.align};
	background-color: var(${props => props.background});
	border: ${props => props.border === 'solid' ? 'solid' : ''} 2px var(${props => props.color});
	border-radius: ${props => props.rounded}px;
	box-shadow: ${props => props.shadow ? 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px' : ''};
	color: var(${props => props.color});
	display: ${props => props.display};
	gap: ${props => props.gap};
	height: ${props => props.height};
	justify-content: ${props => props.justify};
	flex-direction: ${props => props.direction};
	grid-template-columns: repeat(${props => props.columns}, minmax(0, ${props => props.size} ));
	grid-template-rows: repeat(${props => props.rows}, minmax(0, ${props => props.size}));
	padding: ${props => props.padding}px;
	width: ${props => props.width};
`