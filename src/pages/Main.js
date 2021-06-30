import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Typography } from '@material-ui/core/'
import Contact from '../components/Contact'
import { FormattedMessage } from 'react-intl'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  sectionSubTitle: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  avatar: {
    marginLeft: '14px',
  },
  large: {
    width: '5rem',
    height: '5rem',
  },
  mern: {
    width: '100%',
    maxWidth: '800px',
  },
  lamp: {
    width: '100%',
    maxWidth: '380px',
  },
  fullColumn: {
    height: '100%',
  },
  lampColumn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}))

const Main = () => {
  const classes = useStyles()
  return (
    <div>
      <Typography variant="h1" color="initial" className={classes.sectionTitle}>
        <FormattedMessage id="main.title" defaultMessage="Sobre mí" />
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="body1" align="justify">
              <FormattedMessage
                id="main.presentation"
                defaultMessage="              Me llamo José Bordón. Soy Licenciado en Sistemas de Información,
              egresado de la Universidad Nacional del Nordeste. Vivo en
              Corrientes, Argentina. Por el momento me desempeño como
              desarrollador web free-lancer. Me interesa tanto el back como el
              end, sobretodo el desarrollo en el stack MERN (MongoDB + Express +
              React + NodeJS). Este mismo portafolio está codificado en ReactJS,
              utilizando el framework MaterialUI."
              />
            </Typography>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <img
                  src="img/me.png"
                  className={classes.mern}
                  alt="MERN stack"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <img
                  src="img/rn.png"
                  className={classes.mern}
                  alt="MERN stack"
                />
              </Grid>
            </Grid>
            <Typography variant="body1" color="initial" align="justify">
              <FormattedMessage
                id="main.presentation2"
                defaultMessage="También dispongo de conocimientos en frameworks de PHP con bases de datos MySQL en servidores Apache (stack LAMP). Ambos stacks tienen sus ventajas y desventajas en función del proyecto que se quiere realizar."
              />
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={`${classes.paper} ${classes.fullColumn}`}>
            <Grid container spacing={3} className={classes.lampColumn}>
              <Grid item xs={12} md={7} lg={6}>
                <Typography variant="h2" className={classes.sectionSubTitle}>
                  <FormattedMessage
                    id="main.contactTitle"
                    defaultMessage="Información de contacto"
                  />
                </Typography>
                <Contact />
              </Grid>
              <Grid item xs={12} md={5} lg={6} className={classes.lampColumn}>
                <img
                  src="img/lamp.png"
                  className={classes.lamp}
                  alt="LAMP stack"
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default Main
