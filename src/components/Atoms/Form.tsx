import { IStyledComponent } from 'components.types'
import styled from 'styled-components'

export const StyledForm = styled('form')<IStyledComponent>`
  align-items: center;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-row: span 2 / span 2;
  margin: 32px 0;
`
