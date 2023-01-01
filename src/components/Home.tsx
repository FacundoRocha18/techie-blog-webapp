import { NewsSection, PostCard } from 'components'
import { useThemeContext } from 'contexts/ThemeContext'

export const Home = () => {
	const { theme } = useThemeContext()

	return (
		<div className={`${theme.background} ${theme.fontColor}`} id='home-container'>
			<NewsSection />
		</div>
	)
}