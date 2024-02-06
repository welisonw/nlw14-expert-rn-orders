/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/app/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				bold: 'Inter_700Bold',
				heading: 'Inter_600SemiBold',
				subtitle: 'Inter_500Medium',
				body: 'Inter_400Regular',
			},
		},
	},
	plugins: [],
};
