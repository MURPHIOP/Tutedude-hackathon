/** @type {import('tailwindcss').Config} */
module.exports = {
  // Purge/Content configuration for Tailwind CSS v2.x
  // This tells Tailwind which files to scan for class names to include in the final CSS.
  // In v2.x, this was typically 'purge', in v3.x it became 'content'.
  purge: [
    "./public/**/*.html", // Scan HTML files in the public directory
    "./src/**/*.{js,jsx,ts,tsx}", // Scan all JS, JSX, TS, TSX files in src for Tailwind classes
  ],
  darkMode: false, // or 'media' or 'class' - set to false for light mode only as per UI
  theme: {
    extend: {
      // Customizing default Tailwind colors to match BazaarLink's branding
      colors: {
        green: {
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          300: '#86EFAC',
          400: '#4ADE80',
          500: '#22C55E', // Primary green for BazaarLink
          600: '#16A34A',
          700: '#15803D',
          800: '#166534',
          900: '#14532D',
          950: '#0F3D22',
        },
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
          950: '#0B0F19',
        },
      },
      // Customizing default Tailwind font families
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Sets Inter as the default sans-serif font
        // You can add other custom fonts here if needed, e.g., 'heading': ['Montserrat', 'sans-serif'],
      },
      // Customizing default Tailwind spacing scale (optional additions)
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      // Customizing default Tailwind breakpoints (optional, if you need different ones)
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      // Customizing default Tailwind border-radius (optional additions)
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      // Adding custom box shadows (optional)
      boxShadow: {
        'custom-light': '0 4px 12px rgba(0, 0, 0, 0.08)',
        'custom-medium': '0 8px 20px rgba(0, 0, 0, 0.12)',
      },
      // Adding custom animations and keyframes (optional)
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-in-up': 'slideInUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideInUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
    },
  },
  variants: {
    extend: {
      // Extend variants for various utilities if needed for v2.x
      // For example, enable hover for more utilities:
      // backgroundColor: ['active'],
      // textColor: ['active'],
    },
  },
  plugins: [], // Add any Tailwind plugins here (e.g., @tailwindcss/forms)
};