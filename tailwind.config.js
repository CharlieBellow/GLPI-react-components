/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    fontFamily: {
      roboto: ['"Roboto"', "sans-serif"],
    },
    colors: {
      "branco-gelo": "#F7FAFC",
      "fundo-claro": "#333849",
      "cinza-medio": "#DEE2E6",
      "azul-ufal": "#0095DA",
      "cinza-texto": "#797D9A",
      "branco-100": "#FFFFFF",
      'cinza-escuro': '#D9D9D9',
    },
    boxShadow: {
      "sombra-card": "0px 8px 16px rgba(0, 0, 0, 0.16)",
      "sombra-botao": "0px 4px 4px rgba(0, 0, 0, 0.16)",
    },
    extend: {},
  },
  plugins: [],
};
