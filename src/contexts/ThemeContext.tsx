import React, { useState } from 'react'
import { createContextCustom } from 'hooks'
import { Theme, ThemeType, IThemeContext, ChildrenProps} from 'types'

enum BackgroundColors {
  LIGHTGREY = 'bg-gray-100',
  GREY = 'bg-gray-300',
  DARKGREY = 'bg-gray-800',
	DARKERGREY = 'bg-gray-900'
}

enum TextColors {
  LIGHTGREY = 'text-gray-100',
  DARKGREY = 'text-gray-900',
}

const THEMES: Record<ThemeType, Theme> = {
  light: {
    background: BackgroundColors.LIGHTGREY,
		card: BackgroundColors.GREY,
    fontColor: TextColors.DARKGREY,
  },
  dark: {
    background: BackgroundColors.DARKGREY,
		card: BackgroundColors.DARKERGREY,
    fontColor: TextColors.LIGHTGREY,
  },
}

export const [useThemeContext, ContextProvider] = createContextCustom<IThemeContext>()

export const ThemeProvider = ({ children }: ChildrenProps) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>('light')

  const toggleTheme = () => setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light')

  const providerValue: IThemeContext = {
    theme: THEMES[currentTheme],
    themeName: currentTheme,
    toggleTheme,
  }

  return <ContextProvider value={providerValue}>{children}</ContextProvider>
}
