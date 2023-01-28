import { usePostsContext } from 'contexts/PostsContext'
import { CContainer, CSection, StyledSubtitle, CardTemplate, PostCard } from 'components'
import { useThemeContext } from 'contexts/ThemeContext'

export const News = () => {
	const { posts, loading } = usePostsContext()
	const { theme } = useThemeContext()

	return (
		<CSection className='news-section' theme={theme}>
			<StyledSubtitle >
				Noticias recientes
			</StyledSubtitle>
			<CContainer className='news-container' >
				{
					loading
						?
						<CardTemplate />
						:
						posts.map((post) => (
							<PostCard key={post.post_uuid} data={post} />
						))
				}
			</CContainer>
		</CSection>
	)
}

News.propTypes = {}
