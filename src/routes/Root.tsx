import { Outlet } from 'react-router-dom'
import { App } from 'App'
import { ThemeProvider } from 'contexts/ThemeContext'
import { Header } from 'components'

export const Root = () => {
  return (
    <div className='App'>
      <ThemeProvider>
        <Header />
        <App />
        <Outlet />
      </ThemeProvider>
    </div>
  )
}
