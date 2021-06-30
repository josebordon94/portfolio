import { createMuiTheme } from '@material-ui/core/styles'
import { deepOrange, grey, blueGrey } from '@material-ui/core/colors'
const theme = createMuiTheme({
  typography: {
    fontFamily: ['Varela', 'sans-serif'],
    h1: {
      fontSize: '3rem',
      marginBottom: '1.3rem',
    },
    h2: {
      fontSize: '2rem',
      textAlign: 'left',
      marginBottom: '10px',
    },
  },
  palette: {
    background: {
      default: grey[200],
    },
    primary: {
      main: blueGrey[900],
    },
    secondary: {
      main: deepOrange[800],
    },
    text: {
      secondary: grey[800],
    },
  },
})
export default theme
