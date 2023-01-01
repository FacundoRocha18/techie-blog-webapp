import React from 'react'
import PropTypes from 'prop-types'
import { IPost } from 'types'

export const PostHeading = ({ postData }: { postData: IPost }) => {
	return (
		<div className='flex flex-col gap-8'>
			<div>
				<h4>Tema: <span className='text-pink-500'>{postData.theme}</span></h4>
				<h1>{postData.title}</h1>
			</div>
			<div>
				<h3>Autor: <span className='text-pink-500'>{postData.authorName}</span></h3>
				<h4>{postData.postedDate}</h4>
			</div>
		</div>
	)
}

PostHeading.propTypes = {}
