/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          default: 'rgba(59, 104, 255, 1)',
          hover: 'rgba(33, 71, 199, 1)',
          pressed: 'rgba(14, 43, 139, 1)',
        },
        cont: {
          default: 'rgba(255,255,255,1)',
          hover: 'rgba(241, 241, 243, 1)',
          pressed: 'rgba(229, 229, 232, 1)',
          dim: 'rgba(249, 249, 251, 1)'
        },
      },
      screens: {
        lg: '968px'
      }
    }
  },
  plugins: []
}
