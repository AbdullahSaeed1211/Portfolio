/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-in-out',
      },
      backgroundImage: {
        'herobg': "url('/assets/images/herobg.png')", // Replace with the correct file path
      },
      colors: {
        'primary-orange': '#FF5722',
      },
      
    },
  },
  
  plugins: [],
}