import { CContainer, CToggle, CLink, Navigation } from 'components'
import { useSidebarContext } from 'contexts/SidebarContext'
import { useThemeContext } from 'contexts/ThemeContext'
import { Link } from 'react-router-dom'

export const HamburguerMenu = () => {
	const { theme } = useThemeContext()
	const { isVisible } = useSidebarContext()

	return (
		<>
			<CContainer background={theme.header} className={`container menu-container ${isVisible ? 'active' : 'inactive'}`}>
				<Navigation />
				<div className='container theme-toggle-container'>
					<p>Tema: </p>
					<CToggle />
				</div>
			</CContainer>
		</>
	)
}
