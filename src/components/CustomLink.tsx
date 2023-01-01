import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { CustomLinkProps } from 'types'

export const CustomLink = ({ path, text }: CustomLinkProps) => {
	return (
		<Link className='bg-pink-500 border-2 border-solid border-gray-800 p-2 rounded-sm w-full text-center font-medium' to={path}>
			<p>{text}</p>
		</Link>
	)
}

CustomLink.propTypes = {
	path: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired
}