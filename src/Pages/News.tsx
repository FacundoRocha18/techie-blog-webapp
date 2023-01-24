import { usePostsContext } from 'contexts/PostsContext'
import { PostCard } from '../components/Templates/PostCard'
import { CardTemplate } from 'components/Templates/CardTemplate'
import { CContainer, CSection, CTitle } from 'components'
import { useThemeContext } from 'contexts/ThemeContext'

export const News = () => {
	const { posts, loading } = usePostsContext()
	const { theme } = useThemeContext()

	return (
		<CSection color={theme.fontColor} gap='16px 0px'>
			<CTitle alignTo='left' fontSize={25} fontWeight={600}>
				Noticias recientes
			</CTitle>
			<CContainer align='default' columns={1} display='grid' height='fit-content' rows={posts.length} gap='16px 0px'>
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
