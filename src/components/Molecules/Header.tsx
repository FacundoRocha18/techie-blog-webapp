import { CContainer, CTitle, MenuToggle, Overlay, HamburguerMenu, Navigation } from 'components'
import { useSidebarContext } from 'contexts/SidebarContext'
import { Theme, useThemeContext } from 'contexts/ThemeContext'
import { Link } from 'react-router-dom'

export const Header = () => {
	const { theme }: { theme: Theme } = useThemeContext()
	const { isVisible } = useSidebarContext()

	return (
		<>
			<CContainer className='header' background={isVisible ? theme.header : theme.translucent} color={theme.color}>
				<CTitle fontSize={30} fontWeight={300}>
					<Link to={'/'}>Techie blog</Link>
				</CTitle>
				<Navigation />
				<MenuToggle />
			</CContainer>
			<Overlay>
				<HamburguerMenu />
			</Overlay>
		</>
	)
}
