  // tailwind.config.js
module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
      extend: {
        lineHeight:{
          '12':'12px',
          '14':'14px',
          '16':'16px',
          '18':'18px'
        },
        margin:{
          '12':'12px',
          '14':'14px',
          '16':'16px',
          '18':'18px',
          '24':'24px'
        }
      },
      borderRadius:{
        'none': '0',
        'sm': '2px',
         DEFAULT: '4px',
        'md': '8px',
      },
      fontSize:{
        'sm':'12px',
        'base':'14px'
      }
    },
    variants: {
    extend: {},
    },
    plugins: [
      require('@tailwindcss/line-clamp'),
    ],
}