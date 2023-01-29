import { IStyledComponent } from 'components/components.types'
import styled from 'styled-components'
import { ThemeProps } from 'types'

const StyledHeading = styled('h2') <IStyledComponent>`
	background-color: var(${({ theme }: ThemeProps) => theme.background});
	color: var(${({ theme }: ThemeProps) => theme.color});
	grid-row: span 1 / span 1;
`
export const StyledTitle = styled(StyledHeading) <IStyledComponent>`
	font-size: var(--heading-text);
	font-weight: var(--heading-weight);
`

export const StyledSubtitle = styled(StyledHeading) <IStyledComponent>`
	font-size: var(--subheading-text);
	font-weight: var(--subheading-weight);
`
