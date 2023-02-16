import styled from 'styled-components'
import { IStyledComponent } from 'components/components.types'
import { ThemeProps } from 'types'

export const StyledSection = styled('section') <IStyledComponent>`
	align-items: flex-start;
	color: var(${({ theme }: ThemeProps) => theme.color});
	display: flex;
	flex-direction: column;
	gap: 16px;
	padding: 16px;
	min-height: 100vh;
	margin-left: auto;
  margin-right: auto; 
	
	@media only screen and (min-width: 768px) {
		& {
			padding: 32px;
  	}
 	}

	@media only screen and (min-width: 1920px) {
		& {
			padding: 32px;
    	width: 70%;
  	}
 	}

	@media only screen and (min-width: 2560px) {
		& {
    	width: 60%;
  	}
 	}
`

