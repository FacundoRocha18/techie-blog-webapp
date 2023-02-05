import { StyledButton } from 'components/Atoms/Button'
import { StyledContainer } from 'components/Atoms/Container'
import { IStyledComponent } from 'components/components.types'
import { useThemeContext } from 'contexts/Theme/ThemeContext'
import styled from 'styled-components'
import { ThemeProps } from 'types'

const StyledCardLoader = styled('article') <IStyledComponent>`
	background-color: var(${({ theme }: ThemeProps) => theme.card});
	box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`

export const CardTemplate = () => {
	const { theme } = useThemeContext()

	return (
		<StyledCardLoader theme={theme}>
			<StyledContainer className='animate-pulse template-card-image' theme={theme}>

			</StyledContainer>

			<StyledContainer className='template-card-body'>
				<StyledContainer className='animate-pulse template-card-title' theme={theme}>

				</StyledContainer>
				<StyledContainer className='animate-pulse template-card-text' background={theme.placeholders}>

				</StyledContainer>
				<StyledContainer className='animate-pulse template-card-author' background={theme.placeholders}>

				</StyledContainer>
				<div className={`hidden ${theme.placeholders} animate-pulse rounded-sm h-full col-span-3 row-span-1 row-start-6 tablet:block desktop:block`}>
				</div>
			</StyledContainer>
		</StyledCardLoader>
	)

}
