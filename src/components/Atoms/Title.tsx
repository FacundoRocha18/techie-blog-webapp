import { ICTitle } from 'components/components.types'
import styled from 'styled-components'

export const CTitle = styled('h2')<ICTitle>`
	color: ${props => props.color};
	font-size: ${props => props.fontSize}px;
	grid-row: span 1 / span 1;
	text-align: ${props => props.alignTo};
`