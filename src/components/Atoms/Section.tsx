import styled from 'styled-components'
import { IStyledComponent } from 'components/components.types'

export const CSection = styled('section') <IStyledComponent>`
	color: var(${({ theme }) => theme.color});
	display: flex;
	flex-direction: column;
	gap: 16px;
	padding: 1rem; /* 16px */
	min-height: 100vh;
	margin-left: auto;
  margin-right: auto;
`

