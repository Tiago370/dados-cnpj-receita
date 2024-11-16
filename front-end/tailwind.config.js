/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#3B82F6',  // Azul claro
          DEFAULT: '#1E3A8A', // Azul escuro
          dark: '#1E40AF',
        },
        secondary: {
          light: '#F3F4F6', // Cinza claro
          DEFAULT: '#6B7280', // Cinza médio
          dark: '#374151',   // Cinza escuro
        },
        success: '#10B981',  // Verde
        warning: '#F59E0B',  // Amarelo
        error: '#EF4444',    // Vermelho
      },
    },
  },
  plugins: [],
}

