import { CLink } from 'components'
import { useThemeContext } from 'contexts/ThemeContext'
import { Link } from 'react-router-dom'

export const Navigation = () => {
	const { theme } = useThemeContext()
	return (
		<>
			<ul className='menu' color={theme.color}>
				<li>
					<Link to={'#'}>
						Link 1
					</Link>
				</li>
				<li>
					<Link to={'#'}>
						Link 2
					</Link>
				</li>
				<li>
					<Link to={'#'}>
						Link 3
					</Link>
				</li>
				<li>
					<Link to={'#'}>
						Link 4
					</Link>
				</li>
				<li>
					<Link to={'#'}>
						Link 5
					</Link>
				</li>
				<li>
					<CLink to='#'>
						Iniciar sesión
					</CLink>
				</li>
			</ul>
		</>
	)
}
