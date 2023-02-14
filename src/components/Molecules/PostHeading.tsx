import { StyledTitle } from 'components/Atoms/Title'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { IPost } from 'types'

const StyledPostHeading = styled('section')`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	height: fit-content;

	@media only screen and (min-width: 1024px) {
  	& {
    	width: 70%;
  	}
	}
`

export const PostHeading = ({ post }: { post: IPost }) => {
	return (
		<StyledPostHeading>
			<div>
				<p>
					Tema: <span className='text-pink-500'>{post.theme}</span>
				</p>
				<StyledTitle>{post.title}</StyledTitle>
			</div>
			<div>
				<p>
					Autor: <span className='text-pink-500'>{post.author_name}</span>
				</p>
				<p>{post.created_at}</p>
			</div>
		</StyledPostHeading>
	)
}

PostHeading.propTypes = {
	post: PropTypes.object.isRequired,
}
