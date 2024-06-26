/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
     '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: '0px -1px 27px 5px inset #000',
      top: '-1px -26px 15px -32px  #ffffff',
      none: 'none',
    },
    extend: {
      keyframes: {
        'slide': {
          '0%': { transform: 'translate(-400px)'},
          '100%': { transform: 'translate(0px)'},
        },
        'slide-back': {
          '0%': { transform: 'translate(300px)'},
          '100%': { transform: 'translate(0px)'},
        }
      },
      animation: {
        offCanvas: 'slide 1s',
        slideBack: 'slide-back 1s'
      }
    },
  },
  plugins: [],
}