import React from 'react'
import PropTypes from 'prop-types'
import { IPost } from 'types'

export const PostCard = ({ data }: { data: IPost }) => {

	return (
		<div >
			<h1>{data.title}</h1>
		</div>
	)
}

PostCard.propTypes = {}
