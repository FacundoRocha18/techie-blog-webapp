import styled from "styled-components"
import { CContainer } from "components"
import { useSidebarContext } from 'contexts/SidebarContext'
import { useThemeContext } from "contexts/ThemeContext"


const CSpan = styled('span')`
	background-color: var(${props => props.color});
	border-radius: 10px;
	display: inline-block;
	height: 2px;
	width: 20px;
`

export const MenuToggle = () => {

	const { theme } = useThemeContext()
	const { isVisible, setIsVisible } = useSidebarContext()

	return (
		<>
			<CContainer>
				<button className={`menu-button ${isVisible ? 'active' : 'inactive'}`}
					onClick={() => setIsVisible(!isVisible)}>
					<CSpan color={theme.color} />
					<CSpan color={theme.color} />
				</button>
			</CContainer>

		</>
	)
}