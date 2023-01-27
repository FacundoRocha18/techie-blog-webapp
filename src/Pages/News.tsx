import { usePostsContext } from 'contexts/PostsContext'
import { CContainer, CSection, CTitle, CardTemplate, PostCard } from 'components'
import { useThemeContext } from 'contexts/ThemeContext'

export const News = () => {
	const { posts, loading } = usePostsContext()
	const { theme } = useThemeContext()

	return (
		<CSection color={theme.fontColor} gap='16px 0px'>
			<CTitle fontSize={25} fontWeight={600}>
				Noticias recientes
			</CTitle>
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
