import PropTypes from 'prop-types'
import { IPost } from 'types'
import { Link } from 'react-router-dom'
import { CustomLink } from '../CustomLink'
import { useThemeContext } from 'contexts/ThemeContext'

export const PostCard = ({ data }: { data: IPost }) => {

	const { theme } = useThemeContext()

	return (
		<div className={`${theme.card} ${theme.fontColor} border-2 border-solid border-gray-800 flex flex-col gap-4 w-full min-h-52 h-fit p-4 text-left rounded`}>
			<h2><Link to={`posts/${data.uuid}`}>{data.title}</Link></h2>
			<p>{data.content}</p>
			<CustomLink path={`/posts/${data.uuid}`} text='Ver noticia' />
		</div>
	)
}

PostCard.propTypes = {
	data: PropTypes.object.isRequired
}
