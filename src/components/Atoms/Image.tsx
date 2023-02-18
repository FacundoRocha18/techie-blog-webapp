import styled from 'styled-components'

export const StyledImage = styled('img')`
	height: ${props => props.height};
	border-radius: 8px;
	margin-left: auto;
	margin-right: auto;
	width: ${props => props.width};
`

