import styled from 'styled-components'
import { StyledPrimLink, StyledHeader, StyledSecLink } from 'components'
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

	@media (min-width: 1080px) {
		${StyledHeader} & {
				border: none;
		}

		${StyledHeader} &:last-child {
				margin-top: 0px;
		}
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
		
		@media (min-width: 768px) {
			${StyledHeader} & {
				width: 60%;
			}	
		}

		@media (min-width: 1080px) {
			${StyledHeader} & {
				display: flex;
				grid-column: span 10 / span 10;
				grid-column-start: 2;
				width: 100%;
			}	
		}

		${StyledUList} ${StyledListItem} {
				border-bottom: 1px solid var(${({ theme }: ThemeProps) => theme.color});
		}

		${StyledUList} ${StyledListItem}:last-child {
				border-bottom: none;
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
					<StyledListItem><StyledPrimLink theme={theme} to={'register'} onClick={() => setIsVisible(false)}>Crear una cuenta</StyledPrimLink></StyledListItem>
				</StyledUList>
			</StyledNav>
		</>
	)
}
