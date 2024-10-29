/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			rotate: ['hover'],
			animation: {
				modalAppear: "modalAppear 0.3s ease-out forwards",
			},
			keyframes: {
				modalAppear: {
				  "0%": { opacity: 0, transform: "scale(0.5)" },
				  "100%": { opacity: 1, transform: "scale(1)" },
				},
			  },
		},
		fontFamily: {
			sans: ['sans', 'Mulish'],
			serif: ['serif', 'Vollkorn'],
		},
	},
	plugins: [require('tailwind-scrollbar')],
	corePlugins: {
		preflight: false,
	},
};
