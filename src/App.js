import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './ThemeUI'
import Contenedor from './components/Contenedor'
import { LangProvider } from './context/langContext'

function App() {
  return (
    <LangProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Contenedor />
      </ThemeProvider>
    </LangProvider>
  )
}

export default App
