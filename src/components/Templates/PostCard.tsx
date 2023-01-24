import PropTypes from 'prop-types'
import { IPost } from 'types'
import { useThemeContext } from 'contexts/ThemeContext'
import { CImage, CContainer, CardBody } from 'components'

export const PostCard = ({ data }: { data: IPost }) => {
	const { theme, themeName } = useThemeContext()

	return (
		<CContainer background={theme.card} color={theme.color} display='grid' height='fit-content' gap={16} rounded={4} rows={2} shadow={true} size='auto'>
			<CImage
				src='https://www.amd.com/system/files/styles/600px/private/2022-11/1761310-amd-ryzen-9-7000-series-PIB-angle-1260x709.png?itok=_NVpbZqF'
				alt='AMD Ryzen 7000 series'
				height='200px'
			/>
			<CardBody data={data} />
		</CContainer>
	)
}

PostCard.propTypes = {
	data: PropTypes.object.isRequired,
}
