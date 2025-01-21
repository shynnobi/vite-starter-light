/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontSize: {
        // Headings
        h1: [
          '4.5rem',
          {
            // 72px
            lineHeight: '1.1',
            fontWeight: '800',
            fontFamily: 'font-sans',
          },
        ],
        h2: [
          '3.75rem',
          {
            // 60px
            lineHeight: '1.1',
            fontWeight: '700',
            fontFamily: 'font-heading',
          },
        ],
        h3: [
          '3rem',
          {
            // 48px
            lineHeight: '1.2',
            fontWeight: '700',
            fontFamily: 'font-heading',
          },
        ],
        h4: [
          '2.25rem',
          {
            // 36px
            lineHeight: '1.2',
            fontWeight: '600',
            fontFamily: 'font-heading',
          },
        ],
        h5: [
          '1.875rem',
          {
            // 30px
            lineHeight: '1.3',
            fontWeight: '600',
            fontFamily: 'font-heading',
          },
        ],
        h6: [
          '1.5rem',
          {
            // 24px
            lineHeight: '1.3',
            fontWeight: '600',
            fontFamily: 'font-heading',
          },
        ],
      },
      fontFamily: {
        sans: ['Newsreader', 'system-ui', '-apple-system', 'serif'],
        heading: ['Funnel Sans', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
