import {
  StyledSection,
  CardTemplate,
  PostCard,
  StyledSubtitle,
  StyledGridContainer,
} from 'components'
import { usePostsContext } from 'contexts/PostsContext'
import { useThemeContext } from 'contexts/Theme/ThemeContext'
import { IPost } from 'shared'

export const News = () => {
  const { posts, loading } = usePostsContext()
  const { theme } = useThemeContext()

  return (
    <StyledSection className='news-section' theme={theme}>
      <StyledSubtitle>Noticias recientes</StyledSubtitle>
      <StyledGridContainer>
        {loading ? (
          <CardTemplate />
        ) : (
          posts.map((post: IPost) => <PostCard key={post.post_uuid} data={post} />)
        )}
      </StyledGridContainer>
    </StyledSection>
  )
}
