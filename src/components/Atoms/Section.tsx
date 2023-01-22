import styled from 'styled-components'

export const CSection = styled.section`
	color: var(${props => props.color});
	display: flex;
	flex-direction: column;
	padding: 1rem; /* 16px */
	min-height: 100%;
	margin-left: auto;
  margin-right: auto;
	margin-top: 6rem; /* 96px */
	width: 100%;
`

