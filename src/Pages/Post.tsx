import { useParams } from 'react-router-dom'
import { usePostsContext } from 'contexts/PostsContext'
import { usePost } from 'hooks'
import { IPost } from 'types'
import { PostHeading, PostBody } from 'components'
import { useThemeContext } from 'contexts/Theme/ThemeContext'

export const Post = () => {
	const { id } = useParams()
	const { posts } = usePostsContext()
	const { theme } = useThemeContext()

	const post: IPost = usePost(id, posts)

	return (
		<article className={`border-x-0 border-solid border-pink-500`} id='post-container'>
			<div className='flex flex-col items-center gap-20 w-fit'>
				<PostHeading post={post} />
				<PostBody post={post} />
			</div>
		</article>
	)
}
