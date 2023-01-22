import { usePostsContext } from 'contexts/PostsContext'
import { PostCard } from '../components/Templates/PostCard'
import { EmptyCard } from 'components/Templates/EmptyCard'
import { CContainer, CSection } from 'components'
import { useThemeContext } from 'contexts/ThemeContext'

export const News = () => {
	const { posts, loading } = usePostsContext()
	const { theme } = useThemeContext()

	return (
		<CSection color={theme.fontColor}>
			<h2 className='mb-4 text-left text-smTitle'>Noticias recientes</h2>
			<div className='grid w-full grid-cols-1 items-center gap-4'>

			</div>
			<CContainer align='default' columns='1' display='grid' rows={posts.length.toString()} gap='16'>
				{
					loading
						?
						<EmptyCard />
						:
						posts.map((post) => (
							<PostCard key={post.uuid} data={post} />
						))
				}
			</CContainer>
		</CSection>
	)
}

News.propTypes = {}
