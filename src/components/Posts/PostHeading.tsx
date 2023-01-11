import PropTypes from 'prop-types'
import { IPost } from 'types'

export const PostHeading = ({ post }: { post: IPost }) => {
	return (
		<div className='flex flex-col gap-8 desktop:w-70%'>
			<div>
				<h4>
					Tema: <span className='text-pink-500'>{post.theme}</span>
				</h4>
				<h1>{post.title}</h1>
			</div>
			<div>
				<h3>
					Autor: <span className='text-pink-500'>{post.authorName}</span>
				</h3>
				<h4>{post.postedDate}</h4>
			</div>
		</div>
	)
}

PostHeading.propTypes = {
	post: PropTypes.object.isRequired,
}
