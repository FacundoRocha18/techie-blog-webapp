import { useParams } from 'react-router-dom'
import { usePostsContext } from 'contexts/PostsContext'
import { usePost } from 'hooks'
import { PostHeading, PostBody, StyledArticle } from 'components'
import { IPost } from 'shared'

interface MyParams {
  id: string
}

export const Post = () => {
  const { id } = useParams<keyof MyParams>() as MyParams
  const { posts } = usePostsContext()

  const post: IPost = usePost(id, posts)

  return (
    <StyledArticle>
      <PostHeading post={post} />
      <PostBody post={post} />
    </StyledArticle>
  )
}
