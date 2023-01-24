import styled from 'styled-components'
import { ICSection } from 'components/components.types'

export const CSection = styled('section')<ICSection>`
	color: var(${props => props.color});
	display: flex;
	flex-direction: column;
	gap: ${props => props.gap};
	padding: 1rem; /* 16px */
	min-height: 100vh;
	height: fit-content;
	margin-left: auto;
  margin-right: auto;
	width: 100%;
`

