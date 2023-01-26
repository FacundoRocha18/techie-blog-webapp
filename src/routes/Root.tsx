import { Outlet } from 'react-router-dom'
import { useThemeContext } from 'contexts/ThemeContext'
import { PostsProvider } from 'contexts/PostsContext'
import { AuthProvider } from 'contexts/AuthContext'
import { SidebarProvider } from 'contexts/SidebarContext'
import { CContainer, Header, Overlay, HamburguerMenu } from 'components'

export const Root = () => {
	const { theme } = useThemeContext()

	return (
		<div className='App'>
			<SidebarProvider>
				<CContainer background={theme.background} color={theme.color} id='app-container'>
					<Header />
					<Overlay>
						<HamburguerMenu />
					</Overlay>
					<AuthProvider>
						<PostsProvider>
							<Outlet />
						</PostsProvider>
					</AuthProvider>
				</CContainer>
			</SidebarProvider>
		</div>
	)
}
