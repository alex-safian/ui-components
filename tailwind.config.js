module.exports = {
  content: ['./src/**/*.tsx', './src/**/*.ts'],
  theme: {
    extend: {
      fontFamily: {
        body: 'Mulish, sans-serif',
        workSans: 'Work Sans, sans-serif'
      },
      colors: {
        primary: {
          black: '#000000',
          white: '#ffffff'
        },
        'black-op': {
          10: 'rgba(0,0,0,0.1)',
          20: 'rgba(0,0,0,0.2)',
          30: 'rgba(0,0,0,0.3)',
          40: 'rgba(0,0,0,0.4)',
          50: 'rgba(0,0,0,0.5)',
          60: 'rgba(0,0,0,0.6)',
          70: 'rgba(0,0,0,0.7)',
          80: 'rgba(0,0,0,0.8)',
          90: 'rgba(0,0,0,0.9)'
        },
        'white-op': {
          10: 'rgba(255, 255, 255, 0.1)',
          20: 'rgba(255, 255, 255, 0.2)',
          30: 'rgba(255, 255, 255, 0.3)',
          40: 'rgba(255, 255, 255, 0.4)',
          50: 'rgba(255, 255, 255, 0.5)',
          60: 'rgba(255, 255, 255, 0.6)',
          70: 'rgba(255, 255, 255, 0.7)',
          80: 'rgba(255, 255, 255, 0.8)',
          90: 'rgba(255, 255, 255, 0.9)'
        },
        fire: '#E94C3D',
        sky: '#20A1FE',
        charcoal: '#9F9F9F',
        ice: {
          50: '#FBFBFB',
          100: '#F2F2F2',
          150: '#EEEEEE'
        },
        white: {
          10: '#FFFFEE',
          20: '#FFEEEE',
          30: '#FFEEFF'
        },
        yellow: {
          10: '#FFFFCC',
          20: '#FFFFDD',
          30: '#FFEECC',
          40: '#FFEEDD'
        },
        orange: {
          10: '#FFDDCC',
          20: '#FFDDDD',
          30: '#FFCCCC',
          40: '#FFCCDD'
        },
        pink: {
          10: '#FFDDEE',
          20: '#FFDDFF',
          30: '#FFCCEE',
          40: '#FFCCFF'
        },
        red: {
          10: '#FFAACC',
          20: '#FFBBCC',
          30: '#FFAADD',
          40: '#FFBBDD'
        },
        fuchsia: {
          10: '#FFAAEE',
          20: '#FFBBEE',
          30: '#FFAAFF',
          40: '#FFBBFF'
        },
        purple: {
          10: '#CCAAFF',
          20: '#CCBBFF',
          30: '#CCAAEE',
          40: '#CCBBEE'
        },
        violet: {
          10: '#CCAADD',
          20: '#CCBBDD',
          30: '#CCAACC',
          40: '#CCBBCC'
        },
        grey: {
          10: '#CCCCCC',
          20: '#CCCCDD',
          30: '#CCDDDD',
          40: '#CCDDCC'
        },
        orchid: {
          10: '#CCDDFF',
          20: '#CCDDEE',
          30: '#CCCCFF',
          40: '#CCCCEE'
        },
        blue: {
          10: '#CCFFFF',
          20: '#CCFFEE',
          30: '#CCEEFF',
          40: '#CCEEEE'
        },
        green: {
          10: '#CCFFDD',
          20: '#CCFFCC',
          30: '#CCEEDD',
          40: '#CCEECC'
        }
      },
      fontSize: {
        '8px': ['8px', '1.2'],
        xs: ['10px', '1.25'],
        s: ['12px', '1.25'],
        sm: ['13px', '1.25'],
        m: ['15px', '1.25'],
        ml: ['16px', '1.25'],
        l: ['18px', '1.25'],
        xl: ['20px', '1.25'],
        '2xl': ['22px', '1.25'],
        '3xl': ['24px', '1.25'],
        '4xl': ['26px', '1.25'],
        '5xl': ['28px', '1.25'],
        '6xl': ['30px', '1.25']
      },
      lineHeight: {
        0: '0'
      },
      boxShadow: {
        xs: '0px 0px 8px rgba(0, 0, 0, 0.2)',
        m: '0px 0px 20px rgba(0, 0, 0, 0.2)',
        'm-10': '0px 0px 20px rgba(0, 0, 0, 0.1)',
        raised: '0px 0px 30px 4px rgba(0, 0, 0, 0.3)',
        'input-selected-style': '0px 0px 5px 2px #CCDDFF',
        'input-error-style': '0px 0px 5px 2px #FFAACC',
        'input-valid-style': '0px 0px 5px 2px #CCFFCC',
        'black-op-10-20px': '0px 0px 20px rgba(0, 0, 0, 0.1)'
      },
      filter: {
        none: 'none',
        'drop-shadow': 'drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25))'
      },
      backdropFilter: {
        'blur-10': 'blur(10px)'
      },
      spacing: {
        '25px': '25px',
        4.5: '1.125rem',
        5.5: '1.375rem',
        7.5: '1.875rem',
        10.5: '2.625rem',
        13: '3.125rem',
        14.5: '3.625rem',
        18: '4.5rem',
        21: '5.25rem',
        68: '18rem',
        76: '20rem'
      },
      borderRadius: {
        '2lg': '0.625rem',
        '2.5xl': '1.25rem',
        '4xl': '1.5rem'
      },
      flex: {
        30: '1 1 30%'
      },
      fill: theme => ({
        ...theme('colors')
      }),
      maxWidth: theme => ({
        ...theme('spacing'),
        screen: '100vw'
      }),
      minWidth: theme => ({
        ...theme('spacing'),
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        screen: '100vw'
      }),
      minHeight: theme => ({
        ...theme('spacing')
      })
    }
  },
  presets: [require('fave-tailwindcss-presets')],
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    margin: ['responsive', 'odd', 'even'],
    padding: ['responsive', 'last'],
    visibility: ['hover', 'focus', 'group-hover']
  },
  plugins: []
}
