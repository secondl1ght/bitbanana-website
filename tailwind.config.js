/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,ts,svelte}'],
	theme: {
		fontSize: {
			xs: ['12px', '16px'],
			sm: ['14px', '20px'],
			base: ['16px', '24px'],
			lg: ['18px', '28px'],
			xl: ['20px', '28px'],
			'2xl': ['24px', '32px'],
			'3xl': ['30px', '36px'],
			'4xl': ['36px', '40px'],
			'5xl': ['48px', '1'],
			'6xl': ['60px', '1'],
			'7xl': ['72px', '1'],
			'8xl': ['96px', '1'],
			'9xl': ['128px', '1']
		},
		extend: {
			colors: {
				primary: '#232533',
				link: '#FDBE00',
				hover: '#FFCC33',
				body: '#FFFDF8',
				neutral: '#161314',
				gradient: '#221E1F',
				grey: '#979797'
			}
		}
	},
	plugins: []
};
