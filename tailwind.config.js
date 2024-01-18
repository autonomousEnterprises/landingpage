/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./node_modules/flowbite.{js,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#843bd7',
      },
      fontFamily: {
        primary: ['Inter'],
      },
      animation: {
        'text-slide': 'text-slide 5.5s cubic-bezier(0.93, 0, 0.17, 1) infinite',
      },
      keyframes: {
        'text-slide': {
            '0%, 16%': {
              transform: 'translateY(0%)',
            },
            '20%, 36%': {
              transform: 'translateY(-16.66%)',
            },
            '40%, 56%': {
              transform: 'translateY(-33.33%)',
            },
            '60%, 76%': {
              transform: 'translateY(-50%)',
            },
            '80%, 96%': {
              transform: 'translateY(-66.66%)',
            },
            '100%': {
              transform: 'translateY(-83.33%)',
            },
          },
        },
      },
    },
  daisyui: {
    // base: false,
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
    ],

  },
  plugins: [
    '@tailwindcss/forms',
    '@tailwindcss/container-queries',
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
};
