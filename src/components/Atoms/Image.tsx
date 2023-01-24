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

