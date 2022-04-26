module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        banner: ['BPG Banner Caps', 'sans-serif'],
        counter: ['Anonymous Pro', 'monospace'],
        main: ['BPG Arial', 'arial'],
      },
      colors: {
        background: '#232323',
      },
      spacing: {
        150: '37.5rem',
      },
    },
  },
  plugins: [],
};
