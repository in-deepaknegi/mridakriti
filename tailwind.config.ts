import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'olive': {
          100: '#fafafa',
          200: '#eaeaea',
          300: '#999',
          400: '#888',
          500: '#666',
          600: '#444',
          700: '#333',
          800: '#222',
          900: '#111',
        },
        'soil': {
          100: '#9b7a42',
          200: '#8c6a39',
          300: '#7d5a31',
          400: '#6e4a28',
          500: '#5f3a20',
          600: '#502a17',
          700: '#411a0f',
          800: '#321a0c',
          900: '#231a0c',
          950: '#140a09',
        }
      },
    },
  },
  plugins: [],
}
export default config
