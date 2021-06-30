import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Typography, Box } from '@material-ui/core/'
import LinkIcon from '@material-ui/icons/Link'
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

  large: {
    width: '5rem',
    height: '5rem',
  },
  fullPicture: {
    maxWidth: '100%',
  },
  shadowPic: {
    boxShadow:
      'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
    margin: '1em 0 1em 0',
    maxWidth: '100%',
  },
  link: {
    color: 'blue',
    textDecoration: 'none',
    fontWeight: '500',
  },
  inlineLink: {
    color: 'blue',
    textDecoration: 'none',
    fontWeight: '500',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    margin: '8px 0 4px 8px',
    fontSize: '16px',
  },
  list: {
    textAlign: 'justify',
    fontSize: '1.1em',
  },
}))
const Projects = () => {
  const classes = useStyles()
  return (
    <div>
      <Typography variant="h1" color="initial" className={classes.sectionTitle}>
        <FormattedMessage id="projects.title" defaultMessage="Proyectos" />
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography
              variant="h2"
              color="initial"
              className={classes.sectionSubTitle}
            >
              <FormattedMessage
                id="projects.sga-title"
                defaultMessage="Sistema de Gestión de Aulas (SGA)"
              />
            </Typography>
            <Typography variant="body1" align="justify">
              <FormattedMessage
                id="projects.sga-intro"
                defaultMessage="Este proyecto se corresponde con mi trabajo final de carrera como
              Licenciado en Sistemas de Información. El mismo consistió en un
              completo sistema de reservas web, orientado a espacios de una
              institución educativa. El mismo fue implementado en el stack LAMP,
              utilizando Codeigniter como framework de PHP sobre una base de
              datos relacional MySQL."
              />
            </Typography>
            <Box boxShadow={3} bgcolor="background.paper" marginY="1rem">
              <img
                src="img/sga1.jpg"
                alt="Sistema de gestion de aulas"
                className={classes.fullPicture}
              />
            </Box>
            <Typography variant="body1" align="justify">
              <FormattedMessage
                id="projects.sga-description-intro"
                defaultMessage="Entre sus funcionalidades, el sistema cuenta con:"
              />
            </Typography>
            <ul className={classes.list}>
              <FormattedMessage
                id="projects.sga-description-list"
                defaultMessage="Lista"
                values={{
                  li: (word) => <li>{word}</li>,
                }}
              />
            </ul>
            <Typography variant="body1" align="justify">
              <FormattedMessage
                id="projects.sga-app-link"
                defaultMessage="Lista"
                values={{
                  a: (word) => (
                    <a
                      href="http://gestionaulas.atwebpages.com/Welcome"
                      className={classes.link}
                    >
                      {word}
                    </a>
                  ),
                }}
              />
              <br />
              <FormattedMessage
                id="projects.sga-mono-link"
                defaultMessage="Lista"
                values={{
                  a: (word) => (
                    <a
                      href="documents/Monografia_SGA.pdf"
                      className={classes.link}
                    >
                      {word}
                    </a>
                  ),
                }}
              />
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography
              variant="h2"
              color="initial"
              className={classes.sectionSubTitle}
            >
              <FormattedMessage
                id="projects.vanilla-title"
                defaultMessage="Sitios con Javascript Vainilla"
              />
            </Typography>
            <Typography variant="body1" align="justify">
              <FormattedMessage
                id="projects.vanilla-content1"
                defaultMessage="              Considero que la mejor forma de aprender un lenguaje de
              programación es simplemente explorando y, más que nada, jugando.
              Así que al introducirme en el mundo Javascript, para practicar
              manipulación del DOM y manejo de eventos realicé pequeñas páginas
              web de juegos simples como ser el clásico ta-te-ti y el juego del
              ahorcado."
              />
            </Typography>
            <img
              src="img/games.jpg"
              alt="Sistema de gestion de aulas"
              className={classes.shadowPic}
            />
            <Typography variant="body1" align="justify">
              <FormattedMessage
                id="projects.vanilla-content2"
                defaultMessage="Ambos juegos utilizan canvas de HTML5 para mostrar de forma
              gráfica el estado de la partida. El ta-te-ti permite jugar con
              alguien más en el mismo dispositivo. El juego del ahorcado
              selecciona de forma aleatoria palabras dentro de un archivo JSON,
              por lo que puede descargar la aplicación y editar las palabras
              para jugar con facilidad."
              />
              <br />
              <br />
              <FormattedMessage
                id="projects.vanilla-links-intro"
                defaultMessage="Ambas aplicaciones se encuentran desplegadas en mi cuenta de github, listas para jugar:"
              />
            </Typography>

            <a
              href="https://josebordon94.github.io/Javascript-Tic-Tac-Toe/"
              className={classes.inlineLink}
            >
              <LinkIcon />
              <span>
                <FormattedMessage
                  id="projects.vanilla-tic-tac-toe"
                  defaultMessage="Ta-te-tix"
                />
              </span>
            </a>
            <a
              href="https://github.com/josebordon94/hangman-single-player"
              className={classes.inlineLink}
            >
              <LinkIcon />
              <span>
                {' '}
                <FormattedMessage
                  id="projects.vanilla-hangman"
                  defaultMessage="Juego del ahorcado"
                />
              </span>
            </a>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography
              variant="h2"
              color="initial"
              className={classes.sectionSubTitle}
            >
              <FormattedMessage
                id="projects.budget-title"
                defaultMessage="Presupuesto personal"
              />
            </Typography>
            <Typography variant="body1" align="justify">
              <FormattedMessage
                id="projects.budget-intro"
                defaultMessage=" Personal Budget (Mi presupuesto) se corresponde con una aplicación
              para llevar un registro de ingresos y egresos de dinero de un
              usuario. La aplicación se encuentra desarrollada en el stack MERN
              con MaterialUI. Esta aplicación de portafolio utilizó como base el
              maquetado de este proyecto, por lo que la interfaz es bastante
              similar."
              />
              <br />
              <br />
              <FormattedMessage
                id="projects.budget-list-intro"
                defaultMessage="Entre sus funcionalidades, el sistema cuenta con:"
              />
            </Typography>
            <ul className={classes.list}>
              <FormattedMessage
                id="projects.budget-list"
                defaultMessage="Lista"
                values={{
                  li: (word) => <li>{word}</li>,
                }}
              />
            </ul>
            <img
              src="img/pb.jpg"
              alt="Sistema de gestion de aulas"
              className={classes.fullPicture}
            />
            <Typography variant="body1" align="justify">
              <FormattedMessage
                id="projects.budget-prelink"
                defaultMessage="Disponible en Github:"
              />
            </Typography>
            <a
              href="https://github.com/josebordon94/personal-budget/"
              className={classes.inlineLink}
            >
              <LinkIcon />
              <span>
                <FormattedMessage
                  id="projects.budget-title"
                  defaultMessage="Presupuesto personal"
                />
              </span>
            </a>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography
              variant="h2"
              color="initial"
              className={classes.sectionSubTitle}
            >
              E-commerce API Rest
            </Typography>
            <Typography variant="body1" align="justify">
              <FormattedMessage
                id="projects.ecommerce-intro"
                defaultMessage="Este proyecto consiste en una API Rest completa para una tienda online genérica. Está desarrollada con Node, Express y MongoDB. Entre sus funcionalidades se encuentran:"
              />
            </Typography>
            <ul className={classes.list}>
              <FormattedMessage
                id="projects.ecommerce-list"
                defaultMessage="Lista"
                values={{
                  li: (word) => <li>{word}</li>,
                }}
              />
            </ul>
            <Typography variant="body1" align="justify">
              <FormattedMessage
                id="projects.ecommerce-current"
                defaultMessage="Estoy trabajando por el momento con una aplicación de React para
              consumir los servicios de esta API."
              />
              <br />
              <br />
              <FormattedMessage
                id="projects.ecommerce-prelink"
                defaultMessage="Disponible en Github:"
              />
            </Typography>
            <a
              href="https://github.com/josebordon94/ecommerce_apirest"
              className={classes.inlineLink}
            >
              <LinkIcon />
              <span>E-commerce API Rest</span>
            </a>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default Projects
