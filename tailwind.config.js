module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  // ✅ ← ここを追加（動的クラスをビルドで削除されないようにする）
  safelist: [
    'animate-fade-in',
    'animate-fadeOut',
    'animate-logoFade',
    'animate-fadeUp',
    'gradient-border',
    'image-fade',
    'visible',
  ],

  theme: {
    extend: {
      colors: {
        'lavender': '#E6E6FA',
        'light-blue': '#B0E0E6',
      },
      animation: {
        'gradientAnimation': 'gradientAnimation 18s ease-in-out infinite',
        'AnimationTitle': 'AnimationTitle 5s ease infinite',
        'fade-in': 'fadeIn 2.5s ease-out forwards', 
        'fadeOut': 'fadeOut 1.5s forwards',
        'logoFade': 'logoFade 2s 0.5s forwards',
        'fadeUp': 'fadeUp 1s ease-out forwards',
        'shimmer': 'shimmer 4s linear infinite',
      },
      keyframes: {
        gradientAnimation: {
          '0%': { backgroundPosition: '0% 0%' },
          '45%': { backgroundPosition: '100% 100%' },
          '55%': { backgroundPosition: '100% 100%' },
          '100%': { backgroundPosition: '0% 0%' },
        },
        AnimationTitle: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0', visibility: 'hidden' },
        },
        logoFade: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '60%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(100px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { 'background-position': '-700px 0' },
          '100%': { 'background-position': '700px 0' },
        },
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
    function({ addUtilities }) {
      const newUtilities = {
        '.gradient-border': {
          position: 'relative',
          isolation: 'isolate',
          '&::after': {
            content: '""',
            position: 'absolute',
            inset: '0',
            borderRadius: 'inherit',
            padding: '2px',
            background: 'linear-gradient(90deg, #4ADE80 0%, #3B82F6 50%, #EF4444 100%)',
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            '-webkit-mask': 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            '-webkit-mask-composite': 'xor',
            'mask-composite': 'exclude',
            'z-index': '-1',
          },
        },
        '.image-fade': {
          'opacity': '0',
          'transition': 'opacity 1s ease-out',
        },
        '.image-fade.visible': {
          'opacity': '1 !important',
        },
      }
      addUtilities(newUtilities)
    }
  ],
};
