import { Outlet } from 'react-router-dom'
import { ThemeProvider, useThemeContext } from 'contexts/ThemeContext'
import { PostsProvider } from 'contexts/PostsContext'
import { Header } from 'components'

export const Root = () => {
  const { theme } = useThemeContext()

  return (
    <div className='App'>
      <div className={`${theme.background} ${theme.fontColor}`} id='app-container'>
        <Header />
        <PostsProvider>
          <Outlet />
        </PostsProvider>
      </div>
    </div>
  )
}
