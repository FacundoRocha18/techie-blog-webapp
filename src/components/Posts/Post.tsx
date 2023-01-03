import { useParams } from 'react-router-dom'
import { usePostsContext } from 'contexts/PostsContext'
import { usePost } from 'hooks'
import { IPost } from 'types'
import { PostHeading, PostBody } from 'components'

export const Post = () => {
  const { id } = useParams()
  const { posts } = usePostsContext()

  const post: IPost = usePost(id, posts)

  return (
    <article id='post-container'>
      <div className='flex flex-col gap-20'>
        <PostHeading post={post} />
        <PostBody post={post} />
      </div>
    </article>
  )
}
