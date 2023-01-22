import styled from 'styled-components'

export const CFieldset = styled.fieldset`
align-items: center;
display: grid;
gap: 1rem/* 16px */;
grid-template-columns: repeat(4, minmax(0, 1fr));
grid-column: span 4 / span 4;
`