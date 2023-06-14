/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'outline-orange': '0 0 0 3px #ff5722',
      },
      colors: {
        'button-primary': '#ff5722',
        'button-primary-hover': '#e64a19',
        'button-secondary': '#4caf50',
        'button-secondary-hover': '#388e3c',
        'button-tertiary': '#2196f3',
        'button-tertiary-hover': '#1976d2',
      },
      spacing: {
        '96': '24rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
};
