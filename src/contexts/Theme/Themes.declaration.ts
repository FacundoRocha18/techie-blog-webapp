export enum Colors {
  LIGHTERBLACK = '--lighter-black',
  LIGHTBLACK = '--light-black',
  BLACK = '--black',
  BLACKTRANSLUCENT = '--black-translucent',
  WHITE = '--white',
  LIGHTGRAYTRANSLUCENT = '--gray-translucent',
	LIGHTGRAY = '--light-gray',
  GRAY = '--gray-300',
  DARKGRAY = '--gray-900',
  DARKZINC = '--zinc-700',
  DARKERZINC = '--zinc-800',
  MEDIUMSLATE = '--slate-400',
  TRANSLUCENT = '--translucent',
  PRIMARYACCENT = '--primary-accent',
  INPUTCOLOR = '--',
}

export enum TextSizes {
  HEADING = '--heading-text',
  SUBHEADING = '--subheading-text',
  BODY = '--body-text',
  INPUTFIELDS = '--body-text',
}

export enum ThemeNames {
  LIGHT = 'light',
  DARK = 'dark',
}

export interface Theme {
  accent: string
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
    accent: Colors.PRIMARYACCENT,
    background: Colors.WHITE,
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
    accent: Colors.PRIMARYACCENT,
    background: Colors.LIGHTBLACK,
    border: Colors.LIGHTGRAY,
    card: Colors.LIGHTERBLACK,
    color: Colors.WHITE,
    header: Colors.BLACKTRANSLUCENT,
    placeholders: Colors.DARKGRAY,
    translucent: Colors.TRANSLUCENT,
    headingSize: TextSizes.HEADING,
    subheadingSize: TextSizes.SUBHEADING,
    bodySize: TextSizes.BODY,
    inputSize: TextSizes.INPUTFIELDS,
    inputColor: Colors.DARKGRAY,
    name: ThemeNames.DARK,
  },
}
