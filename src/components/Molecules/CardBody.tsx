import React from 'react'
import PropTypes from 'prop-types'
import { CContainer, CTitle, CLink } from 'components'
import { Link } from 'react-router-dom'
import { IPost } from 'types'

export const CardBody = ({ data }: { data: IPost }) => {

	return (

		<CContainer className='card-body'>
			<CTitle aria-rowspan={1} aria-colspan={1} fontSize={20} fontWeight={500}>
				<Link to={`post/${data.post_uuid}`}>
					{data.title}
				</Link>
			</CTitle>
			<h4 className='col-span-1 row-span-1 row-start-2 self-start'>
				Autor: <span className='text-pink-500'>{data.author_name}</span>
			</h4>
			<p className='hidden max-w-full col-span-3 row-span-3 row-start-3 tablet:inline desktop:inline'>
				{data.content}
			</p>
			<CLink to={`/post/${data.post_uuid}`} className='card-btn'>
				Ver noticia
			</CLink>
		</CContainer>
	)
}

/* 
<div className='grid grid-rows-2 grid-cols-3 col-span-3 col-start-2 h-full tablet:gap-4 tablet:grid-rows-6'></div>
*/

CardBody.propTypes = {}
