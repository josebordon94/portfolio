import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Typography, Fade } from '@material-ui/core/'
import { FormattedMessage } from 'react-intl'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    color: theme.palette.text.secondary,
  },

  sectionlowSubTitle: {
    fontSize: '1.4rem',
    textAlign: 'left',
    marginLeft: '15px',
    marginTop: '0px',
  },
  large: {
    width: '5rem',
    height: '5rem',
  },
  negrita: {
    fontWeight: 'bold',
  },
  list: {
    textAlign: 'justify',
    fontSize: '1.1em',
  },
}))

const CV = () => {
  const classes = useStyles()
  return (
    <Fade in={true} timeout={600}>
      <Paper className={classes.paper}>
        <Typography
          variant="h1"
          color="initial"
          className={classes.sectionTitle}
        >
          <FormattedMessage id="formation.title" defaultMessage="Formación" />
        </Typography>
        <Typography
          variant="h2"
          color="initial"
          className={classes.sectionSubTitle}
        >
          <FormattedMessage
            id="formation.studiesSubTitle"
            defaultMessage="Estudios"
          />
        </Typography>
        <ul className={classes.list}>
          <li>
            <span className={classes.negrita}>
              <FormattedMessage
                id="formation.study1-title"
                defaultMessage="Licenciatura en Sistemas de Información (2013-2021)."
              />
            </span>{' '}
            <FormattedMessage
              id="formation.study1-description"
              defaultMessage="Título de grado obtenido en Facultad de Ciencias Exactas, Naturales y de Agrimensura. Universidad Nacional del Nordeste (UNNE)."
            />
          </li>
          <li>
            <span className={classes.negrita}>
              <FormattedMessage
                id="formation.study2-title"
                defaultMessage="Analista programador universitario (2013-2017)."
              />
            </span>{' '}
            <FormattedMessage
              id="formation.study2-description"
              defaultMessage="Título de pre-grado obtenido en Facultad de Ciencias Exactas, Naturales y de Agrimensura. Universidad Nacional del Nordeste (UNNE)."
            />
          </li>
          <li>
            <span className={classes.negrita}>
              <FormattedMessage
                id="formation.study3-title"
                defaultMessage="Educación Polimodal Modalidad Economía y Gestión de Organizaciones (2008-2011)."
              />
            </span>{' '}
            <FormattedMessage
              id="formation.study3-description"
              defaultMessage="Instituto CREA, Universidad Católica de Salta."
            />
          </li>
        </ul>
        <Typography
          variant="h2"
          color="initial"
          className={classes.sectionSubTitle}
        >
          <FormattedMessage
            id="formation.coursesSubTitle"
            defaultMessage="Cursos realizados"
          />
        </Typography>
        <ul className={classes.list}>
          <li>
            <span className={classes.negrita}>
              {' '}
              <FormattedMessage
                id="formation.course1-title"
                defaultMessage="Desarrollo con NodeJS"
              />
            </span>{' '}
            Universidad Tecnológica Nacional, Facultad Regional de Buenos Aires
            (UTN –FRA).
          </li>
          <li>
            <span className={classes.negrita}>
              {' '}
              <FormattedMessage
                id="formation.course2-title"
                defaultMessage="Desarrollo con ReactJS"
              />
            </span>{' '}
            Universidad Tecnológica Nacional, Facultad Regional de Buenos Aires
            (UTN –FRA).
          </li>
          <li>
            <span className={classes.negrita}>
              <FormattedMessage
                id="formation.course3-title"
                defaultMessage="Seminario de Formación de Líderes"
              />{' '}
              (2008-2011).
            </span>{' '}
            Instituto de Enseñanza Privada CREA (I.S. 42). 2011.
          </li>
          <li>
            <span className={classes.negrita}>
              <FormattedMessage
                id="formation.course4-title"
                defaultMessage="Seminario de Formación de Líderes"
              />{' '}
              (2008-2011).
            </span>{' '}
            Agencia de Aprendizaje a lo Largo de la Vida, Codo a codo 4.0 2021
          </li>
          <li>
            <span className={classes.negrita}>
              <FormattedMessage
                id="formation.course5-title"
                defaultMessage="Seminario de Formación de Líderes"
              />{' '}
            </span>{' '}
            Alkemy Labs. 2021
          </li>
          <li>
            <span className={classes.negrita}>
              <FormattedMessage
                id="formation.course6-title"
                defaultMessage="Seminario de Formación de Líderes"
              />{' '}
            </span>{' '}
            Agencia de Aprendizaje a lo Largo de la Vida, Codo a codo 4.0 2021
          </li>
        </ul>
        <Typography
          variant="h2"
          color="initial"
          className={classes.sectionSubTitle}
        >
          <FormattedMessage
            id="formation.other.title"
            defaultMessage="Otros antecedentes académicos"
          />
        </Typography>
        <ul className={classes.list}>
          <li>
            <FormattedMessage
              id="formation.other1"
              defaultMessage="Adscripto a la asignatura Taller de Programación I (Software web) de la carrera Licenciatura en Sistemas de Información de la Facultad de Ciencias Exactas, Naturales y de Agrimensura de la UNNE. Año 2017."
            />
          </li>
          <li>
            <FormattedMessage
              id="formation.other2"
              defaultMessage="Adscripto a la asignatura Taller de Programación I (Software web) de la carrera Licenciatura en Sistemas de Información de la Facultad de Ciencias Exactas, Naturales y de Agrimensura de la UNNE. Año 2018."
            />
          </li>
          <li>
            <FormattedMessage
              id="formation.other3"
              defaultMessage="Adscripto a la asignatura Taller de Programación II (Software de escritorio) de la carrera Licenciatura en Sistemas de Información de la Facultad de Ciencias Exactas, Naturales y de Agrimensura de la UNNE. Año 2018."
            />
          </li>
          <li>
            <FormattedMessage
              id="formation.other4"
              defaultMessage="Beca de Estímulo a las Vocaciones Científicas, otorgada por el
                Consejo Interuniversitario Nacional para desarrollar tareas de investigación sobre el tema “TIC y educación: Herramientas Software como soporte a la gestión de recursos físicos en un contexto universitario”. Duración: 1 año. 2019/2020."
            />
          </li>
        </ul>
        <Typography
          variant="h2"
          color="initial"
          className={classes.sectionSubTitle}
        >
          <FormattedMessage
            id="formation.language-subTitle"
            defaultMessage="Idiomas"
          />
        </Typography>
        <ul className={classes.list}>
          <li>
            <span className={classes.negrita}>
              <FormattedMessage
                id="formation.language-title1"
                defaultMessage="Inglés: hablado y escrito (competencia profesional completa)."
              />
            </span>{' '}
            <FormattedMessage
              id="formation.language-description1"
              defaultMessage="Estudios de inglés finalizados en Departamento de Idiomas Modernos en Extensión Universitaria de UNNE – Delegación Corrientes"
            />
          </li>
        </ul>
        <Typography
          variant="h2"
          color="initial"
          className={classes.sectionSubTitle}
        >
          <FormattedMessage
            id="formation.skills-subTitle"
            defaultMessage="Habilidades"
          />
        </Typography>
        <Typography className={classes.sectionlowSubTitle}>
          <FormattedMessage
            id="formation.skills-section1"
            defaultMessage="Desarrollo web"
          />
        </Typography>
        <ul className={classes.list}>
          <li>Node JS + Express</li>
          <li>React JS</li>
          <li>Codeigniter PHP</li>
          <li>HTML 5</li>
          <li>Bootstrap CSS</li>
          <li>Material UI</li>
        </ul>
        <Typography className={classes.sectionlowSubTitle}>
          <FormattedMessage
            id="formation.skills-section2"
            defaultMessage="Manejo de bases de datos"
          />
        </Typography>
        <ul className={classes.list}>
          <li>MySQL</li>
          <li>MongoDB</li>
        </ul>
        <Typography className={classes.sectionlowSubTitle}>
          <FormattedMessage
            id="formation.skills-section3"
            defaultMessage="Otros"
          />
        </Typography>
        <ul className={classes.list}>
          <li>Git</li>
          <li>R Studio</li>
        </ul>
        <Typography
          variant="h2"
          color="initial"
          className={classes.sectionSubTitle}
        >
          <FormattedMessage
            id="formation.publications-subTitle"
            defaultMessage="Publicaciones realizadas"
          />
        </Typography>
        <ul className={classes.list}>
          <li>
            <span className={classes.negrita}>
              Criterios de calidad del software. Un enfoque de Accesibilidad Web
              vinculado a la gestión de recursos físicos.{' '}
            </span>
            III Congreso Internacional de Ciencias de la Computación y Sistemas
            de Información – 2019.
          </li>
        </ul>
        <Typography
          variant="h2"
          color="initial"
          className={classes.sectionSubTitle}
        >
          <FormattedMessage
            id="formation.aditional-subTitle"
            defaultMessage="Información adicional"
          />
        </Typography>
        <ul className={classes.list}>
          <li>
            <FormattedMessage
              id="formation.aditional1"
              defaultMessage="Licencia de conducir nacional B1"
            />
          </li>
          <li>
            <FormattedMessage
              id="formation.aditional2"
              defaultMessage="Disponibilidad para viajar"
            />
          </li>
          <li>
            <FormattedMessage
              id="formation.aditional3"
              defaultMessage="Disponibilidad de vehículo particular"
            />
          </li>
        </ul>
      </Paper>
    </Fade>
  )
}

export default CV
