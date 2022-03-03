module.exports = {
  purge: ["index.html", "./src/**/*.jsx"],
  darkMode: "media",
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeDown: {
          "0%": { transform: "translateyY(0%)", opacity: 0 },
          "10%": { transform: "translateY(-50px)", opacity: 0 },

          "100%": { transform: "translateY(0px)", opacity: 1 },
        },
        fadeUp: {
          "0%": { transform: "translateyY(0%)", opacity: 0 },
          "10%": { transform: "translateY(50px)", opacity: 0 },

          "100%": { transform: "translateY(0px)", opacity: 1 },
        },
      },
      animation: {
        "spin-slow": "spin 3s linear",
        "spin-fast": "spin 1s linear",
        fadeIn: "fadeIn 1s linear",
        fadeInfinito: "fadeIn 1s linear infinite alternate",
        fadeDown: "fadeDown 1s linear",
        fadeUp: "fadeUp 1s linear",
      },
      fontFamily: {
        Bebas: "'Bebas Neue', cursive;",
        Roboto: "'Roboto', sans-serif",

      },
      colors: {
        VerdeCatuchi: '#00a88B',
        Fondo2: '#181a20',
        Fondo3: '#07090e',

      },
      screens: {
        'sm': '360px',
        'md': '600px',

      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};


//        Fondo1: '#1e1d32',
// Fondo2: '#292845',
// Fondo3: '#181728',
