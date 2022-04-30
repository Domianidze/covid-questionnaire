module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      spacing: {
        130: '32.5rem',
        150: '37.5rem',
      },
      maxWidth: {
        xxs: '12rem',
      },
      fontFamily: {
        banner: ['BPG Banner Caps', 'sans-serif'],
        counter: ['Anonymous Pro', 'monospace'],
        main: ['BPG Arial', 'arial'],
      },
      colors: {
        background: '#232323',
      },
    },
  },
  plugins: [],
};
