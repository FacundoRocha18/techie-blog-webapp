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
	grid-template-rows: repeat(4, auto);
	height: fit-content;
	padding: 16px;

	@media only screen and (min-width: 992px) {
   padding: 0px 16px;
 	}
`

const StyledAuthorParagraph = styled('p')`
	color: rgb(212, 210, 210);
	grid-column: span 2 / span 2;
	grid-row: span 1 / span 1;
	grid-row-start: 3;
	max-width: 100%;

	@media (min-width: 768px) {
  	& {
    	display: inline;
  	}
	}
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
			<StyledAuthorParagraph>
				{data.content}
			</StyledAuthorParagraph>
			<p className='max-w-full col-span-1 row-span-1 row-start-3 tablet:inline desktop:inline'>
			</p>
			<StyledPrimLink to={`/post/${data.post_uuid}`} className='card-btn'>
				Ver noticia
			</StyledPrimLink>
		</StyledCardBody>
	)
}

CardBody.propTypes = {}
