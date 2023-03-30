import { IStyledComponent } from 'components.types'
import styled from 'styled-components'
import { ThemeProps } from 'types'

const StyledButton = styled('button')<IStyledComponent>`
  align-items: center;
  border-radius: 2px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  padding: 8px;
  text-align: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgb(219 39 119);
  }
`

export const PrimaryButton = styled(StyledButton)<IStyledComponent>`
  background-color: var(--primary-accent);
  border: 2px solid
    var(${({ theme }: ThemeProps) => (theme.name === 'light' ? '--black' : '--primary-accent')});
  grid-column: span 4 / span 4;
`

export const SecondaryButton = styled(StyledButton)<IStyledComponent>`
  color: var(--primary-accent);
  border: 2px solid
    var(${({ theme }: ThemeProps) => (theme.name === 'light' ? '--black' : '--primary-accent')});
  grid-column: span 4 / span 4;
`
