/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#05070F',
          card: '#0c1021',
          cardHover: '#131936',
          border: '#1f2a4d',
          neonCyan: '#00f2fe',
          neonPurple: '#9d4edd',
          neonBlue: '#4facfe',
          neonEmerald: '#00f5a0',
          neonPink: '#ff007f',
          textMuted: '#94a3b8',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 15s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'neural-glow': 'neuralGlow 4s ease-in-out infinite alternate',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        neuralGlow: {
          '0%': { filter: 'drop-shadow(0 0 10px rgba(0, 242, 254, 0.4))' },
          '100%': { filter: 'drop-shadow(0 0 25px rgba(157, 78, 221, 0.6))' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'neural-mesh': 'radial-gradient(circle at 50% 50%, rgba(15, 23, 42, 0.8) 0%, rgba(5, 7, 15, 1) 100%)',
      }
    },
  },
  plugins: [],
}
