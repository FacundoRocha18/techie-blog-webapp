import React from 'react'
import PropTypes from 'prop-types'
import { StyledPrimLink, StyledTitle } from 'components'
import { Link } from 'react-router-dom'
import { IPost, ThemeProps } from 'types'
import styled from 'styled-components'
import { useThemeContext } from 'contexts/Theme/ThemeContext'

const StyledCardBody = styled('div')`
	display: grid;
	gap: 16px 0px;
	grid-template-columns: repeat(1, 1fr);
	grid-template-rows: repeat(4, auto);
	height: fit-content;
	padding: 16px;

	& .card-btn {
		opacity: 1;
		grid-column: span 3 / span 3;
		grid-row: span 1 / span 1;
		grid-row-start: 4;
		transition: all .5s ease;
	}

	& .card-btn p {
		white-space: nowrap;
 	 	overflow: hidden;
	}

	@media only screen and (min-width: 1024px) {
		& {
			padding: 16px;
		}

		& .card-btn {
			opacity: 0;
			width: 0px;
		}
 	}

	@media only screen and (min-width: 1920px) {
		& {
			padding: 0px 16px;
		}

	 	&:hover .card-btn {
			opacity: 1;
			width: 100%;
		}
 	}
`

const StyledContentParagraph = styled('div')`
	grid-column: span 2 / span 2;
	grid-row: span 1 / span 1;
	grid-row-start: 3;
	position: relative;

	@media (min-width: 768px) {
  	& {
    	display: inline;
  	}
	}

	@media only screen and (min-width: 1024px) {

		& p {
			white-space: pre;
 	 		overflow: hidden;
		}

		::before {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: linear-gradient(to left, var(${({ theme }: ThemeProps) => theme.background}),transparent);
		}
 	}
`

const StyledAuthorParagraph = styled('p')`
	grid-column: span 1 / span 1;
	grid-row: span 1 / span 1;
	grid-row-start: 2;
	align-self: flex-start;
`

const StyledTextDecorator = styled('span')`
	color: var(--primary-accent);
`

export const CardBody = ({ data }: { data: IPost }) => {
	const { theme } = useThemeContext()

	return (
		<StyledCardBody>
			<Link to={`post/${data.post_uuid}`}>
				<StyledTitle aria-rowspan={1} aria-colspan={1}>{data.title}</StyledTitle>
			</Link>
			<StyledAuthorParagraph>
				Autor: <StyledTextDecorator>{data.author_name}</StyledTextDecorator>
			</StyledAuthorParagraph>
			<StyledContentParagraph theme={theme}>
				<p>
					{data.content}
				</p>
			</StyledContentParagraph>
			<StyledPrimLink to={`/post/${data.post_uuid}`} className='card-btn'>
				<p>Ver noticia</p>
			</StyledPrimLink>
		</StyledCardBody>
	)
}

CardBody.propTypes = {}
