import { useThemeContext } from 'contexts/ThemeContext'

export const Toggle = () => {
	const { theme, themeName, toggleTheme } = useThemeContext()

	return (
		<button
			className={`flex w-16 items-center justify-start rounded-full ${themeName === 'light' ? 'justify-start' : 'justify-end'
				} h-fit border-2 border-solid ${theme.fontColor} ${theme.border} transition-all duration-300 ease-linear`}
			onClick={() => toggleTheme()}
		>
			<span
				className={`material-icons flex items-center justify-center rounded-full p-1`}
			>
				{themeName === 'light' ? 'light_mode' : 'dark_mode'}
			</span>
		</button>
	)
}
