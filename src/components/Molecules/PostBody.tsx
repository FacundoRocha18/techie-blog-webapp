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
				src='https://www.amd.com/system/files/styles/600px/private/2022-11/1761310-amd-ryzen-9-7000-series-PIB-angle-1260x709.png?itok=_NVpbZqF'
				alt='AMD Ryzen 7000 series'
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
