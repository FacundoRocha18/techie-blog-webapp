import React from 'react'
import PropTypes from 'prop-types'
import { usePostsContext } from 'contexts/PostsContext'
import { PostCard } from '../Posts/PostCard'

export const NewsSection = () => {
  const { posts } = usePostsContext()

  return (
    <section id='news-container'>
      <h2 className='mb-4 text-left text-smTitle'>Noticias recientes</h2>
      <div className='grid w-full grid-cols-1 items-center gap-4'>
        {posts.map((post) => (
          <PostCard key={post.uuid} data={post} />
        ))}
      </div>
    </section>
  )
}

NewsSection.propTypes = {}
