/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			willChange: {
				'filter': 'filter'
			},
			fontFamily: {
				'poppins': 'poppins'
			},
			fontSize: {
				'title': '52px',
				'subtitle': '48px',
				'smTitle': '32px',
				'smSubtitle': '24px',
			},
		},
		screens: {
			'sm': '640px',

			'tablet': '768px',

			'desktop': '1080px',

			'desktopXl': '1440px',

			'desktop2xl': '1536px',
		}
	},
	plugins: [],
	darkMode: 'class',
}