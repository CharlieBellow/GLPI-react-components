/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.tsx"],
	theme: {
		extend: {
			colors: {
				"branco-gelo": "#F7FAFC",
				"fundo-claro": "#333849",
				"cinza-medio": "#DEE2E6",
				"azul-ufal": "#0095DA",
				"cinza-texto": "#797D9A",
				"branco-100": "#FFFFFF",
				"cinza-escuro": "#D9D9D9",
				"branco-gelo-forte": "#EDF2F7",
				"azul-final-gradiente": "#4FB4E4",
				"azul-fundo-gradiente-dark": "#0B70A2",
				"vermelho-ufal": "#ED1C24",
				fundo: "#212532",
			},

			backgroundImage: {
				gradiente:
					"linear-gradient(90.18deg, rgba(1, 149, 218, 0.67) 16.29%, #0195DA 37.58%, #1B4BA8 99.89%)",
				'backgroundUfal':
					"url('/src/assets/ufal-sigla-branca-fundo-transparente-40por-cento.png') center 0 no-repeat fixed)",
			},

			boxShadow: {
				"sombra-card": "0px 8px 16px rgba(0, 0, 0, 0.16)",
				"sombra-botao": "0px 4px 4px rgba(0, 0, 0, 0.16)",
			},
		},
	},
	plugins: [],
};
