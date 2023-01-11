import PropTypes from 'prop-types'
import { IPost } from 'types'
import { Link } from 'react-router-dom'
import { CustomLink } from '../Common/CustomLink'
import { useThemeContext } from 'contexts/ThemeContext'
import { Image } from 'components/Common/Image'

export const PostCard = ({ data }: { data: IPost }) => {
	const { theme, themeName } = useThemeContext()

	return (
		<div
			className={`${theme.card} ${theme.fontColor} ${themeName === 'light' ? 'border-2' : 'border-0'
				}`}
			id='card-container'
		>
			<Image
				url='https://www.amd.com/system/files/styles/600px/private/2022-11/1761310-amd-ryzen-9-7000-series-PIB-angle-1260x709.png?itok=_NVpbZqF'
				alt='AMD Ryzen 7000 series'
				height='h-20'
				width='w-20'
				additionalStyles='mx-auto'
			/>
			<div className='grid grid-rows-2 grid-cols-3 col-span-3 col-start-2 h-full tablet:gap-4 tablet:grid-rows-6'>
				<h2 className='text-[20px] font-semibold truncate col-span-3 row-span-1 tablet:text-smSubtitle desktop:text-smSubtitle'>
					<Link className='hover:text-pink-500' to={`posts/${data.uuid}`}>
						{data.title}
					</Link>
				</h2>
				<h4 className='col-span-3 row-span-1 row-start-2 self-start'>
					Autor: <span className='text-pink-500'>{data.authorName}</span>
				</h4>
				<p className='hidden max-w-full col-span-3 row-span-3 row-start-3 tablet:inline desktop:inline'>
					{data.content}
				</p>
				<CustomLink
					path={`/posts/${data.uuid}`}
					text='Ver noticia'
					styles='hidden col-span-3 row-span-1 row-start-6 tablet:flex desktop:flex'
				/>
			</div>
		</div>
	)
}

PostCard.propTypes = {
	data: PropTypes.object.isRequired,
}
