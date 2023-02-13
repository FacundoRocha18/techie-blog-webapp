import { StyledContainer, StyledSection, CardTemplate, PostCard, StyledSubtitle, StyledNewsGrid } from 'components'
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
			<StyledNewsGrid>
				{
					loading
						?
						<CardTemplate />
						:
						posts.map((post) => (
							<PostCard key={post.post_uuid} data={post} />
						))
				}
			</StyledNewsGrid>
		</StyledSection>
	)
}