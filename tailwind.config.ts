/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx,html}',
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 5s linear infinite',
        'bounce-slow': 'bounce 7s infinite',
        'pulse-slow': 'pulse 10s infinite',
        'wiggle-slow': 'wiggle 1s infinite'
      },
    },
    keyframes: {
      spin: {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' },
      },
    },
    screens: {
      'sm': {'min': '100px', 'max': '459px'},
      'md': {'min': '460px', 'max': '768px'},
      'lg': {'min': '769px', 'max': '1042px'},
      'xl': {'min': '1043px', 'max': '1400px'},
      '2xl': {'min': '1401px'},
    },
  },
  darkMode: 'class',
  plugins: [
    require('@tailwindcss'),
  ],
};
