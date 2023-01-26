import { CContainer, CToggle } from 'components'
import { useThemeContext } from 'contexts/ThemeContext'

export const HamburguerMenu = () => {
	const { theme } = useThemeContext()

	return (
		<>
			<CContainer className='menu-container' height='100%' padding={16} width='100vw'>
				<CToggle />
			</CContainer>
		</>
	)
}
