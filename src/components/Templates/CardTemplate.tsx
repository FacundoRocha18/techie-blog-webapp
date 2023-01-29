import { StyledButton } from 'components/Atoms/Button'
import { StyledContainer } from 'components/Atoms/Container'
import { useThemeContext } from 'contexts/Theme/ThemeContext'

export const CardTemplate = () => {
	const { theme } = useThemeContext()

	return (
		<StyledContainer background={theme.card} columns={4} display='grid' height='fit-content' gap={16} rounded={4} rows={2} shadow={true} size='auto'>
			<StyledContainer className='animate-pulse template-card-image' background={theme.placeholders} rounded={2} height='200px'>

			</StyledContainer>

			<StyledContainer className='template-card-body' display='grid' columns={3} gap='16px 0px' rows={2} padding={16} size={'1fr'}>
				<StyledContainer className='animate-pulse template-card-title' background={theme.placeholders} height='24px' rounded={2}>

				</StyledContainer>
				<StyledContainer className='animate-pulse template-card-text' background={theme.placeholders} height='12px' rounded={2}>

				</StyledContainer>
				<StyledContainer className='animate-pulse template-card-author' background={theme.placeholders} height='12px' rounded={2}>

				</StyledContainer>
				<div className={`hidden ${theme.placeholders} animate-pulse rounded-sm h-full col-span-3 row-span-1 row-start-6 tablet:block desktop:block`}>
				</div>
			</StyledContainer>
		</StyledContainer>
	)

}
