import { CContainer, CToggle, StyledPrimLink, Navigation } from 'components'
import { IStyledComponent } from 'components/components.types'
import { useMenuContext } from 'contexts/MenuContext'
import { useThemeContext } from 'contexts/ThemeContext'
import styled from 'styled-components'
import { ThemeProps } from 'types'



const MenuContainer = styled('div')<IStyledComponent>`
	background-color: var(${({theme}: ThemeProps) => theme.header});
	backdrop-filter: blur(15px);
	-webkit-backdrop-filter: blur(15px);
	height: 100%;
	flex-direction: column;
	width: 100vw;
	transition: all .3s ease;


	&.active .theme-toggle-container {
		opacity: 1;
		transition: all .3s ease;
	}

	&.inactive .theme-toggle-container {
		opacity: 0;
		transition: all .3s ease;
	}
`


const SwitchContainer = styled('div') <IStyledComponent>`
	justify-content: space-between;
	padding: 6px 12px;
	opacity: 0;
	width: 100%;
	transition: all .3s ease;

	@media (min-width: 1080px) {
		& {
			display: none;
		}		
	}
`

export const Menu = () => {
	const { theme } = useThemeContext()
	const { isVisible } = useMenuContext()

	return (
		<>
			<MenuContainer theme={theme} className={`container menu-container ${isVisible ? 'active' : 'inactive'}`}>
				<Navigation />
				<SwitchContainer>
					<p>Tema: </p>
					<CToggle />
				</SwitchContainer>
			</MenuContainer>
		</>
	)
}
