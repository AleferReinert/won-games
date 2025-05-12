const theme = {
  grid: {
    container: '130rem',
    gutter: '3.2rem'
  },
  border: {
    radius: '0.4rem'
  },
  font: {
    family:
      "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    semibold: 500,
    bold: 600,
    sizes: {
      xxsmall: '1rem',
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2rem',
      xxlarge: '2.8rem',
      huge: '5.2rem'
    }
  },
  colors: {
    primary: '#F231A5',
    secondary: '#3CD3C1',
    darkBg: '#06092B',
    lightBg: '#f2f2f2',
    white: '#FAFAFA',
    black: '#030517',
    lightGray: '#EAEAEA',
    lightGrayHover: '#d9d9d9',
    gray: '#8F8F8F',
    darkGray: '#2E2F42',
    error: { color: '#721c24', background: '#f8d7da' },
    success: { color: '#155724', background: '#d4edda' },
    info: { color: '#0c5460', background: '#d1ecf1' },
    warning: { color: '#856404', background: '#fff3cd' }
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  },
  breakpoint: {
    xxsmall: '320px',
    xsmall: '360px',
    small: '768px',
    medium: '1024px',
    large: '1366px',
    xlarge: '1920px'
  }
}

export default theme
