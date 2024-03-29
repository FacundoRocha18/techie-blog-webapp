import styled from 'styled-components'
import { ThemeProps, IStyledComponent } from 'shared'

export const StyledInput = styled('input')<IStyledComponent>`
  border: 2px solid
    var(${({ theme }: ThemeProps) => (theme.name === 'light' ? '--black' : theme.translucent)});
  border-radius: 2px;
  color: var(${({ theme }: ThemeProps) => theme.inputColor});
  grid-column: span 4 / span 4;
  padding: 8px;
`
