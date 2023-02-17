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
	inputColor: string
	name: ThemeType
}

export type ThemeType = 'light' | 'dark' 

export const THEMES: Record<ThemeType, Theme> = {
  light: {
    background: Colors.LIGHTGRAY,
		border: Colors.DARKGRAY,
    card: Colors.GRAY,
    color: Colors.DARKGRAY,
		header: Colors.LIGHTGRAYTRANSLUCENT,
		placeholders: Colors.MEDIUMSLATE,
		translucent: Colors.TRANSLUCENT,
		headingSize: TextSizes.HEADING,
		subheadingSize: TextSizes.SUBHEADING,
		bodySize: TextSizes.BODY,
		inputSize: TextSizes.INPUTFIELDS,
		inputColor: Colors.DARKGRAY,
		name: ThemeNames.LIGHT,
  },
  dark: {
    background: Colors.LIGHTBLACK,
		border: Colors.LIGHTGRAY,
    card: Colors.LIGHTERBLACK,
    color: Colors.LIGHTGRAY,
    header: Colors.BLACKTRANSLUCENT,
		placeholders: Colors.DARKGRAY,
		translucent: Colors.TRANSLUCENT,
		headingSize: TextSizes.HEADING,
		subheadingSize: TextSizes.SUBHEADING,
		bodySize: TextSizes.BODY,
		inputSize: TextSizes.INPUTFIELDS,
		inputColor: Colors.DARKGRAY,
		name: ThemeNames.DARK
  },
}