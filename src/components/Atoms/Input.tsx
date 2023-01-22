import styled from 'styled-components'

export const CInput = styled.input`
border: 2px solid ${props => props.color};
border-radius: 2px;
color: ${props => props.color};
grid-column: span 3 / span 3;
padding: 8px;
`