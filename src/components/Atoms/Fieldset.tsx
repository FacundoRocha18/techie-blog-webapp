import styled from 'styled-components'

export const StyledFieldset = styled('fieldset')`
  align-items: center;
  border: none;
  display: grid;
  gap: 4px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-template-rows: repeat(2, auto);
  grid-column: span 4 / span 4;
`
