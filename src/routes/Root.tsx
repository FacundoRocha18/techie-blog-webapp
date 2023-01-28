import { Outlet } from 'react-router-dom'
import { useThemeContext } from 'contexts/ThemeContext'
import { PostsProvider } from 'contexts/PostsContext'
import { AuthProvider } from 'contexts/AuthContext'
import { MenuProvider } from 'contexts/MenuContext'
import { CContainer, Header } from 'components'

export const Root = () => {
	const { theme } = useThemeContext()

	return (
		<div className='App'>
			<MenuProvider>
				<CContainer theme={theme} color={theme.color} id='app-container'>
					<Header />
					<AuthProvider>
						<PostsProvider>
							<Outlet />
						</PostsProvider>
					</AuthProvider>
				</CContainer>
			</MenuProvider>
		</div>
	)
}
