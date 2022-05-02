module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      spacing: {
        130: '32.5rem',
        150: '37.5rem',
        375: '93.75rem',
      },
      maxWidth: {
        xxs: '12rem',
        s: '32.5rem',
      },
      minHeight: {
        '4/5': '80%',
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
