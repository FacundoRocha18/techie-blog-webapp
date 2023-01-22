import styled from 'styled-components'

export const CButton = styled.button`
	align-items: center;
	background-color: rgb(236 72 153 / var(--tw-bg-opacity));
	border: 2px solid ${props => props.color};
	border-radius: 2px;
	font-weight: 500;
	display: flex;
	justify-content: center;
	grid-column: span 3 / span 3;
	grid-column-start: 2;
	padding: 8px;
	text-align: center;
	transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: linear;
  transition-duration: 150ms;
	`
