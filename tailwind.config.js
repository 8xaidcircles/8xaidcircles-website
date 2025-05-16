module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'lavender': '#E6E6FA',
        'light-blue': '#B0E0E6',
      },
      animation: {
        'gradient': 'gradient 18s ease-in-out infinite',
        'gradient-text': 'gradient-text 5s ease infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 0%' },
          '45%': { backgroundPosition: '100% 100%' },
          '55%': { backgroundPosition: '100% 100%' },
        },
        'gradient-text': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'gradient-text': {
          '0%, 100%': {
            backgroundPosition: '0% 50%',
            },
            '50%': {
              backgroundPosition: '100% 50%',
            },
          },
        },
        animation: {
          'gradient-text': 'gradient-text 5s ease infinite',
        },
        backgroundSize: {
          '200': '200% 200%',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        sans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
  ],
};
