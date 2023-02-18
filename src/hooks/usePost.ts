/* eslint-disable camelcase */
import { useState, useEffect } from 'react'
import { IPost } from 'types'

export const usePost = (uuid: string, posts: IPost[]) => {
  const [currentPost, setCurrentPost] = useState<IPost>({
    // eslint-disable-next-line camelcase
    post_uuid: '816950e8-3e87-4c56-ab6e-4b6af344d003',
    title: 'Nueva generación de procesadores AMD Ryzen',
    theme: 'Hardware',
    author_uuid: '816950e8-3e87-4c56-ab6e-4b6af344d003',
    author_name: 'Facundo Rocha',
    author_avatar: 'https://uacbbrykglstgwrecfde.supabase.co/storage/v1/object/sign/avatars/avatar.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL2F2YXRhci5wbmciLCJpYXQiOjE2NzY3NDc0MjEsImV4cCI6MTcwODI4MzQyMX0.nU6P5XHPh2ixWlm-lBqHWihNp36LSgcq6JGjBPjsbMc&t=2023-02-18T19%3A10%3A21.991Z',
    content:
      'Este año AMD lanzó la séptima generación de procesadores Ryzen, esta generación utiliza la arquitectura Zen 4 y un nuevo socket llamado AM5, de tipo LGA. Con esta nueva generación también vienen nuevos chipsets, concretamente X670E, X670, B650E, B650.',
    created_at: '2022-11-26T02:23:44.806Z',
		image_reference: 'https://uacbbrykglstgwrecfde.supabase.co/storage/v1/object/sign/images/1536834-amd-ryzen-7000-series-beauty-1260x709_0.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvMTUzNjgzNC1hbWQtcnl6ZW4tNzAwMC1zZXJpZXMtYmVhdXR5LTEyNjB4NzA5XzAud2VicCIsImlhdCI6MTY3NjY5MjE1MiwiZXhwIjoxNzA4MjI4MTUyfQ.yC76vWt8b2ibC-h-LOSKaV1EJMU5lpLrLxT_h6qLv54&t=2023-02-18T03%3A49%3A13.019Z'
  })

  useEffect(() => {
    posts.map((post) => {
      if (post.post_uuid !== uuid) {
        return
      }

      setCurrentPost(post)
    })
  }, [uuid])

  return currentPost
}
