import { useThemeContext } from 'contexts/ThemeContext'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { CustomLinkProps } from 'types'

export const CustomLink = ({ path, text, styles }: CustomLinkProps) => {
  const { themeName } = useThemeContext()

  return (
    <Link
      className={`bg-pink-500 hover:bg-pink-600 ${
        themeName === 'light' ? 'border-2' : 'border-0'
      } flex w-full items-center justify-center rounded-sm border-solid border-gray-800 p-2 text-center font-medium transition-colors duration-150 ease-linear ${styles}`}
      to={path}
    >
      <p>{text}</p>
    </Link>
  )
}

CustomLink.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  styles: PropTypes.string,
}
