export interface ICToggle {
	background: string
	border: string
	theme: string
}

export interface ICContainer {
	align?: string
	background?: string
	border?: string
	columns?: number
	display?: string
	direction?: string
	gap?: number | string
	height?: number | string
	justify?: string
	padding?: number
	rounded?: number
	rows?: number
	shadow?: boolean
	size?: string 
	width?: number | string
}

export interface ICTitle {
	alignTo: string
	background?: string
	fontSize: number
	fontWeight: number
}

export interface ICSection {
	gap?: string
}