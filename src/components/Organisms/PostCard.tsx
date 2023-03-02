import PropTypes from 'prop-types'
import styled from 'styled-components'
import { IPost, ThemeProps } from 'types'
import { useThemeContext } from 'contexts/Theme/ThemeContext'
import { StyledImage, CardBody } from 'components'

const StyledCard = styled('article')`
	background-color: var(${({ theme }: ThemeProps) => theme.card});
	box-shadow: var(${({ theme }: ThemeProps) => theme.name === 'light' ? '--dark-shadow' : 'translucent'});
	border-radius: 4px;
	color: var(${props => props.color});
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	grid-template-rows: repeat(2, auto);
	min-height: 325px;

	& > img {
		border-radius: 4px;
		width: 100%;
	}

	@media only screen and (min-width: 1024px) {
		& {
			align-items: center;
			background-color: transparent;
			box-shadow: none;
			gap: 32px;
			grid-template-columns: repeat(2, 1fr);
			grid-template-rows: repeat(1, 1fr);
		}
 	}

	@media only screen and (min-width: 1920px) {
		& {
			align-items: center;
			background-color: transparent;
			box-shadow: none;
			gap: 32px;
			grid-template-columns: repeat(2, 1fr);
			grid-template-rows: repeat(1, 1fr);
		}
 	}
`

export const PostCard = ({ data }: { data: IPost }) => {
	const { theme } = useThemeContext()

	return (
		<StyledCard theme={theme} className='card' color={theme.color}>
			<a href={`post/${data.post_uuid}`}>
				<StyledImage
					src={data.image_reference}
					alt={data.title + ', ' + data.theme}
				/>
			</a>
			<CardBody data={data} />
		</StyledCard>
	)
}

PostCard.propTypes = {
	data: PropTypes.object.isRequired,
}
