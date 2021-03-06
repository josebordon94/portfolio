import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Typography, Box, Grid, Fade } from '@material-ui/core/'
import LinkIcon from '@material-ui/icons/Link'
import { FormattedMessage } from 'react-intl'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    color: theme.palette.text.secondary,
  },

  large: {
    width: '5rem',
    height: '5rem',
  },
  fullPicture: {
    maxWidth: '100%',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '1.3em',
  },
  shadowPic: {
    boxShadow:
      'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
    margin: '1em 0 1em 0',
    maxWidth: '100%',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
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
    <Fade in={true} timeout={600}>
      <Paper className={classes.paper}>
        <Typography
          variant="h1"
          color="initial"
          className={classes.sectionTitle}
        >
          <FormattedMessage id="projects.title" defaultMessage="Proyectos" />
        </Typography>
        {/* Social Network */}
        <Typography
          variant="h2"
          color="initial"
          className={classes.sectionSubTitle}
        >
          <FormattedMessage
            id="projects.sn-title"
            defaultMessage="Social network (red social)"
          />
        </Typography>
        <Typography variant="body1" align="justify">
          <FormattedMessage
            id="projects.sn-intro"
            defaultMessage="Este proyecto se corresponde con una red social inspirada en Instagram, desarrollada en React y dispone de una APIREST trabajando en una base de datos MongoDB."
          />
        </Typography>
        <Grid
          container
          spacing={1}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <Grid item xs={12} md={4} xl={4}>
            <Box boxShadow={3} bgcolor="background.paper" marginY="1rem">
              <img
                src="img/sn-profile.jpg"
                alt="Social network"
                className={classes.fullPicture}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={4} xl={4} boxShadow={3}>
            <Box boxShadow={3} bgcolor="background.paper" marginY="1rem">
              <img
                src="img/sn-post.jpg"
                alt="Social network"
                className={classes.fullPicture}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={4} xl={4}>
            <Box boxShadow={3} bgcolor="background.paper" marginY="1rem">
              <img
                src="img/sn-new.jpg"
                alt="Social network"
                className={classes.fullPicture}
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" align="justify">
              <FormattedMessage
                id="projects.sn-description-intro"
                defaultMessage="La aplicaci??n permite a los usuarios:"
              />
            </Typography>
            <ul className={classes.list}>
              <FormattedMessage
                id="projects.sn-description-list"
                defaultMessage="<li>Registrarse e iniciar sesi??n con verificaci??n JSON Web Token</li> <li>Crear publicaciones con fotos</li> <li>Dar like a publicaciones propias y de otros usuarios</li>  <li>Acceder a perfiles de usuario</li> <li>Comentar publicaciones</li>"
                values={{
                  li: (word) => <li>{word}</li>,
                }}
              />
            </ul>
            <Typography variant="body1" align="justify">
              <FormattedMessage
                id="projects.sn-prelink"
                defaultMessage="Disponible en Github:"
              />
            </Typography>
            <a
              href="https://github.com/josebordon94/social-network"
              className={classes.inlineLink}
            >
              <LinkIcon />
              <span>Social network</span>
            </a>
          </Grid>
        </Grid>
        {/* SGA */}
        <Typography
          variant="h2"
          color="initial"
          className={classes.sectionSubTitle}
        >
          <FormattedMessage
            id="projects.sga-title"
            defaultMessage="Sistema de Gesti??n de Aulas (SGA)"
          />
        </Typography>
        <Typography variant="body1" align="justify">
          <FormattedMessage
            id="projects.sga-intro"
            defaultMessage="Este proyecto se corresponde con mi trabajo final de carrera como
              Licenciado en Sistemas de Informaci??n. El mismo consisti?? en un
              completo sistema de reservas web, orientado a espacios de una
              instituci??n educativa. El mismo fue implementado en el stack LAMP,
              utilizando Codeigniter como framework de PHP sobre una base de
              datos relacional MySQL."
          />
        </Typography>
        <Grid
          container
          spacing={1}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <Grid item xs={12} xl={6}>
            <Box boxShadow={3} bgcolor="background.paper" marginY="1rem">
              <img
                src="img/sga1.jpg"
                alt="Sistema de gestion de aulas"
                className={classes.fullPicture}
              />
            </Box>
          </Grid>
          <Grid item xs={12} xl={6}>
            <Typography variant="body1" align="justify">
              <FormattedMessage
                id="projects.sga-description-intro"
                defaultMessage="Entre sus funcionalidades, el sistema cuenta con:"
              />
            </Typography>
            <ul className={classes.list}>
              <FormattedMessage
                id="projects.sga-description-list"
                defaultMessage="<li>Inicio de sesi??n para cuatro usuarios distintos</li> <li>CRUD completo de sedes, aulas, laboratorios, usuarios, recursos y reservas</li> <li>Distribuci??n de aulas y recursos de clase con fechas y horarios</li>  <li>Recopilaci??n de estad??sticas sobre las reservas, con informes y gr??ficos comparativos</li> <li>Sistema de mensajer??a interna</li> <li>Env??o de emails</li>  <li>Base de datos con triggers, mecanismos de copia de seguridad y restauraci??n</li>  <li>Secci??n de ayuda</li>"
                values={{
                  li: (word) => <li>{word}</li>,
                }}
              />
            </ul>
          </Grid>
        </Grid>
        <Typography variant="body1" align="justify">
          <FormattedMessage
            id="projects.sga-app-link"
            defaultMessage="Puede acceder a una previsualizaci??n del mismo mediante <a>este enlace</a>. Podr?? ver los horarios de clase de una instituci??n ficticia y filtrar las aulas/laboratorios sin necesidad de un usuario registrado."
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
            defaultMessage="Si lo desea, tambi??n puede leer la monograf??a correspondiente a mi trabajo final <a>aqu??</a>."
            values={{
              a: (word) => (
                <a href="documents/Monografia_SGA.pdf" className={classes.link}>
                  {word}
                </a>
              ),
            }}
          />
        </Typography>
        <Typography variant="h2" color="initial">
          <FormattedMessage
            id="projects.vanilla-title"
            defaultMessage="Sitios con Javascript Vainilla"
          />
        </Typography>
        <Typography variant="body1" align="justify">
          <FormattedMessage
            id="projects.vanilla-content1"
            defaultMessage="Considero que la mejor forma de aprender un lenguaje de
              programaci??n es simplemente explorando y, m??s que nada, jugando.
              As?? que al introducirme en el mundo Javascript, para practicar
              manipulaci??n del DOM y manejo de eventos realic?? peque??as p??ginas
              web de juegos simples como ser el cl??sico ta-te-ti y el juego del
              ahorcado."
          />
        </Typography>
        <img src="img/games.jpg" alt="Games" className={classes.shadowPic} />
        <Typography variant="body1" align="justify">
          <FormattedMessage
            id="projects.vanilla-content2"
            defaultMessage="Ambos juegos utilizan canvas de HTML5 para mostrar de forma
              gr??fica el estado de la partida. El ta-te-ti permite jugar con
              alguien m??s en el mismo dispositivo. El juego del ahorcado
              selecciona de forma aleatoria palabras dentro de un archivo JSON,
              por lo que puede descargar la aplicaci??n y editar las palabras
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
          href="https://github.com/josebordon94/Javascript-Tic-Tac-Toe"
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
            defaultMessage=" Personal Budget (Mi presupuesto) se corresponde con una aplicaci??n
              para llevar un registro de ingresos y egresos de dinero de un
              usuario. La aplicaci??n se encuentra desarrollada en el stack MERN
              con MaterialUI. Esta aplicaci??n de portafolio utiliz?? como base el
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
            defaultMessage="<li>Registro de usuario e inicio de sesi??n con JSON Web Token</li><li>Res??men de cuenta con balance total de dinero del usuario</li>  <li> Formulario e historial de operaciones con concepto, fecha y tipo de operaci??n</li> <li>CRUD completo de operaciones de usuario</li>    <li>Secci??n de ayuda</li>"
            values={{
              li: (word) => <li>{word}</li>,
            }}
          />
        </ul>
        <img
          src="img/pb.jpg"
          alt="Personal budget"
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
            defaultMessage="Este proyecto consiste en una API Rest completa para una tienda online gen??rica. Est?? desarrollada con Node, Express y MongoDB. Entre sus funcionalidades se encuentran:"
          />
        </Typography>
        <ul className={classes.list}>
          <FormattedMessage
            id="projects.ecommerce-list"
            defaultMessage="<li>Registro de usuario e inicio de sesi??n con JSON Web Token</li><li>Res??men de cuenta con balance total de dinero del usuario</li>  <li> Formulario e historial de operaciones con concepto, fecha y tipo de operaci??n</li> <li>CRUD completo de operaciones de usuario</li>    <li>Secci??n de ayuda</li>"
            values={{
              li: (word) => <li>{word}</li>,
            }}
          />
        </ul>
        <Typography variant="body1" align="justify">
          <FormattedMessage
            id="projects.ecommerce-current"
            defaultMessage="Estoy trabajando por el momento con una aplicaci??n de React para
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
    </Fade>
  )
}

export default Projects
