import React, { useState } from 'react'
import { createContextCustom, useLocalStorage } from 'hooks'
import { Theme, ThemeType, IThemeContext, ChildrenProps } from 'types'

enum BackgroundColors {
	BLACK = '--bg-black',
	BLACKTRANSLUCENT = '--black-translucent',
  LIGHTGRAY = '--bg-gray-100',
  LIGHTGRAYTRANSLUCENT = '--bg-gray-translucent',
  GRAY = '--bg-gray-300',
	DARKGRAY = '--bg-gray-900',
  DARKZINC = '--bg-zinc-700',
  DARKERZINC = '--bg-zinc-800',
  DARKERZINCTRANSLUCENT = '--zinc-800-translucid',
	MEDIUMSLATE = '--bg-slate-400',
	TRANSLUCENT = '--bg-translucent'
}

enum TextColors {
  LIGHTGREY = '--text-gray-100',
  DARKGREY = '--text-gray-900',
}

enum BorderColors {
  LIGHTGREY = '--border-gray-100',
  DARKGREY = '--border-gray-900',
}

enum ThemeNames {
	LIGHT = 'light',
	DARK = 'dark',
}

const THEMES: Record<ThemeType, Theme> = {
  light: {
    background: BackgroundColors.LIGHTGRAY,
		border: BorderColors.DARKGREY,
    card: BackgroundColors.LIGHTGRAY,
    color: TextColors.DARKGREY,
		header: BackgroundColors.LIGHTGRAYTRANSLUCENT,
		placeholders: BackgroundColors.MEDIUMSLATE,
		translucent: BackgroundColors.TRANSLUCENT,
		name: ThemeNames.LIGHT,
  },
  dark: {
    background: BackgroundColors.BLACK,
		border: BorderColors.LIGHTGREY,
    card: BackgroundColors.DARKZINC,
    color: TextColors.LIGHTGREY,
    header: BackgroundColors.DARKERZINCTRANSLUCENT,
		placeholders: BackgroundColors.DARKGRAY,
		translucent: BackgroundColors.TRANSLUCENT,
		name: ThemeNames.DARK
  },
}

export const [useThemeContext, ContextProvider] = createContextCustom<IThemeContext>()

const [setItem, getItem] = useLocalStorage()

const getSavedTheme = (): ThemeType => {
  const defaultTheme: ThemeType = 'light'
  const savedThemeName: ThemeType | null = getItem<ThemeType>('theme')

  if (savedThemeName === null) {
    return defaultTheme
  }

  return savedThemeName
}

export const ThemeProvider = ({ children }: ChildrenProps) => {
  const savedTheme = getSavedTheme()

  const [currentTheme, setCurrentTheme] = useState<ThemeType>(savedTheme)

  setItem('theme', currentTheme)

  const toggleTheme = () => setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light')

  const providerValue: IThemeContext = {
    theme: THEMES[currentTheme],
    themeName: currentTheme,
    toggleTheme,
  }

  return <ContextProvider value={providerValue}>{children}</ContextProvider>
}
