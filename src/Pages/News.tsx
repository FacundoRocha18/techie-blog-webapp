import { StyledContainer, StyledSection, CardTemplate, PostCard, StyledSubtitle } from 'components'
import { usePostsContext } from 'contexts/PostsContext'
import { useThemeContext } from 'contexts/Theme/ThemeContext'

export const News = () => {
	const { posts, loading } = usePostsContext()
	const { theme } = useThemeContext()

	return (
		<StyledSection className='news-section' theme={theme}>
			<StyledSubtitle>
				Noticias recientes
			</StyledSubtitle>
			<StyledContainer className='news-container' >
				{
					true
						?
						<CardTemplate />
						:
						posts.map((post) => (
							<PostCard key={post.post_uuid} data={post} />
						))
				}
			</StyledContainer>
		</StyledSection>
	)
}