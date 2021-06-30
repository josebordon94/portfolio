import React from 'react'
import { Hidden, makeStyles } from '@material-ui/core'
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Cajon from './Cajon'
import Main from '../pages/Main'
import CV from '../pages/CV'
import Projects from '../pages/Projects'

const estilos = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}))

const Contenedor = () => {
  const classes = estilos()
  const [abrir, setAbrir] = React.useState(false)

  const accionAbrir = () => {
    setAbrir(!abrir)
  }

  return (
    <BrowserRouter>
      <div className={classes.root}>
        <Navbar accionAbrir={accionAbrir} />
        <Hidden smDown>
          <Cajon variant="permanent" open={true} />
        </Hidden>
        <Hidden mdUp>
          <Cajon variant="temporary" open={abrir} onClose={accionAbrir} />
        </Hidden>
        <div className={classes.content}>
          <div className={classes.toolbar}></div>
          <Route path="/" exact component={Main} />
          <Route path="/cv" exact component={CV} />
          <Route path="/projects" exact component={Projects} />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Contenedor
