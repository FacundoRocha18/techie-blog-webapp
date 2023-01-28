import PropTypes from 'prop-types'
import { IPost, ThemeProps } from 'types'
import { useThemeContext } from 'contexts/ThemeContext'
import { CImage, CContainer, CardBody } from 'components'
import styled from 'styled-components'

const StyledCard = styled('article')`
	background-color: var(${({theme}: ThemeProps) => theme.card});
	box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
	border-radius: 4px;
	color: var(${props => props.color});
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	grid-template-rows: repeat(2, auto);
	height: fit-content;
`

export const PostCard = ({ data }: { data: IPost }) => {
	const { theme } = useThemeContext()

	return (
		<StyledCard theme={theme} className='card' color={theme.color}>
			<CImage
				src='https://www.amd.com/system/files/styles/600px/private/2022-11/1761310-amd-ryzen-9-7000-series-PIB-angle-1260x709.png?itok=_NVpbZqF'
				alt='AMD Ryzen 7000 series'
				height='200px'
			/>
			<CardBody data={data} />
		</StyledCard>
	)
}

PostCard.propTypes = {
	data: PropTypes.object.isRequired,
}
