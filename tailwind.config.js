/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#4B6BFB',
        'secondary/100': '#E8E8EA',
        'secondary/400': '#97989F',
        'secondary/800': "#181A2A",
        'badge': 'rgba(75, 107, 251, 0.05)',
        'overlay': 'linear-gradient(0deg, rgba(20, 22, 36, 0.40) 0%, rgba(20, 22, 36, 0.40) 100%)'
      },
      borderWidth: {
        '1': '1px'
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
}