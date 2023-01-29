import { StyledTitle } from 'components/Atoms/Title'
import PropTypes from 'prop-types'
import { IPost } from 'types'

export const PostHeading = ({ post }: { post: IPost }) => {
	return (
		<div className='flex flex-col gap-8 h-fit desktop:w-70%'>
			<div>
				<p>
					Tema: <span className='text-pink-500'>{post.theme}</span>
				</p>
				<StyledTitle>{post.title}</StyledTitle>
			</div>
			<div className='min-h-fit'>
				<p>
					Autor: <span className='text-pink-500'>{post.author_name}</span>
				</p>
				<p>{post.created_at}</p>
			</div>
		</div>
	)
}

PostHeading.propTypes = {
	post: PropTypes.object.isRequired,
}
