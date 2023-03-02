import { StyledImage, StyledTitle, AuthorAvatar, AuthorName, AuthorTag, AuthorContainer } from 'components'
import { useThemeContext } from 'contexts/Theme/ThemeContext'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { IPost, ThemeProps } from 'types'

const StyledPostHeading = styled('section')`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	height: fit-content;
	margin-bottom: 20px;
	width: 100%;
`

const DateContainer = styled('div')`
	& p {
		font-size: 18px;
	}
`

const InfoContainer = styled('div')`
	background-color: var(${({ theme }: ThemeProps) => theme.card});
	border-radius: 4px;
	display: flex;
	flex-direction: column;
	gap: 16px;
	justify-content: space-between;
	padding: 16px;

	@media only screen and (min-width: 768px) {
		& {
			align-items: center;
			flex-direction: row;
		}
	}
`

export const PostHeading = ({ post }: { post: IPost }) => {
	const { theme } = useThemeContext()

	return (
		<StyledPostHeading>
			<StyledTitle>{post.title}</StyledTitle>
			<StyledImage
				src={post.image_reference}
				alt={post.title + ', ' + post.theme}
				height='100%'
				width='100%'
			/>
			<InfoContainer theme={theme}>
				<AuthorContainer>
					<AuthorAvatar src={post.author_avatar} />
					<AuthorName>{post.author_name}</AuthorName>
					<AuthorTag theme={theme}>Autor</AuthorTag>
				</AuthorContainer>
				{/* <DateContainer>
					<p>Subido el {post.created_at}</p>
				</DateContainer> */}
			</InfoContainer>
		</StyledPostHeading>
	)
}

PostHeading.propTypes = {
	post: PropTypes.object.isRequired,
}
