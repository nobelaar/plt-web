/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        spaceGrotesk: ['var(--font-space-grotesk)', 'sans-serif']
      },
      colors: {
        background: '#0a1b2e',
        foreground: '#b5b8c0',
        accent: '#00d4ff'
      }
    }
  },
  plugins: []
};
