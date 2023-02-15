import { StyledTitle, TextDecorator } from 'components'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { IPost } from 'types'

const StyledPostHeading = styled('section')`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	height: fit-content;
	width: 100%;
`

export const PostHeading = ({ post }: { post: IPost }) => {
	return (
		<StyledPostHeading>
			<div>
				<StyledTitle>{post.title}</StyledTitle>
			</div>
			<div>
				<p>Autor: <TextDecorator>{post.author_name}</TextDecorator></p>
				<p>{post.created_at}</p>
			</div>
		</StyledPostHeading>
	)
}

PostHeading.propTypes = {
	post: PropTypes.object.isRequired,
}
