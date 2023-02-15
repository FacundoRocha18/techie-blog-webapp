import PropTypes from 'prop-types'
import { IPost, ThemeProps } from 'types'
import { useThemeContext } from 'contexts/Theme/ThemeContext'
import { CImage, StyledContainer, CardBody } from 'components'
import styled from 'styled-components'

const StyledCard = styled('article')`
	background-color: var(${({ theme }: ThemeProps) => theme.card});
	box-shadow: var(${({ theme }: ThemeProps) => theme.name === 'light' ? '--dark-shadow' : 'translucent'});
	border-radius: 4px;
	color: var(${props => props.color});
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	grid-template-rows: repeat(2, auto);
	min-height: 325px;

	& img {
		border-radius: 4px;
		width: 100%;
	}

	@media only screen and (min-width: 1024px) {
		& {
			align-items: center;
			background-color: transparent;
			box-shadow: none;
			gap: 64px;
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
				<CImage
					src='https://images.macrumors.com/t/lyB4c1iPX6XBNTsqFd19N14goLQ=/2672x/article-new/2022/08/14-vs-16-inch-mbp-m2-pro-and-max-feature-1.jpg'
					alt='Apple Macbook Pro M2 Pro'
					height='100%'
				/>
			</a>
			<CardBody data={data} />
		</StyledCard>
	)
}

PostCard.propTypes = {
	data: PropTypes.object.isRequired,
}