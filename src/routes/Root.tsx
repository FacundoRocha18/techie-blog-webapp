import { Outlet } from 'react-router-dom'
import { useThemeContext } from 'contexts/ThemeContext'
import { PostsProvider } from 'contexts/PostsContext'
import { AuthProvider } from 'contexts/AuthContext'
import { Header } from 'components'

export const Root = () => {
	const { theme } = useThemeContext()

	return (
		<div className='App'>
			<div className={`${theme.background} ${theme.fontColor}`} id='app-container'>
				<Header />
				<AuthProvider>
					<PostsProvider>
						<Outlet />
					</PostsProvider>
				</AuthProvider>
			</div>
		</div>
	)
}
