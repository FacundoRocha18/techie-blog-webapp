import { createContextCustom } from "hooks"
import { useFetchPosts } from "hooks"
import { ChildrenProps, IPostsContext } from 'types'

export const [usePostsContext, ContextProvider] = createContextCustom<IPostsContext>()

export const PostsProvider = ({ children }: ChildrenProps) => {
	const [posts, loading] = useFetchPosts()

  const providerValue: IPostsContext = {
    posts: posts,
    loading: loading,
  }

  return <ContextProvider value={providerValue}>{children}</ContextProvider>
}