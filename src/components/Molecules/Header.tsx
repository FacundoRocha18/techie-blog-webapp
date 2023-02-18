import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { StyledTitle, MenuToggle, Navigation, HeaderButtonContainer } from 'components'
import { useMenuContext } from 'contexts/MenuContext'
import { useThemeContext } from 'contexts/Theme/ThemeContext'
import { IStyledComponent } from 'components/components.types'
import { ThemeProps } from 'types'

export const HeaderOuterArea = styled('header') <IStyledComponent>`
	align-items: flex-start;
	backdrop-filter: blur(15px);
	-webkit-backdrop-filter: blur(15px);
	background-color: var(${({ theme }) => theme.background});
	border: 0;
	display: flex;
	flex-direction: column;
	left: 0;
	height: fit-content;
	padding: 8px 16px;
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 50;
	transition: height .3s ease;

	&.active {
		height: 100vh;
	}

	&.inactive {
		height: 148px;
	}

	@media only screen and (min-width: 768px) {
		& {
			padding: 32px;
		}
	}

	@media only screen and (min-width: 1080px) {
		& {
			align-items: center;
		}
	}
`

const HeaderInnerArea = styled('div') <IStyledComponent>`
	align-items: center;
	background-color: var(${({ theme }: ThemeProps) => theme.card});
	border-radius: 8px;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: repeat(1, 1fr);
	justify-content: space-between;
	min-height: 84px;
	height: 84px;
	padding: 16px;
	position: relative;
	width: 100%;
	transition: height .3s ease;

	& .header-title {
		grid-column: span 2 / span 2;
	}

	& nav {
		display: none;
	}

	${HeaderOuterArea}.active & {
		border-bottom-left-radius: 0px;
		border-bottom-right-radius: 0px;
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

		& nav {
			display: flex;
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

const HeaderNavArea = styled('section')`
	align-items: flex-start;
	background-color: var(${({ theme }: ThemeProps) => theme.card});
	border-radius: 8px;
	border-top-left-radius: 0px;
	border-top-right-radius: 0px;
	display: flex;
	justify-content: center;
	height: 0px;
	padding: 0px;
	overflow: hidden;
	width: 100%;
	transition: all .3s ease;

	${HeaderOuterArea}.active & {
		height: 100%;
		padding: 16px;
		
		transition: all .3s ease;
	}

	${HeaderOuterArea}.inactive & {
		height: 0px;
		transition: all .3s ease;
	}
	
	${HeaderOuterArea}.active & nav {
		opacity: 1;
	}

	${HeaderOuterArea}.inactive & {
		opacity: 0;
	}

	@media only screen and (min-width: 1080px) {
		& {
			display: none;
		}
	}
`

export const Header = () => {
	const { theme } = useThemeContext()
	const { isActiveClass, setIsVisible } = useMenuContext()

	return (
		<>
			<HeaderOuterArea className={isActiveClass}>
				<HeaderInnerArea theme={theme}>
					<Link to={'/'} className='header-title' onClick={() => setIsVisible(false)}>
						<StyledTitle>Techie blog</StyledTitle>
					</Link>
					<HeaderButtonContainer>
						<MenuToggle />
					</HeaderButtonContainer>
					<Navigation />
				</HeaderInnerArea>
				<HeaderNavArea theme={theme}>
					<Navigation />
				</HeaderNavArea>
			</HeaderOuterArea>
		</>
	)
}
