import { Outlet } from 'react-router-dom'
import { useThemeContext } from 'contexts/ThemeContext'
import { PostsProvider } from 'contexts/PostsContext'
import { AuthProvider } from 'contexts/AuthContext'
import { CContainer, Header } from 'components'

export const Root = () => {
	const { theme } = useThemeContext()

	return (
		<div className='App'>
			<CContainer background={theme.background} color={theme.color} id='app-container'>
				<Header />
				<AuthProvider>
					<PostsProvider>
						<Outlet />
					</PostsProvider>
				</AuthProvider>
			</CContainer>
		</div>
	)
}
