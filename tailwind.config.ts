import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx}',
    './data/**/*.{js,ts,jsx,tsx}',
    './utils/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 22px 48px -34px rgba(19, 21, 27, 0.42)',
        lift: '0 26px 60px -38px rgba(200, 93, 31, 0.45)',
      },
      borderRadius: {
        '2xl': '1.25rem',
      },
      maxWidth: {
        content: '76rem',
      },
    },
  },
  plugins: [],
}

export default config
