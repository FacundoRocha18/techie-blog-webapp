import { Outlet } from 'react-router-dom'
import { ThemeProvider } from 'contexts/ThemeContext'
import { PostsProvider } from 'contexts/PostsContext'
import { Header } from 'components'

export const Root = () => {
	return (
		<div className='App'>
			<ThemeProvider>
				<Header />
				<PostsProvider>
					<Outlet />
				</PostsProvider>
			</ThemeProvider>
		</div>
	)
}
