/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.tsx"],
	theme: {
		screens: {
			sm: "576px",
			// => @media (min-width: 576px) { mobile }

			md: "960px",
			// => @media (min-width: 960px) { Tablet }
			
			ds: "1024",
			// => @media (min-width: 1024px) { desktops pequenos }


			lg: "1440px",
			// => @media (min-width: 1440px) { monitores e TVs }
		},

		extend: {
			fontFamily: {
				sans: ['"Roboto"', "sans-serif"],
			},

			fontSize: {
				base: ["16px", "24px"],
				xl: ["20px", "32px"],
				// esses tamanhos de fonte não estão funcionando
				"3xl": ["32px", "52px"],
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
};
