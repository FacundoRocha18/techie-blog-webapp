import PropTypes from 'prop-types'
import { StyledImage } from 'components'
import { IPost } from 'types'
import styled from 'styled-components'

const StyledBodyContainer = styled('div')`
	align-items: center;
	display: flex;
	flex-direction: column;
	gap: 32px;

	@media only screen and (min-width: 768px) {
			& {
				width: 90%;
			}
	}

	@media only screen and (min-width: 1024px) {
			& {
				width: 100%;
			}
	}
`
const StyledBodyParagraph = styled('p')`
	font-size: 2rem;

	@media only screen and (min-width: 1024px) {
			& {
				font-size: 2.3rem;
			}
	}
`

export const PostBody = ({ post }: { post: IPost }) => {
	return (
		<StyledBodyContainer>
			<StyledBodyParagraph>{post.content}</StyledBodyParagraph>
			<StyledBodyParagraph>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget condimentum quam. Nulla viverra consequat eros, eget semper ligula iaculis vel. Pellentesque lobortis nulla sed ligula efficitur aliquam. Phasellus sed tellus tincidunt, commodo risus iaculis, dignissim lorem. Praesent fermentum lorem in elit maximus convallis. Vivamus ac interdum dui. Vivamus et tincidunt eros, vitae sollicitudin est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;

				Nunc a elit justo. Sed vel lectus est. Etiam aliquet, nisl in tempus varius, magna sem fringilla nulla, eu laoreet elit urna et nulla. Sed tellus purus, malesuada a neque ut, porttitor semper nunc. In efficitur, elit interdum malesuada pharetra, lectus sem vulputate nisi, non euismod mauris orci sit amet turpis. Ut iaculis lectus ut lorem fringilla, ut vestibulum elit pulvinar. Nulla convallis vitae lectus vel vulputate. Fusce sit amet tortor ac ipsum scelerisque fringilla sit amet eget felis. Aenean id leo lobortis, consequat nisi eu, congue dolor. Nunc volutpat sapien et nunc varius bibendum. Praesent hendrerit fermentum ligula, varius pretium urna pellentesque vitae. Nullam et nunc lobortis, consequat libero nec, eleifend urna.
			</StyledBodyParagraph>
			<StyledImage
				src={post.image_reference}
				alt={post.title + ', ' + post.theme}
				height='100%'
				width='100%'
			/>
			<StyledBodyParagraph>{post.content}</StyledBodyParagraph>
			<StyledBodyParagraph>
				Donec a ante non velit faucibus malesuada. Sed sollicitudin lectus et quam bibendum cursus. Duis vel sollicitudin sapien, ac viverra leo. Phasellus id mi lectus. Morbi placerat, lectus ut hendrerit sollicitudin, augue ipsum tincidunt risus, quis interdum leo velit vitae magna. Praesent vel dui vitae ante vestibulum consectetur. Phasellus id dictum purus. Maecenas pharetra, ex ut ultricies iaculis, lectus sapien eleifend arcu, ac laoreet nulla mi in dolor. Nulla eget dolor faucibus, pellentesque ex nec, commodo enim.

				Morbi rutrum turpis vitae lectus auctor feugiat. Ut a dui in ligula porttitor ultricies sed ac magna. Sed accumsan ultricies ipsum, et luctus quam pretium sit amet. Donec tincidunt ante neque, imperdiet bibendum turpis aliquet nec. Quisque in orci sed turpis bibendum condimentum. Ut lobortis accumsan risus eu dictum. Duis lacinia dolor id elit posuere, consectetur egestas leo aliquam. Aliquam nunc leo, rutrum nec mauris quis, suscipit bibendum erat. Aliquam viverra enim nec lorem volutpat, sed lobortis nisl dignissim. Vestibulum gravida lacinia lorem sed pharetra. Duis diam sem, congue et dolor id, tincidunt feugiat dolor. Nunc venenatis in turpis quis lobortis. Pellentesque congue felis et pulvinar pharetra.
			</StyledBodyParagraph>
			<StyledBodyParagraph>
				Praesent scelerisque, purus a elementum interdum, est sem accumsan lacus, ut fringilla arcu leo in nulla. Praesent volutpat pellentesque auctor. Integer nec erat pulvinar, convallis nibh nec, porta nulla. Maecenas a pretium massa. Donec aliquam condimentum suscipit. Suspendisse ac semper lectus. Nam ullamcorper arcu nec vulputate ullamcorper. Sed eu nulla dapibus sem rhoncus ornare nec ac urna. Nullam sodales bibendum lacus sed molestie. Praesent vulputate posuere odio, non bibendum tellus pretium eu. Cras cursus fringilla efficitur. Aenean vitae elit tincidunt sem posuere ultrices non eget felis. Vivamus eu erat eu nulla tristique vestibulum. Phasellus nisi sem, egestas vitae tincidunt quis, vulputate a odio. Nam non tellus dapibus metus maximus faucibus ut quis augue.
			</StyledBodyParagraph>
		</StyledBodyContainer>
	)
}

PostBody.propTypes = {
	post: PropTypes.object.isRequired,
}
