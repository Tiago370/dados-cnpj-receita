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
          1: '#203D54',
          2: '#1A4971',
          3: '#2368A2',
          4: '#3183C8',
          5: '#63A2D8',
          6: '#AAD4F5',
          7: '#EFF8FF',
        },
        neutral: {
          1: '#212934',
          2: '#5F6B7A',
          3: '#8895A7',
          4: '#B8C4CE',
          5: '#CFD6DE',
          6: '#E1E7EC',
          7: '#F8F9FA',
        },
        success: '#10B981',  // Verde
        warning: '#F59E0B',  // Amarelo
        error: '#EF4444',    // Vermelho
      },
    },
  },
  plugins: [],
}

