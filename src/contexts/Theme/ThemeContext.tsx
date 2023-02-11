import React, { useState } from 'react'
import { createContextCustom, useLocalStorage } from 'hooks'
import { IThemeContext, ChildrenProps } from 'types'
import { THEMES, ThemeType } from './Themes.declaration'

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

	const changeTheme = (newTheme: ThemeType): void => setCurrentTheme(newTheme)

  const providerValue: IThemeContext = {
    theme: THEMES[currentTheme],
    themeName: currentTheme,
    toggleTheme,
		changeTheme
  }

  return <ContextProvider value={providerValue}>{children}</ContextProvider>
}
