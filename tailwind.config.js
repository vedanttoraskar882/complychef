/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          charcoal: '#14191C',
          'charcoal-deep': '#0F1315',
          'charcoal-soft': '#1B2226',
          'charcoal-card': '#1E252A',
          'charcoal-border': 'rgba(255, 255, 255, 0.09)',
          ivory: '#FAF7EE',
          'ivory-light': '#FFFDF8',
          'ivory-alt': '#F3ECE0',
          yellow: '#FFCC32',
          'yellow-deep': '#F0B700',
          'yellow-pale': '#FFF6D9',
          'yellow-light': '#FEF9E6',
          green: '#16803D',
          'green-light': '#ECFDF3',
          'green-badge': '#DCFCE7',
          red: '#DC2626',
          'red-light': '#FEF2F2',
          'red-badge': '#FEE2E2',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Manrope', 'Inter', 'sans-serif'],
        mono: ['IBM Plex Mono', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      boxShadow: {
        'soft-sm': '0 2px 8px -2px rgba(20, 25, 28, 0.05)',
        'soft': '0 8px 30px -8px rgba(20, 25, 28, 0.08)',
        'soft-lg': '0 20px 45px -12px rgba(20, 25, 28, 0.12)',
        'card-dark': '0 20px 40px -15px rgba(0, 0, 0, 0.5)',
        'glow-yellow': '0 0 30px -5px rgba(255, 204, 50, 0.25)',
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      }
    },
  },
  plugins: [],
}
