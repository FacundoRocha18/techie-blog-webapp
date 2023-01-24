import { CButton } from 'components/Atoms/Button'
import { CContainer } from 'components/Atoms/Container'
import { useThemeContext } from 'contexts/ThemeContext'

export const CardTemplate = () => {
	const { theme } = useThemeContext()

	return (
		<CContainer background={theme.card} columns={4} display='grid' height='fit-content' gap={16} rounded={4} rows={2} shadow={true} size='auto'>
			<CContainer className='animate-pulse template-card-image' background={theme.placeholders} rounded={2} height='200px'>

			</CContainer>

			<CContainer className='template-card-body' display='grid' columns={3} gap='16px 0px' rows={2} padding={16} size={'1fr'}>
				<CContainer className='animate-pulse template-card-title' background={theme.placeholders} height='24px' rounded={2}>

				</CContainer>
				<CContainer className='animate-pulse template-card-text' background={theme.placeholders} height='12px' rounded={2}>

				</CContainer>
				<CContainer className='animate-pulse template-card-author' background={theme.placeholders} height='12px' rounded={2}>

				</CContainer>
				<div className={`hidden ${theme.placeholders} animate-pulse rounded-sm h-full col-span-3 row-span-1 row-start-6 tablet:block desktop:block`}>
				</div>
			</CContainer>
		</CContainer>
	)

}
