import React from 'react'
import PropTypes from 'prop-types'
import { StyledPrimLink, StyledSubtitle } from 'components'
import { Link } from 'react-router-dom'
import { IPost } from 'types'
import styled from 'styled-components'

const StyledCardBody = styled('div')`
	display: grid;
	gap: 16px 0px;
	grid-template-columns: repeat(1, 1fr);
	grid-template-rows: repeat(2, auto);
	height: fit-content;
	padding: 16px;
`

export const CardBody = ({ data }: { data: IPost }) => {

	return (
		<StyledCardBody>
			<Link to={`post/${data.post_uuid}`}>
				<StyledSubtitle aria-rowspan={1} aria-colspan={1}>{data.title}</StyledSubtitle>
			</Link>
			<p className='col-span-1 row-span-1 row-start-2 self-start'>
				Autor: <span className='text-pink-500'>{data.author_name}</span>
			</p>
			<p className='hidden max-w-full col-span-3 row-span-3 row-start-3 tablet:inline desktop:inline'>
				{data.content}
			</p>
			<StyledPrimLink to={`/post/${data.post_uuid}`} className='card-btn'>
				Ver noticia
			</StyledPrimLink>
		</StyledCardBody>
	)
}

CardBody.propTypes = {}
