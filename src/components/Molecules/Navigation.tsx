import styled from 'styled-components'
import { StyledPrimLink, StyledHeader, SecondaryLink, ThemeSelector } from 'components'
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
		height: fit-content;
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

		${StyledUList} ${StyledListItem}:nth-child(3) {
				display: none;
		}
		
		@media (max-width: 768px) {
			${StyledHeader} & {
				width: 60%;
			}	
		}

		@media only screen and (min-width: 1024px) {
			${StyledHeader} & {
				display: flex;
				grid-column: span 7 / span 7;
				grid-column-start: 7;
				width: 100%;
			}	

			${StyledHeader} & ${StyledUList} ${StyledListItem} {
				  border: none;
			}

			${StyledUList} ${StyledListItem}:nth-child(3) {
				display: flex;
			}

			${StyledHeader} & ${StyledUList} ${StyledListItem}:last-child {
					margin-top: 0px;
					margin-left: 12px;
			}
		}
`

export const Navigation = ({ className }: { className?: string }) => {
	const { theme } = useThemeContext()
	const { setIsVisible } = useMenuContext()

	return (
		<>
			<StyledNav className='navigation' theme={theme}>
				<StyledUList>
					<StyledListItem><SecondaryLink to={'/'} onClick={() => setIsVisible(false)}>Inicio</SecondaryLink></StyledListItem>
					<StyledListItem><SecondaryLink to={'#'} onClick={() => setIsVisible(false)}>Noticias</SecondaryLink></StyledListItem>
					<StyledListItem><ThemeSelector /></StyledListItem>
					<StyledListItem><StyledPrimLink theme={theme} to={'register'} onClick={() => setIsVisible(false)}>Crear una cuenta</StyledPrimLink></StyledListItem>
				</StyledUList>
			</StyledNav>
		</>
	)
}
