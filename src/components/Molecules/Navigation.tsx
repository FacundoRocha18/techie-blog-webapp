import styled from 'styled-components'
import { StyledPrimLink, StyledHeader, StyledSecLink, ThemeSwitch } from 'components'
import { IStyledComponent } from 'components/components.types'
import { useMenuContext } from 'contexts/MenuContext'
import { useThemeContext } from 'contexts/Theme/ThemeContext'
import { ThemeProps } from 'types'

const StyledListItem = styled('li')`
	align-items: center;
	display: flex;
	gap: 16px;

	&:last-child {
		border-bottom: none;
		margin-top: 16px;
	}
`

const StyledUList = styled('ul') <IStyledComponent>`
		display: flex;
		flex-direction: column;
		gap: 16px;
		width: 100%;
		
		${StyledHeader} & {
			align-items: center;
			flex-direction: row;
			gap: 8px;
			justify-content: flex-end;
			width: 100%;
		}
`

const StyledNav = styled('nav') <IStyledComponent>`
		color: var(${({ theme }: ThemeProps) => theme.color});
		display: flex;
		height: 100%;
		overflow: hidden;
		width: 100%;
		transition: all .5s ease;

		${StyledHeader} & {
			display: none;
		}
	
		${StyledUList} ${StyledListItem} {
				border-bottom: 1px solid var(${({ theme }: ThemeProps) => theme.color});
		}

		${StyledUList} ${StyledListItem}:last-child {
				border-bottom: none;
		}
		
		@media (min-width: 768px) {
			${StyledHeader} & {
				width: 60%;
			}	
		}

		@media only screen and (min-width: 992px) {
			${StyledHeader} & {
				display: flex;
				grid-column: span 4 / span 4;
				grid-column-start: 9;
			}	

			${StyledHeader} & ${StyledUList} ${StyledListItem} {
				border: none ;
		}

		${StyledHeader} & ${StyledUList} ${StyledListItem}:last-child {
				margin-top: 0px;
		}
		}
`

export const Navigation = ({ className }: { className?: string }) => {
	const { theme } = useThemeContext()
	const { setIsVisible } = useMenuContext()

	return (
		<>
			<StyledNav theme={theme}>
				<StyledUList>
					<StyledListItem><StyledSecLink to={'#'} onClick={() => setIsVisible(false)}>Inicio</StyledSecLink></StyledListItem>
					<StyledListItem><StyledSecLink to={'#'} onClick={() => setIsVisible(false)}>Noticias</StyledSecLink></StyledListItem>
					<StyledListItem><StyledSecLink to={'#'} onClick={() => setIsVisible(false)}>Inicio</StyledSecLink></StyledListItem>
					<StyledListItem><StyledSecLink to={'#'} onClick={() => setIsVisible(false)}>Inicio</StyledSecLink></StyledListItem>
					<StyledListItem><StyledSecLink to={'#'} onClick={() => setIsVisible(false)}>Inicio</StyledSecLink></StyledListItem>
					<StyledListItem><ThemeSwitch /></StyledListItem>
					<StyledListItem><StyledPrimLink theme={theme} to={'register'} onClick={() => setIsVisible(false)}>Crear una cuenta</StyledPrimLink></StyledListItem>
				</StyledUList>
			</StyledNav>
		</>
	)
}
