import styled from 'styled-components'

const CustomInput = styled.input`
	border: 2px solid ${props => props.color};
	border-radius: 2px;
	color: rgb(38 38 38);
	grid-column: span 4 / span 4;
	padding: 8px;
`

export const Input = (props: JSX.ElementAttributesProperty) => {
	return <CustomInput />
}