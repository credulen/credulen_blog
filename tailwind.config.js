/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},

			colors: {
				primary: "#29506B",
				"primary-dark": "#2c785c",
				"primary-light": "#EFF0F0",
				secondary: "#36237D",
				"secondary-green": "#64BA84",
			},

			fontFamily: {
				sans: ["Roboto", "sans-serif"],
			},
		},
	},
	plugins: [],
};
