import { CContainer, CTitle, CToggle } from 'components'
import { useThemeContext } from 'contexts/ThemeContext'
import { Link } from 'react-router-dom'

export const Header = () => {
	const { theme } = useThemeContext()

	return (
		<CContainer id='header' background={theme.header} border='solid' color={theme.color} display='flex' gap='0px' height='96px' justify='space-between' width='100%'>
			<CTitle alignTo='left' fontSize={35} fontWeight={600}>
				<Link to={'/'}>Techie</Link>
			</CTitle>
			<CToggle />
		</CContainer>
	)
}
