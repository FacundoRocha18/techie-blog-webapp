import { CContainer, CTitle, CToggle } from 'components'
import { useThemeContext } from 'contexts/ThemeContext'
import { Link } from 'react-router-dom'

export const Header = () => {
	const { theme } = useThemeContext()

	return (
		<CContainer className='header' background={theme.background} color={theme.fontColor} display='flex' gap='0px' height='96px' justify='space-between' width='100%'>
			<CTitle alignTo='left'>
				<Link to={'/'}>Techie</Link>
			</CTitle>
			<CToggle />
		</CContainer>
	)
}

Header.propTypes = {}
