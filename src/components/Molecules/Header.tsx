import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { StyledTitle, MenuToggle, Overlay, Menu, Navigation } from 'components'
import { useMenuContext } from 'contexts/MenuContext'
import { useThemeContext } from 'contexts/Theme/ThemeContext'
import { IStyledComponent } from 'components/components.types'
import { ThemeProps } from 'types'

export const StyledHeaderContainer = styled('header') <IStyledComponent>`
	align-items: center;
	backdrop-filter: blur(15px);
	-webkit-backdrop-filter: blur(15px);
	background-color: var(${({ theme }) => theme.background});
	border: 0;
	display: flex;
	left: 0;
	justify-content: center;
	padding: 8px 16px;
	position: sticky;
	top: 0;
	width: 100%;
	z-index: 50;
	transition: background-color .5s ease;

	@media only screen and (min-width: 768px) {
		& {
			padding: 32px;
		}
	}
`

const StyledHeader = styled('div') <IStyledComponent>`
	align-items: center;
	background-color: var(${({ theme }: ThemeProps) => theme.card});
	border-radius: 8px;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	height: 84px;
	justify-content: space-between;
	padding: 16px;
	width: 100%;

	& .header-title {
		grid-column: span 2 / span 2;
	}

	& .header-button {
		display: flex;		
		grid-column: span 2 / span 2;
		grid-column-start: 3;
		justify-content: flex-end;
	}

	@media only screen and (min-width: 1080px) {
		& {
			grid-template-columns: repeat(12, 1fr);
			height: fit-content;
			padding: 16px 32px;
		}

		& .header-title {
			grid-column: span 3 / span 3;
			width: fit-content;
		}

		& button {
			display: none;
		}
	}

	@media only screen and (min-width: 1920px) {
		& {
    	width: 70%;
  	}
 	}

	@media only screen and (min-width: 2560px) {
		& {
    	width: 60%;
  	}
 	}
`

export const Header = () => {
	const { theme } = useThemeContext()
	const { isVisible, setIsVisible } = useMenuContext()

	return (
		<>
			<StyledHeaderContainer background={isVisible ? theme.header : theme.translucent}>
				<StyledHeader theme={theme}>
					<Link to={'/'} className='header-title' onClick={() => setIsVisible(false)}>
						<StyledTitle>Techie blog</StyledTitle>
					</Link>
					<Navigation />
					<div className='header-button'>
						<MenuToggle />
					</div>
				</StyledHeader>
			</StyledHeaderContainer>
			<Overlay>
				<Menu />
			</Overlay>
		</>
	)
}
