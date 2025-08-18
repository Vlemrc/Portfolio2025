/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
  			bgPrimary: 'var(--primary-bg)',
  		},
      fontFamily: {
        digital: ['DigitalSans', 'sans-serif'],
        'digital-light': ['DigitalSans', 'sans-serif'],
        arges: ['Arges', 'sans-serif'],
      },
    },
  },
  plugins: [],
}