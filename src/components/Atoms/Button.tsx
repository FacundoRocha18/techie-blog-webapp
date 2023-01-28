import styled from 'styled-components'

export const CButton = styled('button')`
	align-items: center;
	background-color: rgb(236 72 153);
	border: 2px solid ${props => props.color};
	border-radius: 2px;
	font-weight: 500;
	display: flex;
	justify-content: center;
	grid-column: span 4 / span 4;
	padding: 8px;
	text-align: center;
	transition: background-color .3s ease;

	&:hover {
		background-color: rgb(219 39 119);
	}
	`
