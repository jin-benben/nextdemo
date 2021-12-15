  // tailwind.config.js
module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
      extend: {
        colors:{
          'ccc':'#ccc',
          '666':'#666',
          '999':'#999',
          '333':'#333',
          'waring':'#FF3838'
        },
        lineHeight:{
          '12':'12px',
          '14':'14px',
          '16':'16px',
          '18':'18px'
        },
        margin:{
          '3': '3px',
          '6': '6px',
          '7': '7px',
          '10':'10px',
          '12':'12px',
          '14':'14px',
          '16':'16px',
          '18':'18px',
          '24':'24px',
          '30':'30px'
        },
        padding:{
          '12':'12px',
          '14':'14px',
          '16':'16px',
          '18':'18px',
          '20':'20px',
          '24':'24px',
          '30':'30px'
        },
        height:{
          '12':'12px',
          '14':'14px',
          '16':'16px',
          '18':'18px'
        },
        gap:{
          '12':'12px',
          '14':'14px'
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
        'base':'14px',
        'md':'16px',
        'lg': '18px',
        'xl': '20px',
      }
    },
    variants: {
    extend: {},
    },
    plugins: [
      require('@tailwindcss/line-clamp'),
    ],
}