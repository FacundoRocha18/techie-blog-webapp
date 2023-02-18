import PropTypes from 'prop-types'
import { CImage } from 'components'
import { IPost } from 'types'
import styled from 'styled-components'

const StyledBodyContainer = styled('div')`
	align-items: center;
	display: flex;
	flex-direction: column;
	gap: 80px;
`

export const PostBody = ({ post }: { post: IPost }) => {
	return (
		<StyledBodyContainer>
			<CImage
				src={post.image_reference}
				alt={post.title + ', ' + post.theme}
				height='h-auto'
				width='w-3/4'
			/>
			<p>{post.content}</p>
		</StyledBodyContainer>
	)
}

PostBody.propTypes = {
	post: PropTypes.object.isRequired,
}
