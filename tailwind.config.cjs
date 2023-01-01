/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			width: {
				'10%': '10%',
				'20%': '20%',
				'30%': '30%',
				'40%': '40%',
				'50%': '50%',
				'60%': '60%',
				'70%': '70%',
				'80%': '80%',
				'90%': '90%',
				'100%': '100%',
			},
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