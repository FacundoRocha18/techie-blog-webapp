import PropTypes from 'prop-types'
import { IPost } from 'types'
import { useThemeContext } from 'contexts/ThemeContext'
import { CImage, CContainer, CardBody } from 'components'

export const PostCard = ({ data }: { data: IPost }) => {
	const { theme, themeName } = useThemeContext()

	{/* <div
		className={`${theme.card} ${theme.fontColor} ${themeName === 'light' ? 'border-2' : 'border-0'
			}`}
		id='card-container'
	>
		
	</div> */}
	return (
		<CContainer background={theme.card} display='grid' height='50%' gap='16' rows='2'>
			<CImage
				src='https://www.amd.com/system/files/styles/600px/private/2022-11/1761310-amd-ryzen-9-7000-series-PIB-angle-1260x709.png?itok=_NVpbZqF'
				alt='AMD Ryzen 7000 series'
				height='h-20'
				width='w-20'
			/>
			<CardBody data={data} />
		</CContainer>
	)
}

PostCard.propTypes = {
	data: PropTypes.object.isRequired,
}
