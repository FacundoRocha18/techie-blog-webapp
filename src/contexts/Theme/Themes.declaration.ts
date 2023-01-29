import { Colors, TextSizes, ThemeNames } from "./Variables"

export interface Theme {
  background: string
	border: string
  color: string
  card: string
	header: string
	headingSize: string
	subheadingSize: string
	bodySize: string
	inputSize: string
	placeholders: string
	translucent: string
	name: ThemeType
}

export type ThemeType = 'light' | 'dark' 

export const THEMES: Record<ThemeType, Theme> = {
  light: {
    background: Colors.LIGHTGRAY,
		border: Colors.DARKGRAY,
    card: Colors.LIGHTGRAY,
    color: Colors.DARKGRAY,
		header: Colors.LIGHTGRAYTRANSLUCENT,
		placeholders: Colors.MEDIUMSLATE,
		translucent: Colors.TRANSLUCENT,
		headingSize: TextSizes.HEADING,
		subheadingSize: TextSizes.SUBHEADING,
		bodySize: TextSizes.BODY,
		inputSize: TextSizes.INPUTFIELDS,
		name: ThemeNames.LIGHT,
  },
  dark: {
    background: Colors.BLACK,
		border: Colors.LIGHTGRAY,
    card: Colors.DARKZINC,
    color: Colors.LIGHTGRAY,
    header: Colors.DARKERZINCTRANSLUCENT,
		placeholders: Colors.DARKGRAY,
		translucent: Colors.TRANSLUCENT,
		headingSize: TextSizes.HEADING,
		subheadingSize: TextSizes.SUBHEADING,
		bodySize: TextSizes.BODY,
		inputSize: TextSizes.INPUTFIELDS,
		name: ThemeNames.DARK
  },
}