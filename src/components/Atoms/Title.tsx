import styled from 'styled-components'
import { ThemeProps, IStyledComponent } from 'shared'

const StyledHeading = styled('h2')<IStyledComponent>`
  background-color: var(${({ theme }: ThemeProps) => theme.background});
  color: var(${({ theme }: ThemeProps) => theme.color});
  grid-row: span 1 / span 1;
`
export const StyledTitle = styled(StyledHeading)<IStyledComponent>`
  font-size: var(--heading-text);
  font-weight: var(--heading-weight);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: fit-content;
  max-width: 600px;
`

export const StyledSubtitle = styled(StyledHeading)<IStyledComponent>`
  font-size: var(--subheading-text);
  font-weight: var(--subheading-weight);
`
