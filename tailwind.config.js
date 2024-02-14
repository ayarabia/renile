/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    colors: {
        'primary': '#589130',
      },
      backgroundImage: {
        'addNewFarm': "url('src/assets/addNewFarm.svg')",
        'manualSetting': "url('src/assets/deskbackground.svg')",
        'automatedSetting': "url('src/assets/spaceshipbackground.svg')",
        'farm':"url('src/assets/farm.svg')"
      },
      boxShadow: {
        '3xl': '0 2px 12px 0px rgba(63, 71, 56, 0.15)',
        '6xl': '0px 2px 4px 0px rgba(63, 71, 56, 0.15)',
      }
    },
  },
  plugins: [],
}

