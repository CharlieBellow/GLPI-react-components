/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
		screens: {
			sm: "576px",
			// => @media (min-width: 576px) { mobile }

			md: "960px",
			// => @media (min-width: 960px) { Tablet }
			
			lg: "1024px",

			// => @media (min-width: 1024px) { desktops pequenos }
			
			
			tv: "1440px",
			// => @media (min-width: 1440px) { monitores e TVs }
		},

		extend: {
			spacing: {
				'13': '3.25rem',
				'15': '3.75rem',
				'18': '4.5rem',
				'22': '5.5rem',
				'25': '6.25rem',
				'26': '6.5rem',
				'31': '7.75rem',
				'53': '13.25rem',
				'57': '14.25rem',
				'68': '17rem',
				'100': '25rem',
				'103': '25.75rem',
				'118': '29.5rem',
				'128': '32rem',
				'202': '50.5rem',
			},

			maxWidth: {
				'13xl': '128rem',
				card: '50.5rem',
			},

			fontFamily: {
				sans: 'Roboto, sans-serif'
			},

			fontSize: {
				base: ["16px", "24px"],
				xl: ["20px", "32px"],
				"3xl": "26px",
				"4xl": ["32px", "52px"],
			},

			colors: {
				bg: "#212532",
				"light-bg": "#333849",
				"red-ufal": "#ED1C24",

				white: {
					100: "#FFFFFF",
					ice: "#F7FAFC",
					'strong-ice': "#EDF2F7",
				},

				blue: {
					ufal: "#0095DA",
					"ufal-hover": "#33AAE1",
					"final-gradient": "#4FB4E4",
					"dark-final-gradient": "#0B70A2",
				},

				gray: {
					text: "#797D9A",
					medium: "#DEE2E6",
					dark: "#D9D9D9",
				},
			},

			backgroundImage: {
				gradient:
					"linear-gradient(90.18deg, rgba(1, 149, 218, 0.67) 16.29%, #0195DA 37.58%, #1B4BA8 99.89%)",
				"ufalBackground":
					"url('/src/assets/ufal-sigla-branca-fundo-transparente-40por-cento.png')",
			},

			boxShadow: {
				card: "0px 8px 16px rgba(0, 0, 0, 0.16)",
				button: "0px 4px 4px rgba(0, 0, 0, 0.16)",
				tab: "0 3px 0 0 #DEE2E6",
			},
		},
	},
	plugins: [],
}
