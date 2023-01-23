import React from 'react'
import PropTypes from 'prop-types'
import { ImageProps } from 'types'
import styled from 'styled-components'

export const CImage = styled('img')`
	height: ${props => props.height};
	margin-left: auto;
	margin-right: auto;
	width: ${props => props.width};
`
/* 
export const Image = ({ url, alt, height, width, additionalStyles }: ImageProps) => {
  return <img className={`${height} ${width} ${additionalStyles}`} src={url} alt={alt} />
}

Image.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
} */
