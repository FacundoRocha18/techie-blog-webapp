import styled from "styled-components"
import { CContainer } from "components"
import { useSidebarContext } from 'contexts/SidebarContext'
import { useThemeContext } from "contexts/ThemeContext"


const CSpan = styled('span')`
	background-color: var(${props => props.color});
	border-radius: 10px;
	min-height: 2px;
	min-width: 28px;
`

export const MenuToggle = () => {

	const { theme } = useThemeContext()
	const { isVisible, setIsVisible } = useSidebarContext()

	const menuClassesNames = {
		rootClass: 'menu',
		activeClass: 'menu_activated',
		toggleClass: 'menu__toggle',
		toggleHintClass: 'menu__toggle-hint'
	}

	return (
		<>
			<CContainer align="center" display="flex" justify="center" height={'48px'} width={'48px'}>
				<button className="menu-button" onClick={() => setIsVisible(!isVisible)}>
					<CContainer align="center" className={`menu-button ${isVisible ? 'active' : 'inactive'}`} display="flex" direction="column" justify="space-around" height={'24px'} width={'fit-content'}>
						<CSpan color={theme.color} />
						<CSpan color={theme.color} />
					</CContainer>
				</button>
			</CContainer>

		</>
	)
}