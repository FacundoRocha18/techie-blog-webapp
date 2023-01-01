import React from 'react'
import PropTypes from 'prop-types'
import { usePostsContext } from 'contexts/PostsContext'
import { PostCard } from './Posts/PostCard'

export const NewsSection = () => {

	const { posts } = usePostsContext()

	return (
		<section id='news-container'>
				<h2 className='mb-4 text-smTitle text-left'>Noticias recientes</h2>
				<div className='w-full grid grid-cols-1 gap-8 items-center'>
					{
						posts.map(post => (
							<PostCard key={post.uuid} data={post} />
						))
					}
				</div>
			</section>
	)
}

NewsSection.propTypes = {}
