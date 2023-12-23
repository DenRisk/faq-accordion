/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        workSans: ['WorkSans', 'sans-serif'],
      },
      colors: {
        primaryPurple: '#AD28EB',
        lightPurple: 'hsl(275, 100%, 97%)',
        grayishPurple: 'hsl(292, 16%, 49%)',
        darkPurple: 'hsl(292, 42%, 14%)',
    
      },
    },
  },
  plugins: [],
}

