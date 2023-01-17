import { useThemeContext } from 'contexts/ThemeContext'
import { Link } from 'react-router-dom'
import { Toggle } from '../Common/ToggleTheme'

export const Header = () => {
  const { theme } = useThemeContext()

  return (
    <div
      className={`fixed top-0 left-0 flex h-24 w-screen max-w-full items-center justify-between border-b-2 border-solid border-pink-500 px-10 z-50 ${theme.fontColor} ${theme.background}`}
    >
      <h1 className={`font-medium`}>
        <Link to={'/'}>Techie</Link>
      </h1>
      <Toggle />
    </div>
  )
}

Header.propTypes = {}
