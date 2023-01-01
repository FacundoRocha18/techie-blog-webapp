import React from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import { usePostsContext } from 'contexts/PostsContext'
import { usePost } from 'hooks'
import { IPost } from 'types'
import { useThemeContext } from 'contexts/ThemeContext'
import { PostHeading } from './PostHeading'

export const Post = () => {

	const { id } = useParams()
	const { posts } = usePostsContext()
	const { theme } = useThemeContext()

	const post: IPost = usePost(id, posts)

	console.log(post)

	return (
		<section className={`${theme.background} ${theme.fontColor}`} id='post-container'>
			<div className='flex flex-col gap-8'>
				<PostHeading postData={post} />
				<img src="https://www.amd.com/system/files/styles/600px/private/2022-11/1761310-amd-ryzen-9-7000-series-PIB-angle-1260x709.png?itok=_NVpbZqF" alt="AMD Ryzen" />
				<p className='text-left'>{post.content}</p>
			</div>
		</section>
	)
}

Post.propTypes = {}
