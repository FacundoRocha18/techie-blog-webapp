import { Outlet } from 'react-router-dom'
import { useThemeContext } from 'contexts/ThemeContext'
import { PostsProvider } from 'contexts/PostsContext'
import { AuthProvider } from 'contexts/AuthContext'
import { CContainer, Header } from 'components'

export const Root = () => {
	const { theme } = useThemeContext()

	return (
		<div className='App'>
			<CContainer align='stretch' background={theme.background} color={theme.color} display='flex' gap='0' id='app-container'>
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
