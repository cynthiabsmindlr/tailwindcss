module.exports = function() {
  return {
    colors: {
      transparent: 'transparent',

      black: '#000',
      white: '#fff',

      teal: {
        100: '#ebfffc',
        200: '#b3f1e9',
        300: '#82e1d7',
        400: '#60cfc5',
        500: '#49bab2',
        600: '#3ea39f',
        700: '#378786',
        800: '#316769',
        900: '#265152',
      },
      red: {
        100: '#fff5f5',
        200: '#fee3e3',
        300: '#febcbc',
        400: '#fd9292',
        500: '#f95e5f',
        600: '#ec454e',
        700: '#dc3448',
        800: '#b4203b',
        900: '#801b33',
      },
      orange: {
        100: '#fffaef',
        200: '#fee8c1',
        300: '#fbd087',
        400: '#f6aa4f',
        500: '#ec832b',
        600: '#df6d22',
        700: '#c55822',
        800: '#9f4423',
        900: '#70311e',
      },
      yellow: {
        100: '#ffffeb',
        200: '#fefcbf',
        300: '#fbf189',
        400: '#f6e05e',
        500: '#ebc743',
        600: '#d69e2e',
        700: '#b7791f',
        800: '#8d5415',
        900: '#66390e',
      },
      green: {
        100: '#e9ffe9',
        200: '#c1f5c5',
        300: '#9ae6a8',
        400: '#68d391',
        500: '#48bb87',
        600: '#38a181',
        700: '#2f8572',
        800: '#28695c',
        900: '#22544b',
      },
      blue: {
        100: '#f1fafd',
        200: '#caedfa',
        300: '#87d3f3',
        400: '#57b9ec',
        500: '#3a9adf',
        600: '#2b7cc4',
        700: '#2762a3',
        800: '#284f81',
        900: '#294468',
      },
      indigo: {
        100: '#eef6ff',
        200: '#cbe0f9',
        300: '#a6c5f0',
        400: '#82a2e3',
        500: '#6d80d3',
        600: '#5e68bc',
        700: '#5154a1',
        800: '#42417f',
        900: '#37366a',
      },
      purple: {
        100: '#faf5ff',
        200: '#eddffd',
        300: '#dcc7fb',
        400: '#b18af4',
        500: '#976de9',
        600: '#7c54d5',
        700: '#6845b9',
        800: '#4d368a',
        900: '#3b2c6c',
      },
      pink: {
        100: '#fff2f4',
        200: '#fedee4',
        300: '#fcbccb',
        400: '#f786a7',
        500: '#ed588b',
        600: '#d9447b',
        700: '#b32f62',
        800: '#8d2450',
        900: '#741c46',
      },
      gray: {
        100: '#f8fcfe',
        200: '#f1f5fb',
        300: '#e2e9f0',
        400: '#bbc5cf',
        500: '#a3b0bd',
        600: '#7a8996',
        700: '#5a6977',
        800: '#2e3a45',
        900: '#1f2830',
      },
    },
    spacing: {
      px: '1px',
      '0': '0',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
      '32': '8rem',
      '40': '10rem',
      '48': '12rem',
      '56': '14rem',
      '64': '16rem',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      sans: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: [
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    fontWeight: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    lineHeight: {
      none: 1,
      tight: 1.25,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.625,
      loose: 2,
    },
    letterSpacing: {
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
    },
    textColor: theme => theme.colors,
    backgroundColor: theme => theme.colors,
    backgroundPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
    },
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
    },
    borderWidth: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '4': '4px',
      '8': '8px',
    },
    borderColor: theme => {
      return global.Object.assign({ default: theme.colors.gray[700] }, theme.colors)
    },
    borderRadius: {
      none: '0',
      sm: '.125rem',
      default: '.25rem',
      lg: '.5rem',
      full: '9999px',
    },
    cursor: {
      auto: 'auto',
      default: 'default',
      pointer: 'pointer',
      wait: 'wait',
      move: 'move',
      'not-allowed': 'not-allowed',
    },
    width: theme => ({
      auto: 'auto',
      ...theme.spacing,
      '1/2': '50%',
      '1/3': '33.33333%',
      '2/3': '66.66667%',
      '1/4': '25%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.66667%',
      '5/6': '83.33333%',
      full: '100%',
      screen: '100vw',
    }),
    height: theme => ({
      auto: 'auto',
      ...theme.spacing,
      full: '100%',
      screen: '100vh',
    }),
    minWidth: {
      '0': '0',
      full: '100%',
    },
    minHeight: {
      '0': '0',
      full: '100%',
      screen: '100vh',
    },
    maxWidth: {
      xs: '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      full: '100%',
    },
    maxHeight: {
      full: '100%',
      screen: '100vh',
    },
    padding: theme => theme.spacing,
    margin: theme => ({ auto: 'auto', ...theme.spacing }),
    negativeMargin: theme => theme.spacing,
    objectPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
    },
    boxShadow: {
      default: '0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -1px rgba(0, 0, 0, .06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, .1), 0 10px 10px -5px rgba(0, 0, 0, .04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, .25)',
      inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
      outline: '0 0 0 3px rgba(52,144,220,0.5)',
      none: 'none',
    },
    zIndex: {
      auto: 'auto',
      '0': 0,
      '10': 10,
      '20': 20,
      '30': 30,
      '40': 40,
      '50': 50,
    },
    opacity: {
      '0': '0',
      '25': '.25',
      '50': '.5',
      '75': '.75',
      '100': '1',
    },
    fill: {
      current: 'currentColor',
    },
    stroke: {
      current: 'currentColor',
    },
    flex: {
      '1': '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      none: 'none',
    },
    flexGrow: {
      '0': 0,
      default: 1,
    },
    flexShrink: {
      '0': 0,
      default: 1,
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
    },
  }
}
