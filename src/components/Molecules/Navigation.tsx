import { StyledPrimLink as StyledNavLink, StyledHeader, StyledSecLink } from 'components'
import { IStyledComponent } from 'components/components.types'
import { useMenuContext } from 'contexts/MenuContext'
import { useThemeContext } from 'contexts/ThemeContext'
import styled from 'styled-components'
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
			justify-content: flex-end;
		}

		
`

const StyledNav = styled('nav') <IStyledComponent>`
		color: var(${({ theme }: ThemeProps) => theme.color});
		display: flex;
		height: 100%;
		overflow: hidden;
		width: 100%;

		${StyledHeader} & {
			display: none;
		}	

		@media (min-width: 1080px) {
			${StyledHeader} & {
				display: flex;
			}	
		}

		${StyledUList} ${StyledListItem} {
				border-bottom: 1px solid var(${({ theme }: ThemeProps) => theme.color});
		}

		${StyledUList} ${StyledListItem}:last-child {
				border-bottom: none;
		}

		@media (min-width: 1080px) {
			${StyledHeader} & {
				grid-column: span 10 / span 10;
				grid-column-start: 2;
				width: 100%;
			}
	
			.header .menu ul {
				align-items: center;
				display: flex;
				gap: 8px;
				width: 100%;
			}

			.menu li {
				border: none;
			}

			.menu li:last-child {
				display: none;
				margin-top: 0px;
			}
}
`

export const Navigation = ({ className }: { className?: string }) => {
	const { theme } = useThemeContext()
	const { isVisible, setIsVisible } = useMenuContext()

	return (
		<>
			<StyledNav theme={theme}>
				<StyledUList>
					<StyledListItem><StyledSecLink to={'#'} onClick={() => setIsVisible(!isVisible)}>Inicio</StyledSecLink></StyledListItem>
					<StyledListItem><StyledSecLink to={'#'} onClick={() => setIsVisible(!isVisible)}>Noticias</StyledSecLink></StyledListItem>
					<StyledListItem><StyledSecLink to={'#'} onClick={() => setIsVisible(!isVisible)}>Inicio</StyledSecLink></StyledListItem>
					<StyledListItem><StyledSecLink to={'#'} onClick={() => setIsVisible(!isVisible)}>Inicio</StyledSecLink></StyledListItem>
					<StyledListItem><StyledSecLink to={'#'} onClick={() => setIsVisible(!isVisible)}>Inicio</StyledSecLink></StyledListItem>
					<StyledListItem><StyledNavLink to={'register'} onClick={() => setIsVisible(!isVisible)}>Crear una cuenta</StyledNavLink></StyledListItem>
				</StyledUList>
			</StyledNav>
		</>
	)
}
