/** @type {import('tailwindcss').Config} */

module.exports = {
	darkMode: 'class',
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			animation: {
				text: 'text 5s ease infinite',
			},
			keyframes: {
				text: {
					'0%, 100%': {
						'background-size': '200% 200%',
						'background-position': 'left center',
					},
					'50%': {
						'background-size': '200% 200%',
						'background-position': 'right center',
					},
				},
			},
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
				space_mono: ['Space Mono', 'monospace'],
				urbanist: ['Urbanist', 'sans-serif'],
				archivo: ['Archivo', 'sans-serif'],
			},
			colors: {
				seafoam: '#C9EEBE',
				champange: '#F7EDE3',
			},
			borderRadius: {
				'4xl': '2.5rem',
			},
		},
		plugins: [require('@tailwindcss/line-clamp', '@tailwindcss/forms')],
	},
}
