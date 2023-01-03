import { useState, useEffect } from 'react'
import { IPost } from 'types'

export const usePost = (uuid: string, posts: IPost[]) => {
  const [currentPost, setCurrentPost] = useState<IPost>({
    uuid: '816950e8-3e87-4c56-ab6e-4b6af344d003',
    title: 'Nueva generación de procesadores AMD Ryzen',
    theme: 'Hardware',
    authorUuid: 1,
    authorName: 'Facundo Rocha',
    content:
      'Este año AMD lanzó la séptima generación de procesadores Ryzen, esta generación utiliza la arquitectura Zen 4 y un nuevo socket llamado AM5, de tipo LGA. Con esta nueva generación también vienen nuevos chipsets, concretamente X670E, X670, B650E, B650.',
    postedDate: '2022-11-26T02:23:44.806Z',
    reactions: [],
    comments: [],
  })

  useEffect(() => {
    posts.map((post) => {
      if (post.uuid !== uuid) {
        return
      }

      setCurrentPost(post)
    })
  }, [uuid])

  return currentPost
}
