import { IStyledComponent } from 'components/components.types'
import styled from 'styled-components'

export const StyledForm = styled('form')<IStyledComponent>`
display: grid;
gap: 1rem/* 16px */;
grid-template-columns: repeat(4, minmax(0, 1fr));
grid-row: span 2 / span 2;
`