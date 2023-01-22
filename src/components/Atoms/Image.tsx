import React from 'react'
import PropTypes from 'prop-types'
import { ImageProps } from 'types'

export const Image = ({ url, alt, height, width, additionalStyles }: ImageProps) => {
  return <img className={`${height} ${width} ${additionalStyles}`} src={url} alt={alt} />
}

Image.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}
