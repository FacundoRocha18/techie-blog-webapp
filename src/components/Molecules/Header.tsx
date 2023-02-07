import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { StyledTitle, MenuToggle, Overlay, Menu, Navigation, CToggle, StyledPrimLink } from 'components'
import { useMenuContext } from 'contexts/MenuContext'
import { useThemeContext } from 'contexts/Theme/ThemeContext'
import { IStyledComponent } from 'components/components.types'

export const StyledHeader = styled('header') <IStyledComponent>`
	align-items: center;
	backdrop-filter: blur(15px);
	-webkit-backdrop-filter: blur(15px);
	background-color: var(${props => props.background});
	border: 0;
	border-bottom: 1px solid rgb(236 72 153);
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	height: 48px;
	left: 0;
	padding-left: 16px;
	padding-right: 16px;
	position: sticky;
	top: 0;
	width: 100%;
	z-index: 50;
	transition: background-color .5s ease;

	@media (min-width: 1080px) {
		height: fit-content;		
	}

	@media (min-width: 1080px) {
		& button {
			display: none;
		}
	}
`

export const Header = () => {
	const { theme } = useThemeContext()
	const { isVisible, setIsVisible } = useMenuContext()

	return (
		<>
			<StyledHeader background={isVisible ? theme.header : theme.translucent}>
				<Link to={'/'} className='header-title' onClick={() => setIsVisible(false)}>
					<StyledTitle>Techie blog</StyledTitle>
				</Link>
				<Navigation />
				<MenuToggle />
			</StyledHeader>
			<Overlay>
				<Menu />
			</Overlay>
		</>
	)
}
