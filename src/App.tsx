import { PostCard } from 'components'
import { usePostsContext } from 'contexts/PostsContext'
import { useThemeContext } from 'contexts/ThemeContext'

export const App = () => {
  const { theme, themeName } = useThemeContext()
	const { posts } = usePostsContext()

  return (
    <div className={`${theme.background} ${theme.fontColor}`} id='container'>
      <div>
				{
					posts.map(post => (
						<PostCard data={post}/>
					))
				}
			</div>
    </div>
  )
}
