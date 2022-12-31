import { Outlet } from 'react-router-dom'
import { App } from 'App'
import { ThemeProvider } from 'contexts/ThemeContext'
import { PostsProvider } from 'contexts/PostsContext'

export const Root = () => {
	return (
		<div className='App'>
			<ThemeProvider>
				<PostsProvider>
					<App />
					<Outlet />
				</PostsProvider>
			</ThemeProvider>
		</div>
	)
}
