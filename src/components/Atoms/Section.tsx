import styled from 'styled-components'
import { IStyledComponent } from 'components/components.types'
import { ThemeProps } from 'types'

export const StyledSection = styled('section') <IStyledComponent>`
	color: var(${({ theme }: ThemeProps) => theme.color});
	display: flex;
	flex-direction: column;
	gap: 16px;
	padding: 16px;
	min-height: 100vh;
	margin-left: auto;
  margin-right: auto;

	@media (min-width: 1080px) {
  & {
    width: 60%;
  }
}
`

