import React from 'react'
import PropTypes from 'prop-types'
import { StyledContainer, StyledTitle, StyledPrimLink } from 'components'
import { Link } from 'react-router-dom'
import { IPost } from 'types'

export const CardBody = ({ data }: { data: IPost }) => {

	return (

		<StyledContainer className='card-body'>
			<StyledTitle aria-rowspan={1} aria-colspan={1}>
				<Link to={`post/${data.post_uuid}`}>
					{data.title}
				</Link>
			</StyledTitle>
			<h4 className='col-span-1 row-span-1 row-start-2 self-start'>
				Autor: <span className='text-pink-500'>{data.author_name}</span>
			</h4>
			<p className='hidden max-w-full col-span-3 row-span-3 row-start-3 tablet:inline desktop:inline'>
				{data.content}
			</p>
			<StyledPrimLink to={`/post/${data.post_uuid}`} className='card-btn'>
				Ver noticia
			</StyledPrimLink>
		</StyledContainer>
	)
}

CardBody.propTypes = {}
