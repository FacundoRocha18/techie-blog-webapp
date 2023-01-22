import { useThemeContext } from 'contexts/ThemeContext'

export const EmptyCard = () => {
	const { theme } = useThemeContext()

	return (
		<div className={`${theme.card}`} id='empty-card'>
			<div className={`${theme.placeholders} animate-pulse rounded-sm h-20 w-20 tablet:h-80 tablet:w-full col-span-1 col-start-1`}>

			</div>
			<div className='grid grid-rows-2 grid-cols-3 gap-4 col-span-3 col-start-2 h-full tablet:grid-rows-6'>
				<div className={`${theme.placeholders} animate-pulse rounded-sm h-6 col-span-3 row-span-1`}>

				</div>
				<div className={`${theme.placeholders} animate-pulse rounded-sm h-4 col-span-2 row-span-1 row-start-2 self-start`}>

				</div>
				<div className={`${theme.placeholders} animate-pulse rounded-sm hidden h-full col-span-3 row-span-3 row-start-3 tablet:block desktop:block`}>
				</div>
				<div className={`hidden ${theme.placeholders} animate-pulse rounded-sm h-full col-span-3 row-span-1 row-start-6 tablet:block desktop:block`}>

				</div>
			</div>
		</div>
	)

}
