import type { Config } from 'tailwindcss'

const config: Config = {
  theme: {
    extend: {
      fontWeight: {
        '1000': '1000', 
      },
    },
  },
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [],
}
export default config
