import { CContainer, CTitle, CToggle, MenuToggle } from 'components'
import { useSidebarContext } from 'contexts/SidebarContext'
import { Theme, useThemeContext } from 'contexts/ThemeContext'
import { Link } from 'react-router-dom'

export const Header = () => {
	const { theme }: { theme: Theme } = useThemeContext()
	const { isVisible } = useSidebarContext()

	return (
		<CContainer id='header' background={theme.header} border='solid' color={theme.color} display='flex' gap='0px' height='48px' justify='space-between' width='100%'>
			<CTitle alignTo='left' fontSize={30} fontWeight={300}>
				<Link to={'/'}>Techie blog</Link>
			</CTitle>
			<MenuToggle />
		</CContainer>
	)
}
