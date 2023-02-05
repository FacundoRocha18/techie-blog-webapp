import PropTypes from 'prop-types'
import { IPost, ThemeProps } from 'types'
import { useThemeContext } from 'contexts/Theme/ThemeContext'
import { CImage, StyledContainer, CardBody } from 'components'
import styled from 'styled-components'

const StyledCard = styled('article')`
	background-color: var(${({ theme }: ThemeProps) => theme.card});
	box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
	border-radius: 4px;
	color: var(${props => props.color});
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	grid-template-rows: repeat(2, auto);
	height: 325px;
`

export const PostCard = ({ data }: { data: IPost }) => {
	const { theme } = useThemeContext()

	return (
		<StyledCard theme={theme} className='card' color={theme.color}>
			<CImage
				src='https://images.macrumors.com/t/lyB4c1iPX6XBNTsqFd19N14goLQ=/2672x/article-new/2022/08/14-vs-16-inch-mbp-m2-pro-and-max-feature-1.jpg'
				alt='Apple Macbook Pro M2 Pro'
				height='200px'
			/>
			<CardBody data={data} />
		</StyledCard>
	)
}

PostCard.propTypes = {
	data: PropTypes.object.isRequired,
}
