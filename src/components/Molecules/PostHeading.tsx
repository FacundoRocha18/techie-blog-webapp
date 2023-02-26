import { StyledImage, StyledTitle } from 'components'
import { useThemeContext } from 'contexts/Theme/ThemeContext'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { IPost, ThemeProps } from 'types'

const StyledPostHeading = styled('section')`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	height: fit-content;
	width: 100%;
`

const AuthorContainer = styled('div')`
	align-items: center;
	display: grid;
	gap: 16px;
	grid-template-columns: repeat(3, auto);
	width: fit-content;
`

const AuthorAvatar = styled('img')`
	border-radius: 100%;
	grid-column: span 1 / span 1;
	height: 50px;
	width: 50px;
`

const AuthorName = styled('p')`
	grid-column: span 1 / span 1;
`

const AuthorTag = styled('span')`
	background-color: var(${({ theme }: ThemeProps) => theme.accent});
	border-radius: 4px;
	grid-column: span 1 / span 1;
	font-size: 16px;
	padding: 2px 6px;
`

const DateContainer = styled('div')`
	& p {
		font-size: 14px;
	}
`

const InfoContainer = styled('div')`
	display: flex;
	flex-direction: column;
	gap: 16px;
`

export const PostHeading = ({ post }: { post: IPost }) => {
	const { theme } = useThemeContext()

	return (
		<StyledPostHeading>
			<StyledTitle>{post.title}</StyledTitle>
			<InfoContainer>
				<AuthorContainer>
					<AuthorAvatar src={post.author_avatar} />
					<AuthorName>{post.author_name}</AuthorName>
					<AuthorTag theme={theme}>Autor</AuthorTag>
				</AuthorContainer>
				<DateContainer>
					<p>Subido el: {post.created_at}</p>
				</DateContainer>
			</InfoContainer>
			<StyledImage
				src={post.image_reference}
				alt={post.title + ', ' + post.theme}
				height='100%'
				width='100%'
			/>
		</StyledPostHeading>
	)
}

PostHeading.propTypes = {
	post: PropTypes.object.isRequired,
}
