import React from 'react'
import PropTypes from 'prop-types'
import { CContainer, CTitle, CLink } from 'components'
import { Link } from 'react-router-dom'
import { IPost } from 'types'

export const CardBody = ({ data }: { data: IPost }) => {
	return (

		<CContainer display='grid' columns={3} gap={16} rows={2}>
			<CTitle alignTo='left' aria-rowspan={1} aria-colspan={3} fontSize={20} >
				<Link className='' to={`post/${data.uuid}`}>
					{data.title}
				</Link>
			</CTitle>
			<h4 className='col-span-3 row-span-1 row-start-2 self-start'>
				Autor: <span className='text-pink-500'>{data.authorName}</span>
			</h4>
			<p className='hidden max-w-full col-span-3 row-span-3 row-start-3 tablet:inline desktop:inline'>
				{data.content}
			</p>
			<CLink
				path={`/post/${data.uuid}`}
				text='Ver noticia'
				styles='hidden col-span-3 row-span-1 row-start-6 tablet:flex desktop:flex'
			/>
		</CContainer>
	)
}

/* 
<div className='grid grid-rows-2 grid-cols-3 col-span-3 col-start-2 h-full tablet:gap-4 tablet:grid-rows-6'></div>
*/

CardBody.propTypes = {}
